import Image from "next/image"

export default function Skills() {
    const skills = {
        frontend: [
            {
                name: "Next Js",
                image: "/nextjs.png"
            },
            {
                name: "Tailwind Css",
                image: "/tailwindcss.png"
            },
            {
                name: "React Js",
                image: "/reactjs.png"
            },
            {
                name: "Typescript",
                image: "/typescript.png"
            },
            {
                name: "HTML",
                image: "/html5.png"
            }
            ,
            {
                name: "CSS",
                image: "/css3.png"
            }
            ,
            {
                name: "Javascript",
                image: "/javascript.png"
            },
            {
                name: "Redux",
                image: "/redux.png"
            }, {
                name: "Sass",
                image: "/sass.png"
            }
            , {
                name: "Bootstrap",
                image: "/bootstrap.png"
            }


        ],
        backend: [
            {
                name: "Node Js",
                image: "/nodejs.png"
            },
            {
                name: "Express Js",
                image: "/expressjs.png"
            },
            {
                name: "PostgreSQL",
                image: "/postgresql.png"
            },
            {
                name: "Prisma",
                image: "/prisma-orm.png"
            },
            {
                name: "Supabase",
                image: "/supabase.png"
            },
            {
                name: "Hapi Js",
                image: "/hapi-js.png"
            },
            {
                name: "MySQL",
                image: "/mysql.png"
            },
            {
                name: "MongoDB",
                image: "/mongodb.png"
            },
            {
                name: "JWT Authentication",
                image: "/jwt.png"
            }
        ],
        devops: [
            {
                name: "Git",
                image: "/git.png"
            },
            {
                name: "Github",
                image: "/github.png"
            },
            {
                name: "Docker",
                image: "/docker.png"
            },
            {
                name: "Netlify",
                image: "/netlify.png"
            }
            ,
            {
                name: "Vercel",
                image: "/vercel.png"
            }
            ,
            {
                name: "AWS",
                image: "/aws.png"
            }
            ,
            {
                name: "Google Cloud",
                image: "/gcp.png"
            }

        ],
    }
    return (
        <section id="skills" className="flex flex-col mb-16">
            <h2 className="text-white font-bold text-xl md:text-2xl">🛠 Skills & Technologies</h2>
            <div className="ml-4 md:ml-8 flex-flex-col mb-8">
                <h3 className="text-lg md:text-xl mt-4 text-white font-bold mb-4  pb-2"> - Frontend Development</h3>
                {/* <hr /> */}
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2 items-center">
                    {skills.frontend.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-1 ">
                            <Image src={skill.image} width={60} height={60} alt={skill.name} />
                            <p className=" text-white font-medium text-sm">{skill.name}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className="ml-4 md:ml-8 flex-flex-col mb-4">
                <h3 className="text-lg md:text-xl mt-4 text-white font-bold mb-4  pb-2 "> - Backend Development</h3>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2 items-center">
                    {skills.backend.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-1">
                            <Image src={skill.image} width={60} height={60} alt={skill.name} />
                            <p  className=" text-white font-medium text-sm">{skill.name}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className="ml-4 md:ml-8 flex-flex-col">
                <h3 className="text-lg md:text-xl mt-4 text-white font-bold mb-4  pb-2 "> - Tools & DevOps</h3>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2 items-center">
                    {skills.devops.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-x-1 gap-y-2">
                            <Image src={skill.image} width={60} height={60} alt={skill.name} />
                            <p className=" text-white font-medium text-sm">{skill.name}</p>
                        </div>
                    ))}
                </div>

            </div>


        </section>
    )
}