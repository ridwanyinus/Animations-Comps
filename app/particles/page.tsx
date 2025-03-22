
import Particles from '@/components/Particles';
import nasaConfig from '@/public/particles-nasa.json';
import basicConfig from '@/public/particles-basic.json';
import ParallaxConfig from '@/public/particles-parallax.json';

const page = () => {
  return (
    <div className='min-h-screen w-full relative'>

      <Particles particlesConfig={ParallaxConfig} id='parallax-particles' />
      <Particles particlesConfig={nasaConfig} id='nasa-particles' />
      <Particles particlesConfig={basicConfig} id='basic-particles' />

    </div>
  );
};

export default page;
