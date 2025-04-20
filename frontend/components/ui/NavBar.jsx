import Link from "next/link";

export default function Navbar() {
    return (
        <nav className=" bg-white items-center justify-between px-5 py-4 shadow-md flex">
            <span className="font-semibold text-xl">Immigration Help</span>
            <ul className="flex items-center gap-3">
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/idk"}>Resources</Link>
                </li>
                <li>
                    <Link href={"/caleb"}>Stories</Link>
                </li>
                <li>
                    <Link href={"/caleb"}>Process</Link>
                </li>
            </ul>
        </nav>
    );
}
