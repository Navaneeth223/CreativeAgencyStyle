import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const textChildren = textRef.current.children;

        gsap.fromTo(textChildren,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        gsap.fromTo(imageRef.current,
            { scale: 1.2, y: -50 },
            {
                y: 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-secondary text-primary px-6 md:px-20 py-20 overflow-hidden">

            {/* Visual Side */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative overflow-hidden mb-10 md:mb-0">
                <div ref={imageRef} className="absolute inset-0 w-full h-full">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                        alt="Our Studio"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20"></div>
                </div>
            </div>

            {/* Text Side */}
            <div ref={textRef} className="w-full md:w-1/2 md:pl-20 flex flex-col gap-6">
                <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-neutral/60">Who We Are</h2>
                <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight relative">
                    We bridge the gap between <span className="text-accent">art</span> and <span className="text-accent">code</span>.
                </h3>
                <p className="text-lg md:text-xl font-sans text-neutral/80 leading-relaxed max-w-md">
                    Our team consists of visionary designers and engineering perfectionists. We believe that a website shouldn't just be informative—it should be an experience that leaves a lasting impression.
                </p>
                <div className="pt-8">
                    <button
                        className="px-8 py-4 border border-primary/20 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium tracking-wide"
                        data-cursor="hover"
                    >
                        MORE ABOUT US
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
