import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Tag, TrendingUp } from "lucide-react";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
    // Sample blog data
    const post = {
        id: params.id,
        title: "10 Local Advertising Strategies That Actually Work in 2025",
        author: "Sarah Mitchell",
        date: "December 20, 2024",
        readTime: "5 min read",
        category: "Marketing Tips",
        image: "https://azim.commonsupport.com/Cubart/images/resource/blog-details-1.jpg",
        content: `
            <p>Local advertising has evolved dramatically in recent years. With the rise of digital platforms and changing consumer behaviors, businesses need to adapt their strategies to stay competitive.</p>
            
            <h2>1. Leverage Google My Business</h2>
            <p>Your Google Business Profile is often the first thing potential customers see when searching for local businesses. Make sure your profile is complete, accurate, and regularly updated with photos, posts, and customer reviews.</p>
            
            <h2>2. Invest in Local SEO</h2>
            <p>Optimize your website for local search terms. Include your city, neighborhood, and region in your content, meta descriptions, and title tags. This helps you appear in "near me" searches.</p>
            
            <h2>3. Use Geo-Targeted Social Media Ads</h2>
            <p>Platforms like Facebook and Instagram allow you to target users within a specific radius of your business. This ensures your ad budget is spent on people who can actually visit your location.</p>
            
            <h2>4. Partner with Local Influencers</h2>
            <p>Micro-influencers in your area often have highly engaged audiences. A partnership can introduce your business to potential customers who trust the influencer's recommendations.</p>
            
            <h2>5. Create Location-Specific Landing Pages</h2>
            <p>If you serve multiple areas, create dedicated landing pages for each location. This improves your local SEO and provides a better user experience for visitors.</p>
            
            <h2>Conclusion</h2>
            <p>Success in local advertising comes from understanding your community and meeting them where they are—both online and offline. Start implementing these strategies today and watch your local presence grow.</p>
        `
    };

    const categories = [
        { name: "Marketing Tips", count: 12 },
        { name: "Technology", count: 8 },
        { name: "SEO", count: 15 },
        { name: "Social Media", count: 10 },
        { name: "Strategy", count: 7 },
        { name: "Analytics", count: 9 }
    ];

    const recentPosts = [
        { id: 2, title: "How AI is Transforming Small Business Advertising", date: "Dec 18, 2024" },
        { id: 3, title: "The Complete Guide to Google My Business", date: "Dec 15, 2024" },
        { id: 4, title: "5 Common Mistakes with Facebook Ads", date: "Dec 12, 2024" },
        { id: 5, title: "Building a Winning Marketing Strategy", date: "Dec 10, 2024" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#7c3aed] text-white py-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8A42]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-6">
                        <span className="px-4 py-2 bg-[#FF8A42] text-white text-sm font-semibold rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-white/80 pb-24">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Wave SVG */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Content Section with Sidebar */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left: Blog Content */}
                        <div className="lg:col-span-2">
                            <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                                {/* Featured Image */}
                                <div className="relative h-96 bg-gray-200 rounded-xl mb-12 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className="prose prose-lg max-w-none
                                        prose-headings:text-gray-900 prose-headings:font-bold
                                        prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                                        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                                        prose-a:text-[#7c3aed] prose-a:no-underline hover:prose-a:underline"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* Share Section */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
                                        <div className="flex items-center gap-3">
                                            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#7c3aed] text-gray-600 hover:text-white flex items-center justify-center transition-all">
                                                <Facebook className="w-5 h-5" />
                                            </button>
                                            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#7c3aed] text-gray-600 hover:text-white flex items-center justify-center transition-all">
                                                <Twitter className="w-5 h-5" />
                                            </button>
                                            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#7c3aed] text-gray-600 hover:text-white flex items-center justify-center transition-all">
                                                <Linkedin className="w-5 h-5" />
                                            </button>
                                            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#7c3aed] text-gray-600 hover:text-white flex items-center justify-center transition-all">
                                                <Share2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Author Bio */}
                                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4c1d95] to-[#7c3aed] flex-shrink-0"></div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{post.author}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Marketing strategist with over 10 years of experience helping local businesses grow their online presence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* Right: Sidebar */}
                        <div className="space-y-6">

                            {/* Categories */}
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Tag className="w-5 h-5 text-[#FF8A42]" />
                                    Categories
                                </h3>
                                <ul className="space-y-3">
                                    {categories.map((cat, index) => (
                                        <li key={index}>
                                            <Link
                                                href={`/blog/category/${cat.name.toLowerCase()}`}
                                                className="flex items-center justify-between text-gray-600 hover:text-[#7c3aed] transition-colors group"
                                            >
                                                <span className="group-hover:translate-x-1 transition-transform">{cat.name}</span>
                                                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{cat.count}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-[#FF8A42]" />
                                    Recent Posts
                                </h3>
                                <ul className="space-y-4">
                                    {recentPosts.map((recentPost) => (
                                        <li key={recentPost.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                            <Link href={`/blog/${recentPost.id}`} className="group flex gap-3">
                                                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                                    <Image
                                                        src="https://azim.commonsupport.com/Cubart/images/resource/blog-details-1.jpg"
                                                        alt={recentPost.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#7c3aed] transition-colors mb-2 line-clamp-2">
                                                        {recentPost.title}
                                                    </h4>
                                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {recentPost.date}
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Popular Posts */}
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-[#FF8A42]" />
                                    Popular Posts
                                </h3>
                                <ul className="space-y-4">
                                    <li className="pb-4 border-b border-gray-100">
                                        <Link href="/blog/1" className="group flex gap-3">
                                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                                <Image
                                                    src="https://azim.commonsupport.com/Cubart/images/resource/blog-details-2.jpg"
                                                    alt="Popular post"
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#7c3aed] transition-colors mb-2 line-clamp-2">
                                                    The Ultimate Guide to Local SEO in 2025
                                                </h4>
                                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    Dec 5, 2024
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="pb-4 border-b border-gray-100">
                                        <Link href="/blog/2" className="group flex gap-3">
                                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                                <Image
                                                    src="https://azim.commonsupport.com/Cubart/images/resource/blog-details-3.jpg"
                                                    alt="Popular post"
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#7c3aed] transition-colors mb-2 line-clamp-2">
                                                    Social Media Marketing for Small Businesses
                                                </h4>
                                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    Nov 28, 2024
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                        <Link href="/blog/3" className="group flex gap-3">
                                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                                <Image
                                                    src="https://azim.commonsupport.com/Cubart/images/resource/blog-details-1.jpg"
                                                    alt="Popular post"
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#7c3aed] transition-colors mb-2 line-clamp-2">
                                                    Email Marketing Best Practices for 2025
                                                </h4>
                                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    Nov 20, 2024
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
