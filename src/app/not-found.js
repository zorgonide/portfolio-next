import Link from 'next/link';

export const metadata = {
  title: 'Not found | Ammar Khurshid',
};

export default function NotFound() {
  return (
    <main className='notfound'>
      <div className='container'>
        <p className='eyebrow'>Error 404</p>
        <h1 className='hero-title'>
          Page <span className='gradient-text'>not found</span>
        </h1>
        <p className='hero-copy'>Sorry 😔, this one wandered off into Mordor. Let&rsquo;s get you back on the path.</p>
        <Link href='/' className='btn btn-primary'>
          Go home
        </Link>
      </div>
    </main>
  );
}
