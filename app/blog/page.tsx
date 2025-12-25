import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "10 Local Advertising Strategies That Actually Work in 2025",
            excerpt: "Discover proven tactics to reach your local audience and maximize ROI with modern advertising techniques.",
            author: "Sarah Mitchell",
            date: "Dec 20, 2024",
            readTime: "5 min read",
            category: "Marketing Tips",
            image: "https://azim.commonsupport.com/Cubart/images/resource/blog-details-1.jpg"
        },
        {
            id: 2,
            title: "How AI is Transforming Small Business Advertising",
            excerpt: "Learn how artificial intelligence can help you create better ads, target the right customers, and save time.",
            author: "James Chen",
            date: "Dec 18, 2024",
            readTime: "7 min read",
            category: "Technology",
            image: "https://azim.commonsupport.com/Cubart/images/resource/blog-details-2.jpg"
        },
        {
            id: 3,
            title: "The Complete Guide to Google My Business Optimization",
            excerpt: "Step-by-step instructions to optimize your Google Business Profile and attract more local customers.",
            author: "Emily Rodriguez",
            date: "Dec 15, 2024",
            readTime: "10 min read",
            category: "SEO",
            image: "https://azim.commonsupport.com/Cubart/images/resource/blog-details-3.jpg"
        },
        {
            id: 4,
            title: "5 Common Mistakes Local Businesses Make with Facebook Ads",
            excerpt: "Avoid these pitfalls and make your Facebook advertising budget work harder for your business.",
            author: "Michael Brown",
            date: "Dec 12, 2024",
            readTime: "6 min read",
            category: "Social Media",
            image: "https://azim.commonsupport.com/Cubart/images/resource/blog-details-1.jpg"
        },
        {
            id: 5,
            title: "Building a Winning Local Marketing Strategy on a Budget",
            excerpt: "Practical tips for small businesses to create effective marketing campaigns without breaking the bank.",
            author: "Lisa Thompson",
            date: "Dec 10, 2024",
            readTime: "8 min read",
            category: "Strategy",
            image: "https://azim.commonsupport.com/Cubart/images/resource/blog-details-2.jpg"
        },
        {
            id: 6,
            title: "Understanding Your Local Market: Analytics That Matter",
            excerpt: "Key metrics every local business owner should track to measure advertising success and growth.",
            author: "David Kim",
            date: "Dec 8, 2024",
            readTime: "9 min read",
            category: "Analytics",
            image: "https://azim.commonsupport.com/Cubart/images/resource/blog-details-3.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Wave */}
            <section className="relative bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] text-white py-24 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF8A42]/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Marketing Insights</h1>
                        <p className="text-xl text-white/80 leading-relaxed pb-24">
                            Expert tips, strategies, and insights to help your local business thrive in the digital age.
                        </p>
                    </div>
                </div>

                {/* Wave SVG */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                            >
                                {/* Image */}
                                <div className="relative h-48 bg-gray-200 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-[#FF8A42] text-white text-xs font-semibold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#7c3aed] transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Author & CTA */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4c1d95] to-[#7c3aed]"></div>
                                            <span className="text-sm font-medium text-gray-700">{post.author}</span>
                                        </div>
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="flex items-center gap-1 text-[#FF8A42] font-semibold text-sm hover:gap-2 transition-all"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
