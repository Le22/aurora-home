const Header = () => {
  return (
    <header className="w-full p-10 absolute top-0 flex justify-between items-center z-10 text-white">
      <div className="flex gap-4 items-center">
        <img src="/logo.webp" alt="Aurora" className="w-10 h-10" />
        <p className="text-xl font-bold">Aurora Home</p>
      </div>
      <nav className="space-x-2">
        <a>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
