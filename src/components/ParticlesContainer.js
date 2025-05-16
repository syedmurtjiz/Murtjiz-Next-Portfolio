'use client';

import dynamic from 'next/dynamic';

export default function ParticlesContainer() {
  const ParticlesComponent = dynamic(() => import('@/components/ParticlesBackground'), {
    ssr: false,
    loading: () => null
  });

  return (
    <div className="fixed inset-0 z-0">
      <ParticlesComponent />
    </div>
  );
}
