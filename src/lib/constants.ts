export const SITE = {
  name: "The Builder's Way",
  tagline: "The art of building, rebuilding, and becoming.",
  description:
    "The art of building, rebuilding, and becoming. Through work, reflection, and the space where change begins.",
  url: "https://buildersway.io",
  email: "richard@buildersway.io",
  author: "Richard Van Natta",
};

export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/vannattar",
    icon: "instagram" as const,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/richardvannatta",
    icon: "twitter" as const,
  },
  {
    label: "Substack",
    href: "https://richardvannatta.substack.com",
    icon: "pen-line" as const,
  },
] as const;

export const PROJECTS = [
  {
    name: "Voice Hats",
    tagline: "Your life, strategically managed.",
    description:
      "A voice-driven life management app that goes far beyond a to-do list. Define the roles you play in life: parent, creator, leader. Voice Hats surfaces what's truly strategic, fades the noise, and even researches tasks for you.",
    features: [
      "Voice-driven task management",
      "Role-based life organization",
      "Strategic task surfacing",
      "Proactive AI research assistance",
      "Document-aware context (RAG)",
    ],
    url: "https://voicehats.com",
    status: "coming-soon" as const,
    philosophy:
      "Your trajectory is shaped by what you focus on. Voice Hats helps you focus on what actually moves your life forward.",
  },
  {
    name: "ProReply",
    tagline: "Thoughtful replies, instantly.",
    description:
      "A browser extension that helps you respond to email with intelligence and care. ProReply detects open emails, reads their sentiment, references your documents, and generates contextual replies. All with a few clicks.",
    features: [
      "Webmail detection and sentiment analysis",
      "Document-aware replies (RAG)",
      "Voice-shaped response crafting",
      "Automatic reply insertion",
      "Team sharing (up to 500 replies/month)",
    ],
    url: "https://proreply.app",
    status: "coming-soon" as const,
    philosophy:
      "Communication is a seed you plant in every interaction. ProReply helps you plant better ones.",
  },
] as const;

export const PUBLICATIONS = [
  {
    name: "The Builder's Way",
    description:
      "Exploring the art of building, rebuilding, and becoming. Through work, reflection, and the space where change begins.",
    url: "https://richardvannatta.substack.com",
    primary: true,
  },
  {
    name: "The Leader's Way",
    description:
      "Practical wisdom for leaders who build the future. On leadership, growth, and the courage to guide others while still becoming yourself.",
    url: "https://theleadersway.substack.com",
    primary: false,
  },
] as const;
