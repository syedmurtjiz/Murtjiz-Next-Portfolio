'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
    useEffect(() => {
        // Dynamic import inside useEffect to ensure it only runs on the client
        let lenis;

        import('lenis').then((LenisModule) => {
            const Lenis = LenisModule.default;
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
        });

        return () => {
            if (lenis) lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
