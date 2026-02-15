import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;

        // Initial Reveal
        gsap.fromTo(title.children,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 2.5 // Wait for preloader
            }
        );

        gsap.fromTo(subtitleRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 3.5, ease: 'power2.out' }
        );

        // Parallax Effect
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: 200,
            ease: 'none'
        });

    }, []);

    return (
        <section ref={containerRef} className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-primary">
            <div className="absolute inset-0 z-0 opacity-20">
                {/* Abstract background video or shape could go here */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            <div className="relative z-10 text-center mix-blend-difference">
                <h1 ref={titleRef} className="text-[12vw] leading-[0.85] font-display font-bold text-secondary tracking-tighter uppercase">
                    <div className="overflow-hidden"><span className="inline-block">Designing</span></div>
                    <div className="overflow-hidden"><span className="inline-block">Digital</span></div>
                    <div className="overflow-hidden"><span className="inline-block text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>Dreams</span></div>
                </h1>

                <div ref={subtitleRef} className="mt-10 flex flex-col items-center gap-4">
                    <p className="text-xl md:text-2xl font-sans max-w-lg text-secondary/80 text-center">
                        We craft immersive digital experiences that push the boundaries of web technology.
                    </p>
                    <div className="w-px h-24 bg-secondary/30 mt-10"></div>
                    <span className="text-xs tracking-[0.2em] font-sans text-secondary/50">SCROLL TO EXPLORE</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
