import Project from "./Project";
import lyrikaImage from "./assets/lyrika.png";
import networkImage from "./assets/network_programming.gif";
import lppImage from "./assets/lpp.gif";
import { useInView } from "./useInView";

const projects = [{
    title: "MPPL to CASLII/COMETII JS Compiler",
    date: "October 2025 - January 2026",
    image: lppImage,
    description: "Designed and implemented a compiler that translates a custom programming language (MPPL) into CASLII/COMETII JavaScript code. The project involved creating a lexer, parser, semantic analyzer, and code generator, demonstrating a comprehensive understanding of compiler design principles.",
    access: false,
    link: "",
},{
    title: "Lyrika at Supporterz GeekCamp Hackathon",
    date: "July 2025",
    image: lyrikaImage,
    description: "During a Supporterz Geek Camp Vol.6 Hackathon, we developed Lyrika - a browser extension that listens to audio playing in any browser tab, identifies the song, and displays its lyrics, turning your browser into a smart, lyrics-aware music player. Awarded the 努力賞 for achieving 3rd place out of 20 teams.",
    access: true,
    link: "https://github.com/NaimiNafis/Lyrika",
}, {
    title: "TCP/UDP Chat Application in C",
    date: "October 2024 - January 2025",
    image: networkImage,
    description: "Using UDP protocols, the client sends broadcast messages to check for an available server. Once a server is found, the client establishes a TCP connection to the server and can send messages to other clients connected to the same server. The server handles multiple clients using either forks or threads, allowing for real-time communication between clients.",
    access: false,
    link: "",
}]

function AnimatedProject({ project, index }) {
    const [ref, isVisible] = useInView();
    return (
        <div
            ref={ref}
            className={`project-animate ${isVisible ? "project-visible" : ""}`}
        >
            <Project
                key={index}
                title={project.title}
                date={project.date}
                image={project.image}
                description={project.description}
                access={project.access}
                link={project.link}
            />
        </div>
    );
}

function Project_page() {
    return (
        <div className="project-page" id="projects">
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <AnimatedProject key={index} project={project} index={index} />
            ))}
        </div>
    );
}

export default Project_page;
