import Link from 'next/link';

type NavLinkType = {
  text: string;
  url: string;
};

const NavigationLink = ({ url, text }: NavLinkType) => {
  return (
    <div>
      <Link href={url} className='mt-4 text-black text-3xl bg-white p-4 block text-center'>
        {text}
      </Link>
    </div>
  );
};

export default NavigationLink;
