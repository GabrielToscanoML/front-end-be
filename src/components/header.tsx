import Image from "next/image";
import logo from "../../public/be-logo.svg"

export default function Header() {
    return (
        <header className="shadow-md w-full bg-white">
            <main className="flex mx-auto items-center h-[60px] lg:w-[1024px]">
                <a
                    href="https://bemobile.tech/"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-5 lg:ml-8" 
                >
                    <Image src={logo} alt="Be logo"/>
                </a>
            </main>
        </header>
    );
}