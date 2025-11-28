import { Book, Author } from './types';

export const AUTHOR: Author = {
  name: "Kevin Yumbya Sila",
  tagline: "Bridging technical precision with psychological depth.",
  image: "https://picsum.photos/400/400?grayscale", // Placeholder
  bio: [
    "Kevin Yumbya Sila is a Kenyan author who blends a technical background in mathematics and computer science with deep psychological insight. He draws from personal rediscovery to explore modern life's hidden costs.",
    "His work focuses on cultural critique without judgment, offering practical paths to presence in an 'always-on' world. When not writing, he finds renewal in unshared walks and meaningful conversations.",
    "He invites readers to return to the warmth of the fire—where stories were told and character was forged."
  ]
};

export const BOOKS: Book[] = [
  {
    id: "firelit-wisdom",
    title: "Firelit Wisdom",
    subtitle: "Ancient Truths For Modern Living",
    description: "Discover 13 timeless principles to discern truth, lead with humility, and build a legacy that outlives you.",
    longDescription: [
      "We are drowning in information but starving for wisdom. We have endless options, yet struggle to find the path.",
      "Blending biblical narrative with modern psychology, Firelit Wisdom invites you to return to the warmth of the fire—where stories were told, character was forged, and elders passed the torch to the next generation.",
      "This book is an anchor for a restless age."
    ],
    coverImage: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=600&h=900&auto=format&fit=crop", 
    themeColor: "bg-orange-50",
    tags: ["Biblical Narrative", "Psychology", "Leadership", "Legacy"],
    formats: [
      {
        type: "Ebook",
        price: "$5.99",
        available: true,
        links: [
          { label: "Amazon", url: "https://www.amazon.com/dp/B0G49HNCZR" },
          { label: "Selar", url: "https://selar.com/6z86mz4264" }
        ]
      },
      {
        type: "Paperback",
        price: "$14.99",
        available: false, // Coming soon
        links: []
      },
      {
        type: "Hardcover",
        price: "$24.99",
        available: false, // Coming soon
        links: []
      }
    ]
  },
  {
    id: "solitude-digital",
    title: "Solitude In The Digital Age",
    subtitle: "Reclaiming Depth in a World That Won't Stop Talking",
    description: "A cultural and psychological exploration of how constant connectivity reshapes our minds and relationships.",
    longDescription: [
      "This book began as a realization of how digital media reshapes our world. It explores the silent crowds, the dopamine drips, and the vanishing friendships of our time.",
      "It is not merely a critique—it is a roadmap back to depth. It offers practical practices of solitude, slowness, movement, and digital boundaries.",
      "Start small: One unshared breath at a time. Let solitude rebuild what digital life has fragmented."
    ],
    coverImage: "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?q=80&w=600&h=900&auto=format&fit=crop",
    themeColor: "bg-blue-50",
    tags: ["Digital Detox", "Mental Health", "Focus", "Culture"],
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