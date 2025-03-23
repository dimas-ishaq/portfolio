import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <section id="about" className="grid grid-rows-1 md:grid-cols-2 mt-8 md:mt-16 items-center mb-36 space-y-8 mx-auto max-w-4xl ">
            <div className="flex w-full flex-col text-white text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">👋 Dimas Maulana Ishaq</h1>
                <p className="text-xl ml-4 mt-4 lg:text-2xl">I'm a <span className="text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">Fullstack Web Developer</span> specializing in Next.js, TypeScript, and PostgreSQL. I love building interfaces that are not only visually appealing but also intuitive and high-performing.</p>
                <div className="flex space-x-4 mt-8 mx-auto md:mx-0">
                    <Button size={"lg"} >View Project</Button >
                    <Button size={"lg"} variant={"outline"}>Contact Me</Button >
                </div>
            </div>
            <Image src={"/profile.jpg"} alt="profile picture" className="rounded-full mx-auto border-4 hover:shadow hover:shadow-slate-50 hover:border-8" width={320} height={320} />
        </section>
    )
}