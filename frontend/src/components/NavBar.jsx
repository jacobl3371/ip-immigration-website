export default function Navbar() {
  return (
    <nav className=" bg-white items-center justify-between px-5 py-4 shadow-md flex">
      <span className="font-semibold text-xl">Immigration Help</span>
      <ul className="flex items-center gap-3">
        <li>
          <a href={"/about"}>About</a>
        </li>
        <li>
          <a href={"/resources"}>Resources</a>
        </li>
        <li>
          <a href={"/stories"}>Stories</a>
        </li>
        <li>
          <a href={"/process"}>Process</a>
        </li>
      </ul>
    </nav>
  );
}
