import React from 'react';

const PrivacyPage: React.FC = () => (
  <main id="main-content" className="bg-white px-5 pb-24 pt-36 md:px-8 md:pt-44">
    <article className="prose-legal mx-auto max-w-3xl">
      <p className="eyebrow">Privacy</p>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-stone-950">Privacy notice</h1>
      <p className="mt-5 font-sans text-sm text-stone-500">Last updated: 25 August 2026</p>
      <p>This website presents books by Kevin Yumbya Sila and links to independent retailers. It does not process book payments directly.</p>
      <h2>Analytics and advertising</h2>
      <p>The site may use Google Analytics, Google Tag Manager and Meta Pixel to understand visits, improve the reading experience and measure advertising performance. These services may set cookies or receive technical information such as browser type, device information, visited pages and interactions.</p>
      <h2>External retailers</h2>
      <p>When you follow a purchase link, you leave this website. Amazon, Selar, Gumroad and Nuria process purchases under their own privacy and payment policies.</p>
      <h2>Contact</h2>
      <p>Questions about this notice can be sent to <a href="mailto:kevinsila100@gmail.com">kevinsila100@gmail.com</a>.</p>
      <p><a href="/" className="font-sans font-semibold">← Return to the books</a></p>
    </article>
  </main>
);

export default PrivacyPage;
