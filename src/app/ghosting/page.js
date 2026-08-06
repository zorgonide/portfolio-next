import Ghosting from '../components/Ghosting';

export const metadata = {
  title: "Why'd You Ghost Me? :(",
  description: 'A tongue-in-cheek feedback form for anyone who ghosted Ammar Khurshid.',
  robots: { index: false, follow: false },
};

export default function GhostingPage() {
  return <Ghosting />;
}
