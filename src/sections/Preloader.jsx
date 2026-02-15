import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setComplete(true)
        });

        const texts = ["VISION", "CREATIVITY", "EXPERIENCE"];

        // Text cycle animation
        texts.forEach((text, i) => {
            tl.to(textRef.current, {
                duration: 0.3,
                opacity: 1,
                text: text,
                ease: "power2.inOut",
                onStart: () => { if (textRef.current) textRef.current.innerText = text }
            })
                .to(textRef.current, {
                    duration: 0.3,
                    opacity: 0,
                    delay: 0.5,
                    ease: "power2.inOut"
                });
        });

        // Final reveal
        tl.to(containerRef.current, {
            duration: 1.5,
            y: '-100%',
            ease: 'power4.inOut',
            delay: 0.2
        });

    }, []);

    if (complete) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[10000] bg-primary flex items-center justify-center pointer-events-none"
        >
            <div className="overflow-hidden">
                <h1
                    ref={textRef}
                    className="text-4xl md:text-8xl font-display font-bold text-secondary opacity-0"
                >
                    LOADING
                </h1>
            </div>
        </div>
    );
};

export default Preloader;
