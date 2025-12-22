"use client";
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Boutique Owner",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "My boutique's foot traffic increased by 40% in just two weeks of using AdGrow. It really works!",
    },
    {
        id: 2,
        name: "Mike Ross",
        role: "Local Plumber",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "I never understood online ads until I used this platform. It's so simple and the results are real.",
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Graphic Designer",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "The AI targeting is a game changer. I'm reaching customers I didn't even know I had.",
    },
    {
        id: 4,
        name: "David Miller",
        role: "Restaurant Owner",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        text: "Best investment for my local restaurant. The ROI is better than any other platform I've tried.",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-[#FCFCFC] dark:bg-black overflow-hidden select-none">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4 font-poppins">
                        Trusted by Local Businesses
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        See what our happy customers are saying about their growth with Brand Lift.
                    </p>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-16"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="pb-10 pt-4 px-2">
                            <div className="flex flex-col items-start cursor-pointer group">

                                {/* Speech Bubble Card */}
                                <div className="relative bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-800 transition-transform duration-300 hover:-translate-y-2 mb-8 w-full">
                                    <Quote className="text-[#6440FA] mb-4 fill-current" size={32} />
                                    <p className="text-gray-500 dark:text-gray-400 text-sm italic leading-relaxed">
                                        {testimonial.text}
                                    </p>

                                    {/* Triangle Pointer */}
                                    <div className="absolute -bottom-4 left-8 text-white dark:text-zinc-900 drop-shadow-sm">
                                        <svg width="30" height="20" viewBox="0 0 30 20" fill="currentColor">
                                            <path d="M15 20L0 0H30L15 20Z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* User Profile */}
                                <div className="flex items-center gap-4 ml-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#6440FA]">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={56}
                                            height={56}
                                            className="object-cover"
                                        />
                                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#6440FA] border-2 border-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#1A1A1A] dark:text-white text-sm">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-500 text-xs">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

export default TestimonialsSection;
