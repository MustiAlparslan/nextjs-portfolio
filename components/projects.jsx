import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
    const projectList = [
        {
            title: "HTML CSS Design Examples",
            description: "İnternetten bulduğum çeşitli tasarımları alıp, bunları birebir HTML ve CSS ile kodlayarak pratiğimi geliştirdim. Bu sayede temel frontend becerilerimi güçlendirdim.",
            link: "https://github.com/MustiAlparslan/HTLM-Css-Examples",
        },
        {
            title: "Calculator",
            description: "JavaScript'te kendimi geliştirmeye başladığım dönemde, en basit haliyle bir hesap makinesi uygulaması yaptım. Bu proje HTML, CSS ve temel JavaScript bilgimi pekiştirmemde faydalı oldu.",
            link: "https://github.com/MustiAlparslan/Calculator",
        },
        {
            title: "React Weather App",
            description: "Bu projede bir hava durumu uygulaması yaptım. React ve Tailwind CSS kullanarak API üzerinden aldığım verileri dinamik bir şekilde gösterdim.",
            link: "https://github.com/MustiAlparslan/React-Weather",
        },
        {
            title: "Fake Tweet Generator",
            description: "Bu projede, kullanıcıların sahte Twitter gönderileri oluşturmasına olanak tanıyan bir uygulama geliştirdim.",
            link: "https://github.com/MustiAlparslan/VueJS-Fake-Tweet-Generator",
        },
        {
            title: "Instagram Frontend Clone",
            description: "Instagram'ın birebir aynı tasarımını ve sayfa yapısını oluşturdum. Bu proje sayesinde complex layout'lar, React Router, API entegrasyonu ve dosya yapısı konusunda çok fazla tecrübe kazandım.",
            link: "https://github.com/MustiAlparslan/instagram-web-front-end-clone",
        },
        {
            title: "Auth ExpressJS",
            description: "Bu proje, Express.js kullanarak oluşturduğum bir backend iskeleti. Database bağlantıları, form validasyonları gibi önemli konular içeriyor.",
            link: "https://github.com/MustiAlparslan/Auth-ExpressJS",
        },
        {
            title: "React Native News App",
            description: "React Native ile mobil geliştirme öğrendiğim zaman yaptığım bir haber uygulaması.",
            link: "https://github.com/MustiAlparslan/React-Native-NewsApp",
        },
        {
            title: "Aspen Mobile App",
            description: "Figma'da bulduğum bir tasarımı kişiselleştirip React Native ile kodladım. Bu proje backend entegrasyonunu da içeriyor.",
            link: "https://github.com/MustiAlparslan/Aspen-Mobile-App",
        },
        {
            title: "Aspen API",
            description: "Bu proje, Aspen Mobile App'in backend kısmı. API'yi oluşturup uygulamanın ihtiyaç duyduğu veri işlemlerini sağlıyorum.",
            link: "https://github.com/MustiAlparslan/Aspen-API",
        },
    ];

    return (
        <div className="mt-12 max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Projeler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectList.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 rounded-lg p-6 relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.4, duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-gray-400 mt-2">
                            {project.description}
                        </p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute hover:opacity-50 bottom-4 right-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-6" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
