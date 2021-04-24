import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 sm:py-5 px-10">
    <Link href="/">
      <a className="text-white hover:text-white font-bold text-2xl sm:text-3xl ">
        Note App
      </a>
    </Link>
    <Link href="/new">
      <a className="text-white hover:text-red-300 font-semibold text-xl sm:text-2xl">
        Create Note
      </a>
    </Link>
  </nav>
);

export default Navbar;
