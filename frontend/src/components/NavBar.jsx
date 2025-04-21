export default function Navbar() {
  return (
    <nav className=" bg-white items-center justify-between px-5 py-4 shadow-md flex">
      <span className="font-semibold text-xl">Immigration Help</span>
      <ul className="flex items-center gap-3">
        <li>
          <a href={"/about"}>About</a>
        </li>
        <li>
          <a href={"/idk"}>Resources</a>
        </li>
        <li>
          <a href={"/caleb"}>Stories</a>
        </li>
        <li>
          <a href={"/caleb"}>Process</a>
        </li>
      </ul>
    </nav>
  );
}
