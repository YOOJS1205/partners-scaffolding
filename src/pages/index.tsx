import { buttonVariants } from '@components/ui/button';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Link href="/user" className={buttonVariants({ variant: 'secondary' })}>
        파트너로
      </Link>
      <Link href="/admin" className={buttonVariants({ variant: 'link' })}>
        관리자로
      </Link>
    </div>
  );
};

export default Home;
