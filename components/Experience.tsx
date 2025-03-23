export default function Experience() {
    const experiences = {
        study: [
            {
                name: "VSGA Junior Web Development BPPTIK - Digitalent Scholarship Sep - Okt 2022",
                desc: [
                    "Mengikuti sesi pembelajaran php dasar hingga intermediate selama 2 bulan",
                    "Membangun website pemesanan tiket wisata menggunakan HTML, CSS, JS, PHP dan MySQL",
                    "Mengimplementasikan penggunaan library seperti Jquery"
                ]
            },
            {
                name: "Bangkit Academy Batch 1 2023, Cloud Computing Learning Path Feb - Jul 2023",
                desc: [
                    "Mengikuti sesi pembelajaran dasar pemrograman dan tool seperti Javascript, HTML, CSS, Git, Github",
                    "Mengimplementasikan dan menguji Deployment Kubernetes Applications di Google Cloud",
                    "Mengimplementasikan Load Balancing di Compute Engine",
                    "Mengimplementasikan Develop Serverless Applications di Cloud Run",
                    "Mengimplementasikan Application Development dengan Cloud Run",
                    "Berhasil mendapatkan sertifikasi Associate Cloud Engineer Google Cloud Certified"
                ]
            },
            {
                name: "Program Pelatihan React dan Back-End Program [SIB Dicoding x Kampus Merdeka] Feb - Juni 2024",
                desc: [
                    `Menyelesaikan seluruh learning path pada kelas dasar hingga kelas "Menjadi React Web Developer Exper" serta mengimplementasikan PropTypes
Validation, Hook, Clean Code, State Management dengan Redux, Automation testing dengan Cypress, Vitest, Jest dan React Testing Library`,
                    `Menyelesaikan seluruh learning path pada kelas dasar hingga kelas "Menjadi Front-End Web Developer Expert" serta mengimplementasikan Web
Component Native, Service Worker, Cache dan Progressive Web App.
`,
                    `Menyelesaikan seluruh learning path pada kelas dasar hingga kelas "Menjadi Google Cloud Architect" dan mengimplementasikan penggunaan VPC,
VM Compute Engine, Automation Scaling, Load Balancer, Healty Check, Monitoring dan Logging, Management data object via Google Cloud
Storage, serta Deployment via Cloud Run, App Engine, Google Kubernetes Engine.
`
                ]
            }

        ]
    }
    return (
        <section id="experience" className="flex flex-col items-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white font-bold text-xl md:text-2xl mb-4 text-center">💼 Experience</h2>
            <div className="ml-4 md:ml-8 flex flex-col gap-y-8 mb-8">
                {experiences.study.map((experience, index) => (
                    <div key={index} className="flex flex-col">
                        <h4 className="text-white capitalize font-bold mb-2">{experience.name}</h4>
                        <ul className="list-disc flex flex-col gap-y-1">
                            {experience.desc.map((desc, index) => (
                                <li key={index} className="text-white">{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}




            </div>
        </section>
    )
}