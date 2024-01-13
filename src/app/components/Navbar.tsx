import Link from 'next/link';

function Navbar() {
  return (
    <nav className='fixed top-0 w-full flex item-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>
      <Link
        href='/'
        className='uppercase font-bold text-md h-12 flex items-center'
      >
        NEXT STORE
      </Link>
    </nav>
  );
}

export default Navbar;
