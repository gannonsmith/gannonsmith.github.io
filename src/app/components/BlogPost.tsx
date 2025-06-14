// components/BlogPost.tsx
"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

export default function BlogPost({ slug }: { slug: string }) {
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({ title: "", date: "", description: "" });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(`/posts/${slug}.md`);
      const text = await res.text();
      const { data, content } = matter(text);
      setContent(content);
      setMeta(data as any);
    };

    fetchMarkdown();
  }, [slug]);

  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 mb-16 bg-gray-800/30 p-6 rounded-xl shadow-lg transition-all">
      <h1 className="text-purple-400 text-3xl font-semibold mb-1">{meta.title}</h1>
      <p className="text-gray-400 text-sm mb-4">{meta.date}</p>

      <p className="text-purple-200 italic mb-6">{meta.description}</p>

      <div className={`${expanded ? "line-clamp-none" : "line-clamp-6"} transition-all`}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition"
      >
        {expanded ? "Show Less ▲" : "Read More ▼"}
      </button>
    </article>
  );
}
