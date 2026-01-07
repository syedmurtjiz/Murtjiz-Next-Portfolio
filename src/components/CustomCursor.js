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

    const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0, active: false });

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
            const interactive = target.closest('a') || target.closest('button') || target.classList.contains('hover-target');

            if (interactive) {
                const rect = interactive.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                setMagnetPos({ x: centerX, y: centerY, active: true });
                setIsHovering(true);
            } else {
                setMagnetPos({ x: 0, y: 0, active: false });
                setIsHovering(false);
            }

            const isTextElement = target.tagName === 'P' ||
                target.tagName === 'H1' ||
                target.tagName === 'H2' ||
                target.tagName === 'H3' ||
                target.tagName === 'SPAN' ||
                target.tagName === 'H4' ||
                target.tagName === 'H5' ||
                target.tagName === 'H6';

            setIsText(isTextElement && !interactive);
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
                animate={{
                    x: magnetPos.active ? magnetPos.x - 4 : cursorX.get(),
                    y: magnetPos.active ? magnetPos.y - 4 : cursorY.get(),
                }}
                style={{
                    opacity: isVisible ? 1 : 0,
                    scale: isClicking ? 0.8 : (isHovering ? 1.5 : 1),
                }}
            />
            <motion.div
                className="custom-cursor-follower"
                animate={{
                    x: magnetPos.active ? magnetPos.x - 16 : followerX.get(),
                    y: magnetPos.active ? magnetPos.y - 16 : followerY.get(),
                }}
                style={{
                    opacity: isVisible ? (isText ? 1 : 0.5) : 0,
                    scale: isClicking ? 1.2 : (isHovering ? 2.5 : (isText ? 1 : 1)),
                    backgroundColor: isHovering ? 'transparent' : (isText ? 'var(--primary)' : 'transparent'),
                    borderColor: isHovering ? 'var(--primary)' : (isText ? 'transparent' : 'var(--primary)'),
                    borderWidth: isHovering ? '2px' : '1px',
                    mixBlendMode: (isHovering || isText) ? 'difference' : 'normal',
                    borderRadius: isText ? '2px' : '50%',
                    width: isText ? '2px' : '32px',
                    height: isText ? '32px' : '32px',
                }}
            />
        </div>
    );
};

export default CustomCursor;
