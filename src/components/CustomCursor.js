'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isText, setIsText] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const cursorX = useSpring(0, { damping: 20, stiffness: 300 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 300 });

    const followerX = useSpring(0, { damping: 25, stiffness: 150 });
    const followerY = useSpring(0, { damping: 25, stiffness: 150 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const moveCursor = (e) => {
            cursorX.set(e.clientX - 4);
            cursorY.set(e.clientY - 4);
            followerX.set(e.clientX - 16);
            followerY.set(e.clientY - 16);

            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleHover = (e) => {
            const target = e.target;
            const isClickable = target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('hover-target');

            const isTextElement = target.tagName === 'P' ||
                target.tagName === 'H1' ||
                target.tagName === 'H2' ||
                target.tagName === 'H3' ||
                target.tagName === 'SPAN';

            setIsHovering(isClickable);
            setIsText(isTextElement && !isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [cursorX, cursorY, followerX, followerY, isVisible]);

    if (isMobile) return null;

    return (
        <div className="hidden lg:block">
            <motion.div
                className="custom-cursor"
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 1 : 0,
                    scale: isClicking ? 0.8 : (isHovering ? 1.5 : 1),
                }}
            />
            <motion.div
                className="custom-cursor-follower"
                style={{
                    x: followerX,
                    y: followerY,
                    opacity: isVisible ? (isText ? 0.2 : 0.5) : 0,
                    scale: isClicking ? 1.2 : (isHovering ? 3 : (isText ? 4 : 1)),
                    backgroundColor: isHovering ? 'var(--primary)' : (isText ? 'var(--primary)' : 'transparent'),
                    borderColor: (isHovering || isText) ? 'transparent' : 'var(--primary)',
                    mixBlendMode: (isHovering || isText) ? 'difference' : 'normal',
                    borderRadius: isText ? '4px' : '50%',
                    width: isText ? '2px' : '32px',
                    height: isText ? '32px' : '32px',
                }}
            />
        </div>
    );
};

export default CustomCursor;
