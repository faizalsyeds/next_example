// pages/index.js
import Link from 'next/link';

function Home() {
  return (
    <div>
      Click{' '}
      <Link href="/about">
        <a>here for</a>
      </Link>{' '}
      to read more
    </div>
  );
}

export default Home;