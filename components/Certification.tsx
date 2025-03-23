import Image from "next/image"
export default function Certification() {
    const imageCertification = [
        
        {
            name: "Menjadi Google Cloud Architect, Dicoding",
            src: "/certificate/cloud-architect.png"
        },
        {
            name: "Menjadi Google Cloud Engineer, Dicoding",
            src: "/certificate/cloud-engineer.png"
        },
        {
            name: "Menjadi React Web Developer Expert",
            src: "/certificate/react-expert.png"
        },
        ,
        {
            name: "Menjadi Front-End Web Developer Expert",
            src: "/certificate/frontend-expert.png"
        },
        {
            name: "Associate Cloud Engineer, Google Cloud",
            src: "/certificate/ace.png"
        }
    ]
    return (
        <section id="certification" className="flex flex-col mb-16">
            <h2 className="text-white font-bold text-lg md:text-2xl mb-4 text-center">💼 Certification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto gap-2">
                {imageCertification && imageCertification.map((item, index) => (
                    item && <Image src={item.src} alt={item.name} key={index} width={500} height={500} />
                ))}

            </div>
        </section>
    )
}