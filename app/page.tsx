import NavigationLink from '@/components/NavigationLink';

const navLinks = [
  { url: '/Preloader', text: 'Preloader Animation' },
  { url: '/particles', text: 'Particles Effects' },
  { url: '/rippleEffect', text: 'Ripple Animation' },
  { url: '/ImageReveal', text: 'Image Reveal Animation' },
  { url: '/Kenburn', text: 'Kenburn Effect' },
  { url: '/MaskedImage', text: 'Masked Image Animation' },
];

const page = () => {
  return (
    <main>
      <div className='relative lg:h-16 w-full bg-black flex flex-wrap justify-center md:justify-start gap-4 p-4'>
        {navLinks.map((link) => (
          <div key={link.url} className='lg:w-[calc(50%-8px)] max-w-80 w-full bg-gray-900 text-white p-4 rounded-lg text-center'>
            <NavigationLink url={link.url} text={link.text} />
          </div>
        ))}
      </div>
      <p className='absolute bottom-4 left-1/2 -translate-x-1/2 text-neutral-600 text-xs'>I&apos;m working on it, will add more fasho :)</p>
    </main>
  );
};

export default page;

// TODO: refactor @particlejs in component
// TODO: implement rtl image reveal
