import { Book, Author, Testimonial, FAQItem } from './types';

export const AUTHOR: Author = {
  name: "Kevin Yumbya Sila",
  tagline: "Author",
  image: "/images/author.jpg", 
  bio: [
    "Kevin Sila is a Kenyan author and cultural critic known for his unique approach: merging a technical background in mathematics and computer science with deep philosophical and psychological insight.",
    "His work serves as a Wisdom Bridge, exploring the hidden costs of the digital age and offering practical blueprints for personal resilience. Through books like The Firelit Mind and Attention By Design, he guides readers to build enduring character, reclaim focus, and cultivate a life of purpose.",
    "His writing is grounded in personal rediscovery and cultural critique, delivered without judgment, and focused on creating paths to presence in an 'always-on' world. When not writing, he finds renewal in unshared walks and meaningful conversations."
  ]
};

export const BOOKS: Book[] = [
  {
    id: "firelit-wisdom",
    title: "The Firelit Mind",
    subtitle: "13 Timeless Principles for Modern Living",
    description: "Discover 13 Timeless principles to discern truth, lead with humility, and build a legacy that outlives you.",
    longDescription: [
      "We are drowning in information but starving for the wisdom that truly lasts. You don't need a new trend; you need a bedrock foundation for living.",
      "The Firelit Mind is a powerful guide that uses engaging, creative storytelling from the Bible and pairs these ancient lessons with practical insights for your daily life, modern challenges, and professional ventures.",
      "This book provides you with the fundamental, timeless principles (the \"ancient anchors\") for character and conduct. It shows you that the core challenges you face—in leadership, decision-making, and personal growth—have been navigated for millennia. By mastering these essentials, you will lay the groundwork for a truly fulfilled life.",
      "Inside, you will master 13 timeless principles covering:",
      "• Character and Self-Improvement: How to become a better person by integrating timeless lessons into your life and realizing that all your current challenges have been faced before.",
      "• Leadership and Conflict: The fundamentals of handling difficult situations and leading others with humility and integrity.",
      "• Legacy Building: Practical steps for achieving a fulfilled life and passing on essential wisdom to the next generation.",
      "This book is a blueprint for understanding life's most essential fundamentals and building a lasting, intentional character."
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
          { label: "Buy on Selar", url: "https://selar.com/thefirelitmind" },
          { label: "Buy on Nuria", url: "https://nuriakenya.com/product/thefirelitmind/" }
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
    ],
    audioPreview: {
      heading: "Listen to the Deep Dive",
      description: "In a world of endless data, we often lose the very wisdom our ancestors held. Listen to this exploration of how to quiet the digital noise and return to the firelight of true understanding.",
      title: "The Firelit Mind: Starving for Wisdom in an Age of Information",
      subtitle: "14-Minute Deep Dive into 13 Timeless Principles",
      sourceUrl: "https://res.cloudinary.com/dn6libhk1/video/upload/e_volume:auto,q_auto,f_auto/v1767872555/Information_Overload_Starving_for_Wisdom_wustrp.mp4",
      theme: 'firelit'
    }
  },
  {
    id: "solitude-digital",
    title: "Attention By Design",
    subtitle: "Mastering the Digital Patterns That Shape Your Mind",
    description: "A cultural and psychological exploration of how constant connectivity reshapes our minds and relationships.",
    longDescription: [
      "We are constantly connected, yet always somehow distracted. The digital age has reshaped our interactions, making deep presence difficult and turning true connection into superficial performance. Attention By Design is your essential roadmap to understanding the invisible costs of the modern world and reclaiming your focus, depth, and inner peace.",
      "This book is not just a digital critique; it’s a detailed guide that clearly explains:",
      "• The Unseen Psychological Costs: How the rise of performance culture on social media and the \"always-on\" economy are fundamentally changing how you experience places, people, and life itself—often without you realizing the emotional and biological toll.",
      "• The Science of Fragmentation: Understanding the biological cost of dopamine addiction, the anxiety of endless information, and how this leads to mental fog and burnout.",
      "• The Path to Identifying and Mitigating these modern-day changes: Practical, non-extreme strategies for implementing Digital Minimalism and intentional slowness to protect your attention and energy.",
      "• For Lasting Change: To ensure you don't just read the book but apply it, every chapter ends with Reflection Prompts that help you analyze your current habits and immediately improve your life chapter-by-chapter."
    ],
    coverImage: "/images/book-solitude.jpg",
    themeColor: "bg-blue-50",
    tags: ["DigitalMinimalism", "MentalClarity", "IntentionalLiving", "Psychology"],
    formats: [
      {
        type: "Ebook",
        price: "$5.99",
        available: true,
        links: [
          { label: "Buy on Amazon", url: "https://www.amazon.com/dp/B0G71Y1G2D" }
        ]
      },
      {
        type: "Paperback",
        price: "$14.99",
        available: true,
        links: [
            { label: "Buy on Amazon", url: "https://www.amazon.com/dp/B0G7CPXXRJ" }
        ]
      },
      {
        type: "Hardcover",
        price: "$24.99",
        available: true,
        links: [
            { label: "Buy on Amazon", url: "https://www.amazon.com/dp/B0G7D51J28" }
        ]
      }
    ],
    audioPreview: {
      heading: "Listen to the Deep Dive",
      description: "Discover the hidden mechanics of the dopamine trap and how to reclaim your focus in an age of constant noise.",
      title: "Mastering the Digital Patterns That Shape Your Mind",
      subtitle: "14-Minute Executive Summary",
      sourceUrl: "https://res.cloudinary.com/dn6libhk1/video/upload/e_volume:auto,q_auto,f_auto/v1767817013/Reclaiming_Presence_in_the_Digital_Age_js7nl1.mp4",
      theme: 'dark'
    }
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
    answer: "These books are for anyone feeling the pressures of the modern world—from leaders seeking enduring character (The Firelit Mind) to professionals struggling with digital distraction and focus (Attention By Design)."
  },
  {
    question: "Is The Firelit Mind only for religious readers?",
    answer: "While The Firelit Mind draws on biblical narratives for its foundation, its core themes of character, decision-making, and wisdom are universal. It is written to be accessible and practical for readers of all backgrounds."
  },
  {
    question: "Does Attention By Design recommend abandoning technology?",
    answer: "No. The book advocates for Digital Minimalism Without Extremes. It offers a roadmap for moderation and setting intentional boundaries to reclaim your focus, not a total withdrawal from the modern world."
  },
  {
    question: "What is the author's background?",
    answer: "Kevin Sila blends a technical background in computer science with deep psychological and spiritual insight, offering a unique perspective on modern life's challenges."
  }
];