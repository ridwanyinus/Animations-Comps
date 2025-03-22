'use client';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesContainer = ({ particlesConfig, id = 'tsparticles' }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = particlesConfig;

  if (init) {
    return <Particles id={id} particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};

export default ParticlesContainer;
