import { Book, Author, Testimonial, FAQItem } from './types';

export const AUTHOR: Author = {
  name: "Kevin Yumbya Sila",
  tagline: "Author & Cultural Critic",
  image: "/images/author.jpg", 
  bio: [
    "Kevin Sila is a Kenyan author and cultural critic known for his unique approach: merging a technical background in mathematics and computer science with deep philosophical and psychological insight.",
    "His work serves as a Wisdom Bridge, exploring the hidden costs of the digital age and offering practical blueprints for personal resilience. Through books like Firelit Wisdom and Solitude in the Digital Age, he guides readers to build enduring character, reclaim focus, and cultivate a life of purpose.",
    "His writing is grounded in personal rediscovery and cultural critique, delivered without judgment, and focused on creating paths to presence in an 'always-on' world. When not writing, he finds renewal in unshared walks and meaningful conversations."
  ]
};

export const BOOKS: Book[] = [
  {
    id: "firelit-wisdom",
    title: "Firelit Wisdom",
    subtitle: "Ancient Truths For Modern Living",
    description: "Discover 13 timeless principles to discern truth, lead with humility, and build a legacy that outlives you.",
    longDescription: [
      "We are drowning in information but starving for wisdom. Where can we find an anchor for a life that lasts? Firelit Wisdom is a profound guide that fuses timeless biblical narratives with practical psychological insights to solve modern problems.",
      "Inside, you will explore:",
      "• The psychological cost of poor discernment and how to make truly wise decisions.",
      "• How ancient rituals can forge enduring character and leadership that transcends trends.",
      "• The principles for building a lasting legacy and passing essential wisdom to the next generation.",
      "A return to the 'firelit heart,' where true strength and clarity are discovered. This book offers a blueprint for intentional living, teaching you how to use enduring principles to navigate the relentless complexity of the modern world."
    ],
    coverImage: "/images/firelit-cover.jpg", 
    themeColor: "bg-orange-50",
    tags: ["TimelessWisdom", "CharacterDevelopment", "ChristianLeadership", "LegacyBuilding"],
    formats: [
      {
        type: "Ebook",
        price: "$5.99",
        available: true,
        links: [
          { label: "Buy on Amazon", url: "https://www.amazon.com/dp/B0G49HNCZR" },
          { label: "Buy on Selar", url: "https://selar.com/6z86mz4264" }
        ]
      },
      {
        type: "Paperback",
        price: "$14.99",
        available: true,
        links: [
          { label: "Buy on Amazon", url: "https://www.amazon.com/dp/9914779050?ref_=pe_93986420_774957520" }
        ]
      },
      {
        type: "Hardcover",
        price: "$24.99",
        available: true,
        links: [
          { label: "Buy on Amazon", url: "https://www.amazon.com/dp/B0G4KBQMVF?ref_=pe_93986420_774957520" }
        ]
      }
    ]
  },
  {
    id: "solitude-digital",
    title: "Solitude In The Digital Age",
    subtitle: "Reclaiming Depth and Focus in a Digitally Noisy World",
    description: "A cultural and psychological exploration of how constant connectivity reshapes our minds and relationships.",
    longDescription: [
      "We are living in an era of constant connection and crippling loneliness. Solitude in the Digital Age is your essential roadmap back to focus, presence, and a thriving inner life. This book delves deep into the topics you need to master:",
      "• The Science of Isolation: Understanding the biological cost of dopamine drips, the anxiety of being 'Always On,' and how constant data leads to mental fragmentation.",
      "• The Art of Reclaiming: Practical guidance on implementing intentional solitude, the power of slowness, and how movement can reset the mind.",
      "• The Blueprint for Boundaries: How to practice Digital Minimalism Without Extremes to protect your attention and energy.",
      "This book is a powerful, non-judgmental cultural critique and a practical survival guide for anyone ready to rebuild the depth that the noisy digital world has fragmented."
    ],
    coverImage: "/images/solitude-cover.jpg",
    themeColor: "bg-blue-50",
    tags: ["DigitalMinimalism", "MentalClarity", "IntentionalLiving", "Psychology"],
    formats: [
      {
        type: "Ebook",
        price: "$5.99",
        available: false, // Links coming soon
        links: []
      },
      {
        type: "Paperback",
        price: "$14.99",
        available: false,
        links: []
      },
      {
        type: "Hardcover",
        price: "$24.99",
        available: false,
        links: []
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "An essential book for leaders. It brilliantly connects biblical wisdom to the core challenges of modern leadership and character development. It’s an anchor in a chaotic age.",
    author: "Dr. M. Kinyanjui",
    role: "Leadership Consultant"
  },
  {
    id: "t2",
    quote: "This is the handbook for surviving the 'always-on' life. It gave me permission to slow down and gave me practical steps to reclaim my focus. A necessary cultural critique.",
    author: "Sarah W.",
    role: "Early Reader"
  },
  {
    id: "t3",
    quote: "Kevin Sila's writing is a rare blend of poetic reflection and clear, actionable strategy. He helps you see the world with new eyes and equips you to live better.",
    author: "P. Ochieng",
    role: "Author & Mentor"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Who are these books for?",
    answer: "These books are for anyone feeling the pressures of the modern world—from leaders seeking enduring character (Firelit Wisdom) to professionals struggling with digital distraction and focus (Solitude in the Digital Age)."
  },
  {
    question: "Is Firelit Wisdom only for religious readers?",
    answer: "While Firelit Wisdom draws on biblical narratives for its foundation, its core themes of character, decision-making, and wisdom are universal. It is written to be accessible and practical for readers of all backgrounds."
  },
  {
    question: "Does Solitude in the Digital Age recommend abandoning technology?",
    answer: "No. The book advocates for Digital Minimalism Without Extremes. It offers a roadmap for moderation and setting intentional boundaries to reclaim your focus, not a total withdrawal from the modern world."
  },
  {
    question: "What is the author's background?",
    answer: "Kevin Sila blends a technical background in computer science with deep psychological and spiritual insight, offering a unique perspective on modern life's challenges."
  }
];