// pages/blog.tsx
import BlogPost from "./BlogPost";

export default function Blog() {
  return (
    <section id="blog"className="py-20 px-6 md:px-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold mb-10 text-purple-400">Blog & Notes</h2>
      <BlogPost slug="redesigning-my-portfolio" />
      <BlogPost slug="second" />
    </section>
  );
}

