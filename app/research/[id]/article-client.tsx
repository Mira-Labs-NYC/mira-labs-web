"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
}

export default function ArticleClient({ article, allArticles }: { article: Article | undefined; allArticles: Article[] }) {
  if (!article) {
    return (
      <main className="min-h-screen bg-[#fafafa] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-light text-gray-900">Article Not Found</h1>
          <p className="mt-4 text-gray-600">The requested research article could not be found.</p>
          <Link href="/research" className="mt-6 inline-flex items-center gap-2 text-gray-900 hover:text-gray-700">
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <section className="relative overflow-hidden bg-white py-20">
        <AnimatedDotPattern className="opacity-40" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">{article.category}</span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{article.readTime}</span>
            </div>
            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">{article.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">{article.excerpt}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              This is a detailed research article exploring {article.title.toLowerCase()}.
              The full content is available to institutional clients and registered users.
            </p>
            <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <h3 className="text-xl font-light text-gray-900">Full Article Access</h3>
              <p className="mt-3 text-sm text-gray-600">Request institutional access to view complete research reports and analysis.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-gray-800">
                Request Access
              </Link>
            </div>
            <p className="leading-relaxed">
              For questions about this research or to discuss institutional access,
              please contact our research desk through the client portal or via our institutional contact form.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-light text-gray-900">Related Research</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {allArticles
              .filter((a) => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/research/${relatedArticle.id}`} className="group rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-md">
                  <span className="text-xs font-medium text-gray-600">{relatedArticle.category}</span>
                  <h3 className="mt-2 text-lg font-light text-gray-900 group-hover:text-gray-700">{relatedArticle.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{relatedArticle.readTime}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">Access Full Research Library</h2>
          <p className="mt-4 text-lg text-gray-300">Institutional clients receive comprehensive research reports and regular market commentary.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
