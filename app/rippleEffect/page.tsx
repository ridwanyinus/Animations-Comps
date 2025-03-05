import dynamic from 'next/dynamic';
import Link from 'next/link';

const RippleEffect = dynamic(() => import('@/components/RippleEffect'), { ssr: false });

export default function Home() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <RippleEffect />
    </div>
  );
}
