import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/reactime.png" width={222} height={167} />
      </div>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
      <Link href={'/info'}>
        <a>Info</a>
      </Link>
    </nav>
  );
};

export default Navbar;
