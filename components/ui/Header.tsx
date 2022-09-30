import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;


  let left = (
    <div className="left">
      <Link href="/">
        <a>
        {/* <Image src="/simplevideofunnel-logo.png" alt="SimpleVideoFunnel" width={24} height={14} /> */}
          <span className='endlogo'>Slim</span>Atlanta
        </a>
      </Link> <span className='beta'>(by ReGenesisDoc LLC)</span>
    </div>
  );

  const right = (
    <div className="right">
      {/* <Link href="#">
        <a><span className='bold font16'>About Us </span> </a>
      </Link>{' '}
      {' | '} */}
      <Link href="/contact">
        <a><span className='bold font16'>Contact Us</span></a>
      </Link>
    </div>
  );


  return (
    <nav>
      {left}
      {right}
    </nav>
  );
};

export default Header;