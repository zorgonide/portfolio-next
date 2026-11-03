import Link from 'next/link';

export const metadata = {
  title: 'Not found | Ammar Khurshid',
};

export default function NotFound() {
  return (
    <main className='page'>
      <p>Page not found.</p>
      <p>
        <Link href='/'>Go home</Link>
      </p>
    </main>
  );
}
