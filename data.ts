import { Author, Book, FAQItem, Testimonial } from './types';

export const AUTHOR: Author = {
  name: 'Kevin Yumbya Sila',
  tagline: 'Kenyan author and cultural critic',
  image: '/images/author.webp',
  bio: [
    'Kevin Sila is a Kenyan author and cultural critic who brings together a background in mathematics and computer science with philosophical, psychological and spiritual reflection.',
    'His books explore two questions at the heart of modern life: how to reclaim our attention from a world designed to fragment it, and how to use that clarity to build wisdom, character and a meaningful legacy.',
    'His writing is practical without being hurried, reflective without losing sight of daily life, and written for readers seeking depth in a noisy world.'
  ]
};

export const BOOKS: Book[] = [
  {
    id: 'attention-by-design',
    title: 'Attention By Design',
    subtitle: 'Mastering the Digital Patterns That Shape Your Mind',
    eyebrow: 'Start with clarity',
    shortPromise: 'Reclaim your mind before the digital world designs it for you.',
    description: 'A thoughtful, practical guide to understanding digital distraction and rebuilding focus, presence and intentional connection.',
    longDescription: [
      'We are constantly connected, yet often feel scattered, overstimulated and strangely absent from our own lives. Attention By Design reveals how digital environments shape focus, relationships, rest and the way we experience the world.',
      'Rather than demanding that you abandon technology, the book offers a balanced path: understand the forces competing for your attention, establish realistic boundaries and recover the inner space required for meaningful work and relationships.',
      'Every chapter closes with reflection prompts that help you examine your habits and translate insight into deliberate change.'
    ],
    outcomes: [
      'Understand dopamine loops, fragmentation and the always-on economy',
      'Build practical digital boundaries without rejecting technology',
      'Recover focus, solitude, presence and deeper relationships'
    ],
    idealFor: 'Professionals, students, creatives, parents and reflective readers who feel mentally scattered or digitally overwhelmed.',
    coverImage: '/images/attention-by-design.webp',
    coverAlt: 'Cover of Attention By Design by Kevin Sila',
    theme: 'attention',
    tags: ['Digital minimalism', 'Mental clarity', 'Intentional living'],
    formats: [
      {
        type: 'Ebook', price: '$5.99', available: true,
        links: [
          { label: 'Amazon Kindle', retailer: 'Amazon', market: 'Worldwide', url: 'https://www.amazon.com/dp/B0G71Y1G2D' },
          { label: 'Gumroad ebook', retailer: 'Gumroad', market: 'Direct', url: 'https://kevinsila.gumroad.com/l/attentionbydesign' }
        ]
      },
      { type: 'Paperback', price: '$14.99', available: true, links: [
        { label: 'Amazon paperback', retailer: 'Amazon', market: 'Worldwide', url: 'https://www.amazon.com/dp/B0GP6YFD2V' }
      ] },
      { type: 'Hardcover', price: '$24.99', available: true, links: [
        { label: 'Amazon hardcover', retailer: 'Amazon', market: 'Worldwide', url: 'https://www.amazon.com/dp/B0GP6698KK' }
      ] }
    ],
    audioPreview: {
      heading: 'Listen to the deep dive',
      description: 'Hear how the dopamine trap works—and how to begin reclaiming your focus in an age of constant noise.',
      title: 'Mastering the Digital Patterns That Shape Your Mind',
      subtitle: 'A five-minute introduction',
      sourceUrl: 'https://res.cloudinary.com/dn6libhk1/video/upload/v1771500784/Reclaiming_Presence_in_the_Digital_Age_js7nl1.mp4',
      theme: 'attention'
    }
  },
  {
    id: 'the-firelit-mind',
    title: 'The Firelit Mind',
    subtitle: '13 Timeless Principles for a Life Well-Lived',
    eyebrow: 'Continue with wisdom',
    shortPromise: 'Turn clear attention into wise choices, durable character and a legacy worth passing on.',
    description: 'Timeless biblical wisdom, contemporary psychology and practical frameworks for character, leadership and a life of purpose.',
    longDescription: [
      'We are drowning in information but starving for wisdom that lasts. The Firelit Mind returns to tested principles that have helped people navigate power, suffering, relationships, conflict, responsibility and renewal across generations.',
      'Through biblical narratives, contemporary psychology and practical application, the book examines discernment, humility, stewardship, resilience, speech, covenant, reconciliation, integrity, leadership, rest, sacred attention and wisdom legacy.',
      'This is not wisdom preserved behind glass. It is a field guide for making better choices, becoming a person of substance and passing light to the people who come after you.'
    ],
    outcomes: [
      'Make wiser decisions in a world crowded with opinions',
      'Lead, speak and handle conflict with humility and integrity',
      'Build resilient character and a wisdom legacy that outlives you'
    ],
    idealFor: 'Leaders, mentors, parents, professionals and contemplative readers seeking biblical wisdom with practical modern application.',
    coverImage: '/images/the-firelit-mind.webp',
    coverAlt: 'Cover of The Firelit Mind by Kevin Sila',
    theme: 'firelit',
    tags: ['Timeless wisdom', 'Character', 'Leadership and legacy'],
    formats: [
      {
        type: 'Ebook', price: '$5.99', available: true,
        links: [
          { label: 'Amazon Kindle', retailer: 'Amazon', market: 'Worldwide', url: 'https://www.amazon.com/dp/B0G49HNCZR' },
          { label: 'Kevin Sila on Selar', retailer: 'Selar', market: 'Africa and worldwide', url: 'https://selar.com/m/kevinsila' },
          { label: 'Gumroad ebook', retailer: 'Gumroad', market: 'Direct', url: 'https://kevinsila.gumroad.com/l/thefirelitmind' },
          { label: 'Nuria Kenya', retailer: 'Nuria', market: 'Kenya', url: 'https://nuriakenya.com/product/thefirelitmind/' }
        ]
      },
      { type: 'Paperback', price: '$14.99', available: true, links: [
        { label: 'Amazon paperback', retailer: 'Amazon', market: 'Worldwide', url: 'https://www.amazon.com/dp/B0GNPVN1SH' }
      ] },
      { type: 'Hardcover', price: '$24.99', available: true, links: [
        { label: 'Amazon hardcover', retailer: 'Amazon', market: 'Worldwide', url: 'https://www.amazon.com/dp/B0GNN2K81H' }
      ] }
    ],
    audioPreview: {
      heading: 'Listen to the preview',
      description: 'Discover the timeless principles that guide character, discernment and legacy.',
      title: 'The Firelit Mind: Preview',
      subtitle: 'A four-minute introduction',
      sourceUrl: 'https://res.cloudinary.com/dn6libhk1/video/upload/v1771503670/Firelit%20Mind.mp4',
      theme: 'firelit'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', quote: 'An essential book for leaders. It brilliantly connects biblical wisdom to the core challenges of modern leadership and character development. It is an anchor in a chaotic age.', author: 'Dr. M. Kinyanjui', role: 'Leadership consultant', book: 'The Firelit Mind' },
  { id: 't2', quote: 'This is the handbook for surviving the always-on life. It gave me permission to slow down and practical steps to reclaim my focus.', author: 'Sarah W.', role: 'Early reader', book: 'Attention By Design' },
  { id: 't3', quote: "Kevin Sila's writing is a rare blend of poetic reflection and clear, actionable strategy. He helps you see the world with new eyes and equips you to live better.", author: 'P. Ochieng', role: 'Author and mentor' }
];

export const FAQS: FAQItem[] = [
  { question: 'Which book should I read first?', answer: 'Begin with Attention By Design if distraction, mental noise or your relationship with technology is the immediate challenge. Begin with The Firelit Mind if you are focused on decisions, character, leadership or legacy. Read together, the books move from reclaiming attention to using it wisely.' },
  { question: 'Is The Firelit Mind only for Christian readers?', answer: 'The book is openly grounded in biblical narratives. Its lessons on discernment, humility, stewardship, conflict, integrity, leadership and rest are explained in a practical way for readers approaching from faith, curiosity or a desire for deeper wisdom.' },
  { question: 'Does Attention By Design recommend abandoning technology?', answer: 'No. It advocates intentional technology rather than total withdrawal. The goal is to understand the forces shaping your attention and establish realistic boundaries that protect focus, presence and relationships.' },
  { question: 'Which formats are available?', answer: 'Both books are available as ebooks, paperbacks and hardcovers. Availability and final prices can vary by retailer and country.' },
  { question: 'Can I listen before choosing?', answer: 'Yes. Each book has a free four-to-five-minute audio introduction on this website.' }
];

export const getBook = (id: string) => BOOKS.find((book) => book.id === id);
