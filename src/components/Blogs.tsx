import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, Users, Rss } from "lucide-react";
import { FavoritePosts, FeaturedExternalPosts } from "../data/blogData";

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

export default function Blogs() {
  const [latestPosts, setLatestPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aliasghar.bsinfo");
        const data = await response.json();
        if (data.status === "ok") {
          setLatestPosts(data.items);
        } else {
          setError("Failed to fetch recent posts from Medium.");
        }
      } catch (err) {
        setError("An error occurred while fetching posts.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  const cleanDescription = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const firstP = doc.querySelector('p');
    if (firstP && firstP.textContent) {
      return firstP.textContent.substring(0, 150) + "...";
    }
    return "Read more on Medium...";
  };

  const PostCard = ({ title, url, author, description, date, tags, isHighlighted }: { title: string, url: string, author: string, description: string, date: string, tags: string[], isHighlighted?: boolean }) => (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className={`group flex flex-col p-6 rounded-3xl backdrop-blur-md bg-cream/5 border border-cream/10 hover:border-amber/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] h-full ${isHighlighted ? 'border-amber/20 bg-amber/5' : ''}`}
    >
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-xl font-bold text-cream group-hover:text-amber transition-colors line-clamp-2 leading-tight">
          {title}
        </h3>
        <ExternalLink className="w-5 h-5 text-cream/40 group-hover:text-amber flex-shrink-0" />
      </div>
      
      <p className="text-cream/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
        {description}
      </p>

      <div className="mt-auto space-y-4">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2.5 py-1 rounded-full bg-cream/10 text-cream/80 text-xs font-medium border border-cream/10">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center pt-4 border-t border-cream/10">
          <span className="text-amber/80 font-medium text-sm">{author}</span>
          <span className="text-cream/50 text-xs">
            {date ? new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : ''}
          </span>
        </div>
      </div>
    </motion.a>
  );

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen max-w-7xl mx-auto space-y-20">
      
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/10 border border-amber/20 text-amber font-medium text-sm"
        >
          <Rss className="w-4 h-4" /> Continuous Learning
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
        >
          Insights & <span className="text-amber">Reflections</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-cream/70 text-lg leading-relaxed"
        >
          Welcome to my digital garden. Here, I document my cybersecurity journey, share my favorite technical deep-dives, and highlight brilliant work from across the community.
        </motion.p>
      </section>

      {/* Latest from Medium */}
      <section className="w-full relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-cream/5 border border-cream/10">
            <Rss className="w-6 h-6 text-amber" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cream">Latest from Medium</h2>
            <p className="text-cream/60 text-sm mt-1">Automatically synced with my profile</p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber"></div>
          </div>
        ) : error ? (
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-center font-medium">
            {error}
          </div>
        ) : latestPosts.length === 0 ? (
           <div className="p-12 rounded-2xl bg-cream/5 border border-cream/10 text-center text-cream/60 font-medium">
             No recent posts found. Check back soon!
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.slice(0, 6).map((post, idx) => (
              <PostCard 
                key={idx}
                title={post.title}
                url={post.link}
                author={post.author || "Ali Asghar"}
                description={cleanDescription(post.description)}
                date={post.pubDate}
                tags={post.categories}
              />
            ))}
          </div>
        )}
      </section>

      {/* Curated Favorites */}
      <section className="w-full relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-cream/5 border border-cream/10">
            <Star className="w-6 h-6 text-amber" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cream">My Favorites</h2>
            <p className="text-cream/60 text-sm mt-1">Articles I frequently revisit</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FavoritePosts.map((post, idx) => (
            <PostCard key={idx} {...post} isHighlighted={true} />
          ))}
        </div>
      </section>

      {/* Featured Authors */}
      <section className="w-full relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-cream/5 border border-cream/10">
            <Users className="w-6 h-6 text-amber" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cream">Community Highlights</h2>
            <p className="text-cream/60 text-sm mt-1">Exceptional reads by other professionals</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FeaturedExternalPosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </section>

    </div>
  );
}
