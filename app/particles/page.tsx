import dynamic from 'next/dynamic';
const ParticlesEffect = dynamic(() => import('@/components/ParticlesEffect'), { ssr: false });
const NasaEffects = dynamic(() => import('@/components/NasaEffects'), { ssr: false });

const page = () => {
  return (
    <div className='relative h-screen w-full grid  items-start place-items-center'>
      <ParticlesEffect />
      <NasaEffects />
    </div>
  );
};

export default page;
