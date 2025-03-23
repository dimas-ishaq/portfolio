import Link from "next/link"
export default function Header() {
    return (
        <header>
            <nav className=" w-full border-b border-gray-600 items-center justify-center ">
                <ul className="flex space-x-5 h-16 justify-center items-center text-white text-sm">
                    <li>
                        <Link href={"/#about"} className="font-normal hover:font-semibold">About</Link>
                    </li>
                    <li>
                        <Link href={"/#project"} className="font-normal hover:font-semibold">Project</Link>
                    </li>
                    <li>
                        <Link href={"/#skills"} className="font-normal hover:font-semibold">Skills</Link>
                    </li>
                    <li>
                        <Link href={"/#experience"} className="font-normal hover:font-semibold">Experience</Link>
                    </li>
                    <li>
                        <Link href={"/#contact"} className="font-normal hover:font-semibold">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}