import ArticleClient from "./article-client";

const researchArticles = [
  {
    id: 1,
    title: "Algorithmic Stablecoins: Evolution of Stability Mechanisms",
    category: "Stablecoins",
    date: "December 2024",
    excerpt: "Analysis of next-generation algorithmic stablecoin designs, including dual-token models, algorithmic market operations (AMOs), and collateral-backed hybrid approaches driving institutional adoption.",
    readTime: "12 min read",
  },
  {
    id: 2,
    title: "Central Bank Digital Currencies and Private Stablecoin Coexistence",
    category: "Regulatory",
    date: "November 2024",
    excerpt: "Examining the regulatory frameworks emerging globally for CBDCs and their impact on private stablecoin issuers. Focus on interoperability standards and cross-border payment infrastructure.",
    readTime: "15 min read",
  },
  {
    id: 3,
    title: "Real-World Asset Tokenization: Bridging TradFi and DeFi",
    category: "Crypto Fintech",
    date: "November 2024",
    excerpt: "Deep dive into RWA tokenization platforms, examining legal structures, custody solutions, and yield optimization strategies for institutional treasuries seeking on-chain exposure.",
    readTime: "18 min read",
  },
  {
    id: 4,
    title: "Yield-Bearing Stablecoins: Institutional Demand and Risk Assessment",
    category: "Stablecoins",
    date: "October 2024",
    excerpt: "Comprehensive analysis of yield-bearing stablecoin mechanisms, including reserve management, counterparty risk, and regulatory compliance for institutional allocators.",
    readTime: "14 min read",
  },
  {
    id: 5,
    title: "Cross-Chain Liquidity Networks: The Future of Institutional DeFi",
    category: "Infrastructure",
    date: "October 2024",
    excerpt: "Technical assessment of cross-chain messaging protocols, atomic swap mechanisms, and multi-chain liquidity aggregation enabling institutional-grade execution.",
    readTime: "16 min read",
  },
  {
    id: 6,
    title: "Stablecoin Reserves Transparency: Best Practices for Institutional Trust",
    category: "Stablecoins",
    date: "September 2024",
    excerpt: "Evaluation of attestation frameworks, real-time proof-of-reserves, and third-party audit standards establishing institutional confidence in stablecoin backing.",
    readTime: "11 min read",
  },
  {
    id: 7,
    title: "Privacy-Preserving Settlement Layers for Institutional Transactions",
    category: "Crypto Fintech",
    date: "September 2024",
    excerpt: "Analysis of zero-knowledge proof implementations, confidential transactions, and privacy protocols meeting regulatory requirements while enabling institutional settlement.",
    readTime: "13 min read",
  },
  {
    id: 8,
    title: "Automated Market Makers: Evolution Toward Institutional-Grade Liquidity",
    category: "DeFi Infrastructure",
    date: "August 2024",
    excerpt: "Survey of concentrated liquidity models, dynamic fee structures, and just-in-time liquidity provision transforming AMM efficiency for professional market makers.",
    readTime: "17 min read",
  },
  {
    id: 9,
    title: "Tokenized Treasury Products: Yield Optimization for Corporate Treasuries",
    category: "Crypto Fintech",
    date: "August 2024",
    excerpt: "Examination of on-chain money market funds, tokenized T-bills, and corporate bond protocols offering institutional treasuries enhanced yield and liquidity management.",
    readTime: "14 min read",
  },
  {
    id: 10,
    title: "Institutional Custody Solutions: MPC, HSM, and Multi-Sig Evolution",
    category: "Infrastructure",
    date: "July 2024",
    excerpt: "Technical review of institutional custody architectures, comparing multi-party computation, hardware security modules, and smart contract-based multi-signature approaches.",
    readTime: "19 min read",
  },
];

export function generateStaticParams() {
  return researchArticles.map((article) => ({ id: String(article.id) }));
}

export default async function ResearchArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = researchArticles.find((a) => a.id === Number(id));
  return <ArticleClient article={article} allArticles={researchArticles} />;
}
