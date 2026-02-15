import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState('');

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleHoverStart = (e) => {
            const target = e.target;
            if (target.dataset.cursor === 'hover') {
                setIsHovering(true);
            } else if (target.dataset.cursor === 'text') {
                setIsHovering(true);
                setCursorText(target.dataset.cursorText || 'View');
            }
        };

        const handleHoverEnd = () => {
            setIsHovering(false);
            setCursorText('');
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleHoverStart);
        document.addEventListener('mouseout', handleHoverEnd);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleHoverStart);
            document.removeEventListener('mouseout', handleHoverEnd);
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (isHovering) {
            gsap.to(cursor, { scale: 0.5, duration: 0.3 });
            gsap.to(follower, { scale: 3, opacity: 0.5, backgroundColor: 'white', mixBlendMode: 'difference', duration: 0.3 });
        } else {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: 'transparent', border: '1px solid white', duration: 0.3 });
        }
    }, [isHovering]);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border border-white -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors duration-300 ${isHovering ? 'mix-blend-difference' : ''}`}
            >
                {cursorText && (
                    <span className="text-[4px] font-bold text-black uppercase tracking-widest">{cursorText}</span>
                )}
            </div>
        </>
    );
};

export default CustomCursor;
