import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { Github, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
export default function Projects() {

    const projects = [
        {
            name: "Dev Talks",
            description: "Forum diskusi online untuk para pengembang, tempat Anda dapat menemukan jawaban dan solusi.",
            image: "/dev-talks.png",
            website: "https://react-expert-submission-2.vercel.app",
            github: "https://github.com/dimas-ishaq/react-expert-submission-2",
            techstack: ["React", "Vite", "Redux", "TailwindCSS", "Cypress", "RTK"]
        },
        {
            name: "Event Aja",
            description: "Platform yang dirancang untuk membantu penyelenggara acara mempromosikan acara mereka kepada khalayak yang lebih luas",
            image: "/event-aja.png",
            website: "https://eventaja.vercel.app/",
            github: "https://github.com/dimas-ishaq/eventaja",
            techstack: ["Nextjs", "TailwindCss", "Supabase"]
        },

        {
            name: "My Blog",
            description: "Ruang pribadi saya untuk berbagi cerita, pemikiran, dan pengalaman",
            image: "/my-blog.png",
            github: "https://github.com/dimas-ishaq/myblog",
            techstack: ["Nextjs"," TailwindCss"," Prisma", "SQlite"]
        },
        {
            name: "Gudang Pintar",
            description: "Platform manajemen inventaris berbasis web yang dirancang untuk membantu bisnis Anda mengelola stok dengan lebih efisien",
            image: "/gudang-pintar.png",
            github: "https://github.com/dimas-ishaq/gudang-pintar",
            techstack: ["Nextjs", "TailwindCss", "Prisma", "PostgreSQL", "Shadcdn","Zustand"]
        },
        {
            name: "Sistem Presensi",
            description: "Platform absensi online yang dirancang untuk membantu bisnis Anda mengelola kehadiran karyawan dengan lebih efektif",
            image: "/sistem-presensi.png",
            github: "https://github.com/dimas-ishaq/Sistem-Aplikasi-Presensi",
            techstack: ["Reactjs", "Vite", "ExpressJs"]
        }
    ]
    return (
        <section id="project" className="flex flex-col mb-16">
            <h1 className="text-left font-bold text-xl md:text-2xl text-white">📋 Latest Project</h1>
            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-2 sm:p-0">
                {projects.map((project, index) => (
                    <Card key={index} className="bg-stone-800 grayscale hover:grayscale-0 " >
                        <CardHeader>
                            <Image src={project.image} alt={project.name} width={800} height={100} className="rounded-t-lg" />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text lgmd:text-xl text-slate-50 font-bold">
                                {project.name}
                            </CardTitle>
                            <CardDescription>
                                <div className="flex flex-col">
                                    <p className="text-white line-clamp-1 hover:line-clamp-none normal-case "> {project.description}</p>
                                    <div className="flex gap-2 mt-4 flex-wrap">
                                        {project.techstack.map((tech, index) => (
                                            <Badge key={index}>{tech}</Badge>
                                        ))}
                                    </div>
                                </div>


                            </CardDescription >
                        </CardContent>
                        <CardFooter>
                            <div className="flex gap-4 flex-wrap">
                                {project.website && <Button variant={"secondary"}>
                                    <Globe />
                                    <Link href={project.website}>
                                        Website
                                    </Link>
                                </Button>}
                                <Button>
                                    <Github />
                                    <Link href={project.github}>
                                        Github
                                    </Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}