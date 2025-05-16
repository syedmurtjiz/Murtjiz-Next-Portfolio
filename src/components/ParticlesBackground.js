'use client';

import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: 'transparent'
          }
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#8b5cf6'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: 5
          },
          move: {
            enable: true,
            speed: 1.5
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;