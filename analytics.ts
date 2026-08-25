type EventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (name: string, parameters: EventParameters = {}) => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...parameters });

  if (typeof window.fbq === 'function' && name === 'retailer_click') {
    window.fbq('track', 'InitiateCheckout', parameters);
  }
};
