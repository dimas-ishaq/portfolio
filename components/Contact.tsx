import Image from "next/image"
import Link from "next/link"
export default function Contact(){
    return(
        <section id="contact" className="flex flex-col mb-16">
            <h2 className="text-white font-bold text-xl md:text-2xl mb-4 text-center">💼 Connect With Me</h2>
            <div className="grid grid-cols-4 gap-8 mx-auto">
                <Link href={"https://www.linkedin.com/in/dimas-maulana-ishaq/"} className="flex flex-col items-center text-white hover:animate-bounce">
                    <Image src={"/contact/linkedin.png"} alt="" width={100} height={100}/>
                    <p className="font-semibold">Linkedin</p>
                </Link>
                <Link href={"https://www.instagram.com/dimas01.dev/"} className="flex flex-col items-center text-white  hover:animate-bounce">
                    <Image src={"/contact/instagram.png"} alt="" width={100} height={100}/>
                    <p className="font-semibold">Instagram</p>
                </Link>
                <Link href={"mailto:dimasmaulanaishaq@gmail.com"} className="flex flex-col items-center text-white  hover:animate-bounce" >
                    <Image src={"/contact/email.png"} alt="" width={100} height={100}/>
                    <p className="font-semibold">Email</p>
                </Link>
                <Link href={"https://github.com/dimas-ishaq"} className="flex flex-col items-center text-white  hover:animate-bounce" >
                    <Image src={"/contact/github.png"} alt="" width={100} height={100}/>
                    <p className="font-semibold">Github</p>
                </Link>
            </div>

        </section>
    )
}