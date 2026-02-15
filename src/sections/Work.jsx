import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, title: 'Nebula', category: 'Web Design', image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Apex', category: 'Branding', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Velocity', category: 'Development', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Echo', category: 'Experience', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Mirage', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1451187530230-b237ee90d441?auto=format&fit=crop&q=80&w=800' },
];

const Work = () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;

        // Horizontal Scroll
        const scrollTween = gsap.to(wrapper, {
            x: () => -(wrapper.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: 'top top',
                end: () => `+=${wrapper.scrollWidth}`,
                anticipatePin: 1
            }
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen bg-primary text-secondary overflow-hidden">
            {/* Section Header (Absolute so it stays visible initially or moves with pin) */}
            <div className="absolute top-10 left-10 md:left-20 z-10">
                <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-secondary/60">Selected Works</h2>
            </div>

            <div ref={wrapperRef} className="flex h-full items-center pl-10 md:pl-20 gap-10 md:gap-20 w-[max-content]">
                {/* Intro Text Card */}
                <div className="w-[80vw] md:w-[30vw] shrink-0">
                    <h3 className="text-5xl md:text-7xl font-display font-bold leading-none">
                        Our <br />
                        <span className="text-accent italic">Finest</span> <br />
                        Work
                    </h3>
                </div>

                {/* Project Cards */}
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="w-[80vw] md:w-[40vw] h-[60vh] md:h-[70vh] bg-neutral-900 relative group flex-shrink-0 cursor-none border border-white/10 overflow-hidden"
                        data-cursor="text"
                        data-cursor-text="VIEW"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <h4 className="text-3xl font-display font-bold">{project.title}</h4>
                            <span className="text-sm font-sans text-accent">{project.category}</span>
                        </div>
                    </div>
                ))}

                {/* End Space */}
                <div className="w-[10vw]"></div>
            </div>
        </section>
    );
};

export default Work;
