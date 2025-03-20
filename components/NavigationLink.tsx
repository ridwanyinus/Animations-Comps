import Link from 'next/link';

type NavLinkType = {
  text: string;
  url: string;
};

const NavigationLink = ({ url, text }: NavLinkType) => {
  return (
    <div>
      <Link href={url}>
        <p className='size-full text-neutral-200 hover:text-white'> {text}</p>
      </Link>
    </div>
  );
};

export default NavigationLink;
