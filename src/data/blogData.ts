export interface BlogPost {
  title: string;
  url: string;
  author: string;
  description: string;
  date: string;
  tags: string[];
}

// Note: Add my favorite Medium articles here
export const FavoritePosts: BlogPost[] = [
  {
    title: "How to Build a Secure Enterprise Architecture",
    url: "https://medium.com/@aliasghar.bsinfo/example-favorite-1", // TODO: Replace with an actual favorite link
    author: "Ali Asghar",
    description: "An in-depth look at designing resilient enterprise systems with zero-trust principles in mind.",
    date: "Oct 2025",
    tags: ["Enterprise Architecture", "Zero Trust"]
  }
];

// Note: Add amazing articles from other authors to feature here
export const FeaturedExternalPosts: BlogPost[] = [
  {
    title: "The State of Cloud Security in 2026",
    url: "https://medium.com/example-author/cloud-security", // TODO: Replace with actual link
    author: "Jane Doe",
    description: "A comprehensive breakdown of emerging cloud threats and how organizations can stay ahead of the curve.",
    date: "Jan 2026",
    tags: ["Cloud Security", "Trends"]
  }
];
