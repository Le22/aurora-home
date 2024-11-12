const Header = () => {
  return (
    <header className="w-full p-10 absolute top-0 flex justify-between items-center z-10 text-white">
      <p className="text-xl font-bold">Aurora Home</p>
      <nav className="space-x-2">
        <a>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
