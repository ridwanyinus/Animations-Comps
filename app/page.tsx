import NavigationLink from '@/components/NavigationLink';

const page = () => {
  return (
    <div className='relative min-h-screen w-full bg-black'>
      <NavigationLink url='/rippleEffect' text='ripple animation' />
      <NavigationLink url='/particles' text='particles effects' />
      <NavigationLink url='/ImageReveal' text='Image Reveal animation' />
      <NavigationLink url='/MaskedImage' text='Masked Image animation' />
      <NavigationLink url='/Kenburn' text='Kenburn effect' />
    </div>
  );
};

export default page;

// TODO: refactor @particlejs in component
// TODO: implement rtl image reveal
