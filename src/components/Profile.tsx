import { useState, useEffect } from 'react';

// import ArrowBigLeftDashIcon from './ui/arrow-big-left-dash-icon';
import FacebookIcon from './ui/facebook-icon';
import GithubIcon from './ui/github-icon';
import DiscordIcon from './ui/discord-icon';
import TypewriterEffect from './TypewriterEffect';

// Timeline Data
interface LinkItem {
    url: string;
    label: string;
}

interface imageItems {
    image: string;
}

interface TimelineItem {
    year: string;
    description: string;
    image?: imageItems[];
    links?: LinkItem[];
    borderColor?: string;
    bgClass?: string;
}

const timelineData: TimelineItem[] = [
    {
        year: "2022",
        description: "My first year delving into the world of tech. I was grade 11-12 when I learned the basics of HTML, CSS, and JavaScript. I also started learning about the fundamentals of web development. Learned Git and Github. My First ever website created was a blog post for Media and Information Literacy.",
        image: [{ image: "./icons/HTML.svg" }, { image: "./icons/JavaScript.svg" }, { image: "./icons/CSS.svg" }, { image: "./PC.png" }],
        links: [{ label: "View Project", url: "https://justuhbeginner.github.io/historical-timeline/" }],
        borderColor: "border-white/30"
    },
    {
        year: "2023",
        description: "It's my first year in College and the first project that I worked on is Python/C Command Line Program. During this time python and C was different sub, so we implemented both projects in both languages",
        image: [{ image: "./icons/C.svg" }, { image: "./Laptop.png" }],
        links: [
            { label: "Project Jollibee", url: "https://github.com/J2courier/Project-Jollibee" },
            { label: "Daily Time Record", url: "https://github.com/J2courier/Daily-Time-Record" }
        ],
        borderColor: "border-white/30"

    },
    {
        year: "2024",
        description: "Second year on College and we were tasked to Create a Stand Alone Application using Java and MySQL. This project tought me a lot about programming and Software Developement as well, additionaly managing the database. For UI I used JavaSwing.",
        image: [{ image: "./icons/Java-Dark.svg" }, { image: "./icons/MySQL-Dark.svg" }, { image: "./headphones.png" }],
        links: [{ label: "Productivity Tool Duets", url: "https://github.com/J2courier/Duets" }],
        borderColor: "border-white/30"
    },
    {
        year: "2025",
        description: "My 3rd year in College and currently there are lot of side-project that I've been working but not properly deployed and published. Projects I've work on are React, Typescript, PostgreSQL, and Vite.",
        image: [{ image: "./icons/React-Dark.svg" }, { image: "./icons/TypeScript.svg" }, { image: "./icons/PostgreSQL-Dark.svg" }, { image: "./icons/Vite-Dark.svg" }, { image: "./records.png" }],
        links: [{ label: "React Quizlet", url: "https://github.com/J2courier/MyQuizletReact" }],
        borderColor: "border-white/30"
    }
];

// Hobby Descriptions
const HOBBY_DESCRIPTIONS: Record<string, string> = {
    "ARTS": "I enjoy expressing creativity through various art forms. Whether it's digital art, sketching, or exploring different artistic mediums, art allows me to visualize ideas and bring imagination to life.",
    "DOOMSCROLLING": "Like many in the digital age, I find myself endlessly scrolling through social media and news feeds. While it can be a time sink, it keeps me updated on current events, trends, and memes.",
    "LEAGUE OF LEGENDS": "A competitive MOBA game that I'm passionate about. I enjoy the strategic depth, teamwork, and the constant challenge of improving my gameplay. Each match is a new opportunity to outplay opponents and climb the ranks.",
    "PROGRAMMING": "More than just a career path, programming is a hobby I genuinely love. I enjoy solving problems, building projects, and learning new technologies. The satisfaction of creating something functional from lines of code is unmatched.",
    "STUDYING": "I have a genuine curiosity for learning new things. Whether it's diving deep into technical documentation, exploring new concepts, or expanding my knowledge in various fields, studying helps me grow continuously.",
    "READING": "I love getting lost in books, articles, and documentation. Reading expands my perspective, improves my knowledge, and provides an escape into different worlds and ideas.",
    "WATCHING": "I enjoy watching various content - from movies and series to educational videos and documentaries. It's a great way to relax, learn, and stay entertained."
};

// Hobby Images/GIFs
const HOBBY_IMAGES: Record<string, string> = {
    "ARTS": "./gif/artGif.gif",
    "DOOMSCROLLING": "./gif/doomscrolling.gif",
    "LEAGUE OF LEGENDS": "./gif/lol.gif", // You may need to add this image
    "PROGRAMMING": "./gif/programming.gif",
    "STUDYING": "./gif/studying.gif",
    "READING": "./gif/reading.gif",
    "WATCHING": "./gif/watching.gif"
};

export default function Profile() {
    // State to track which descriptions are visible (by year)
    const [visibleDescriptions, setVisibleDescriptions] = useState<Set<string>>(new Set());

    // State to track selected hobby
    const [selectedHobby, setSelectedHobby] = useState<string | null>(null);

    // State to track if back-to-top button should be visible
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle description visibility for a specific year
    const toggleDescription = (year: string) => {
        setVisibleDescriptions(prev => {
            const newSet = new Set(prev);
            if (newSet.has(year)) {
                newSet.delete(year);
            } else {
                newSet.add(year);
            }
            return newSet;
        });
    };

    return (
        <div className="p-4 flex flex-col gap-4">
            <div className="flex bg-gray-900/50  rounded-md p-4 gap-4 ">
                {/* image section */}
                <div className="">
                    <img src="./profile.jpg" alt="img" className="w-64 aspect-square rounded-md hover:scale-110 transition-all duration-300 cursor-pointer" />
                </div>
                {/* my info section */}
                <div className="flex-1 flex-col align-items-center gap-4 ">
                    <div className="flex flex-col p-2 gap-4">

                        <div className="flex items-center gap-2">
                            <h1 className="font-bold text-4xl hover:text-white transition-all duration-300 hover:[text-shadow:0_2px_10px_rgba(6,182,212,0.5)]">Jherson Bartolay</h1>
                            <img src="./philippines.png" alt="img" className="w-6 aspect-square rounded-md" />
                        </div>

                        <TypewriterEffect
                            text="Hello, I created this website solely for fun and inspired from wiki fandom. This site is for showcasing my hobby, collections, and works. I am currently 3rd year studying at Capiz State University Dayao Satellite College and I am 21 years old born and raised in the Philippines . I dreamed to be a Software Engineer and a DevOps. Futuristic world is not distant from we are now, AI and automation are become part of our daily routine and even become a challenges. Embrace and be Excite for what the world will become 10 years from now."
                            className="text-lg leading-relaxed tracking-wide text-justify text-slate-300 transition-colors duration-300 z-1 "
                            speed={20}
                        />
                    </div>
                    {/* social */}
                    <div className="flex rounded-md">
                        <ul className="flex gap-4 p-4">
                            <li><a href="https://facebook.com" target="_blank" className="flex items-center gap-2 p-2 rounded-xl border-2 border-transparent hover:border-yellow-500 hover:bg-yellow-500/50 transition-all duration-300 cursor-pointer"><FacebookIcon /> Facebook</a></li>
                            <li><a href="https://github.com" target="_blank" className="flex items-center gap-2 p-2 rounded-xl border-2 border-transparent hover:border-yellow-500 hover:bg-yellow-500/50 transition-all duration-300 cursor-pointer"><GithubIcon /> Github</a></li>
                            <li><a href="https://discord.com" target="_blank" className="flex items-center gap-2 p-2 rounded-xl border-2 border-transparent hover:border-yellow-500 hover:bg-yellow-500/50 transition-all duration-300 cursor-pointer"><DiscordIcon /> Discord</a></li>
                            <li>
                                <div className="flex gap-2 border border-slate-500 rounded-md">
                                    <input type="text" placeholder="Leave a note" className="p-2  outline-none cursor-pointer" /> <button className="p-2 rounded-md border-2 border-transparent hover:border-yellow-500 hover:bg-yellow-500/50 transition-all duration-300 cursor-pointer">Send</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900/50 rounded-md p-2">
                <div className="flex p-4 items-center justify-between gap-4">
                    <div className="flex-1 items-center gap-2 border-b border-slate-800 p-4">
                        <h1 className="font-bold text-3xl">My Software Engineering Journey</h1>
                        <div className="text-white hover:text-cyan-400 transition-colors">

                        </div>
                    </div>
                </div>
                {/* timeline section */}
                <div className="rounded-md p-2 flex gap-4">
                    {timelineData.map((item) => {

                        return (
                            <div key={item.year} className={`group p-2 flex flex-col gap-4 bg-slate-800/20 rounded-md transition-all duration-300 hover:bg-slate-900 rounded-md p-4`}>
                                <div className="flex items-center gap-2">
                                    <h1 className={`font-bold text-2xl ${item.bgClass || ''}`}>{item.year}</h1>
                                    <button
                                        onClick={() => toggleDescription(item.year)}
                                        className="text-sm px-3 py-1 rounded-md border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
                                    >
                                        {visibleDescriptions.has(item.year) ? 'Hide' : 'View Description'}
                                    </button>
                                </div>
                                <>
                                    {visibleDescriptions.has(item.year) && (
                                        <p className="text-lg text-white/80 hover:text-cyan-400 transition-colors text-justify">{item.description}</p>
                                    )}
                                    {item.links && item.links.length > 0 && (
                                        <div className="flex gap-2 flex-wrap">
                                            {item.links.map((link, idx) => (
                                                <a
                                                    key={idx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-sm px-3 py-1 bg-slate-900/80 rounded-md text-slate-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                    {item.image && (() => {
                                        const techStack = item.image.filter(img => img.image.includes('icons'));
                                        const previews = item.image.filter(img => !img.image.includes('icons'));

                                        return (
                                            <>
                                                {/* Tech Stack Icons */}
                                                {techStack.length > 0 && (
                                                    <div className="flex gap-2 flex-wrap mt-2">
                                                        {techStack.map((img, idx) => (
                                                            <img
                                                                key={`tech-${idx}`}
                                                                src={img.image}
                                                                alt={`${item.year} Tech Stack`}
                                                                className="w-10 h-10 rounded-sm opacity-40 hover:opacity-90 group-hover:opacity-90 transition-opacity"
                                                            />
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Project Previews */}
                                                {previews.length > 0 && (
                                                    <div className="flex flex-wrap gap-4 mt-2">
                                                        {previews.map((img, idx) => (
                                                            <img
                                                                key={`preview-${idx}`}
                                                                src={img.image}
                                                                alt={`${item.year} Project`}
                                                                className="rounded-sm opacity-40 hover:opacity-90 group-hover:opacity-90 transition-opacity"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        );
                                    })()}
                                </>
                            </div>
                        );
                    })}
                </div>

            </div>
            {/* hobbies Section */}

            <div className="bg-gray-900/50 rounded-md p-4">
                <div className='border-b border-slate-800 p-2'>
                    <h1 className='font-bold text-3xl'>My Hobbies <span> {'>>>'} </span></h1>
                </div>
                <div className='p-4 flex gap-10 '>
                    <div className='flex flex-col p-4 gap-2 '>
                        <div
                            onClick={() => setSelectedHobby("ARTS")}
                            className={`cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 border-2 ${selectedHobby === "ARTS" ? "border-cyan-400 bg-cyan-400/20" : "border-transparent"}`}
                        >
                            <h1 className='text-2xl font-bold tracking-wider'>ARTS</h1>
                        </div>
                        <div
                            onClick={() => setSelectedHobby("DOOMSCROLLING")}
                            className={`cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 border-2 ${selectedHobby === "DOOMSCROLLING" ? "border-cyan-400 bg-cyan-400/20" : "border-transparent"}`}
                        >
                            <h1 className='text-2xl font-bold tracking-wider'>DOOMSCROLLING</h1>
                        </div>
                        <div
                            onClick={() => setSelectedHobby("LEAGUE OF LEGENDS")}
                            className={`cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 border-2 ${selectedHobby === "LEAGUE OF LEGENDS" ? "border-cyan-400 bg-cyan-400/20" : "border-transparent"}`}
                        >
                            <h1 className='text-2xl font-bold tracking-wider'>LEAGUE OF LEGENDS</h1>
                        </div>
                        <div
                            onClick={() => setSelectedHobby("PROGRAMMING")}
                            className={`cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 border-2 ${selectedHobby === "PROGRAMMING" ? "border-cyan-400 bg-cyan-400/20" : "border-transparent"}`}
                        >
                            <h1 className='text-2xl font-bold tracking-wider'>PROGRAMMING</h1>
                        </div>
                        <div
                            onClick={() => setSelectedHobby("STUDYING")}
                            className={`cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 border-2 ${selectedHobby === "STUDYING" ? "border-cyan-400 bg-cyan-400/20" : "border-transparent"}`}
                        >
                            <h1 className='text-2xl font-bold tracking-wider'>STUDYING</h1>
                        </div>
                        <div
                            onClick={() => setSelectedHobby("READING")}
                            className={`cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 border-2 ${selectedHobby === "READING" ? "border-cyan-400 bg-cyan-400/20" : "border-transparent"}`}
                        >
                            <h1 className='text-2xl font-bold tracking-wider'>READING</h1>
                        </div>
                        <div
                            onClick={() => setSelectedHobby("WATCHING")}
                            className={`cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 border-2 ${selectedHobby === "WATCHING" ? "border-cyan-400 bg-cyan-400/20" : "border-transparent"}`}
                        >
                            <h1 className='text-2xl font-bold tracking-wider'>WATCHING</h1>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='flex-1 gap-10'>
                        {/* gif display container */}
                        <div className='flex flex-col p-2 min-w-96 min-h-96 flex items-center justify-center bg-black/20'>
                            <span className='text-sm text-slate-400 mb-2'>
                                {selectedHobby ? `${selectedHobby.charAt(0) + selectedHobby.slice(1).toLowerCase()} gif source: pinterest` : ''}
                            </span>
                            {selectedHobby && HOBBY_IMAGES[selectedHobby] ? (
                                <img
                                    src={HOBBY_IMAGES[selectedHobby]}
                                    alt={selectedHobby}
                                    className='w-128 object-contain rounded-md'
                                />
                            ) : (
                                <p className='text-slate-500 italic'>Select a hobby to view its image</p>
                            )}
                        </div>
                        {/* description display container */}
                        <div className='flex flex-col p-4 gap-4 min-w-96'>
                            <h1 className='text-xl font-semibold'>Description:</h1>
                            <div className='bg-black/40 p-4 rounded-sm text-slate-300 leading-relaxed tracking-wider'>
                                {selectedHobby ? (
                                    <p className='text-justify'>{HOBBY_DESCRIPTIONS[selectedHobby]}</p>
                                ) : (
                                    <p className='text-slate-500 italic'>Click on a hobby to see its description</p>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <video src="./gif/gif2.mp4" className="w-128 aspect-square rounded-md absolute top-5 left-50 opacity-20 -z-10 " autoPlay muted loop></video>
            <video src="./gif/gif2.mp4" className="w-128 aspect-square rounded-md absolute top-5 left-176 opacity-20 -z-10" autoPlay muted loop></video>
            <video src="./gif/gif2.mp4" className="w-128 aspect-square rounded-md absolute top-5 left-300 opacity-20 -z-10" autoPlay muted loop></video>

            {/* back to top button */}
            {showBackToTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex gap-4 fixed bottom-8 right-8 p-4 bg-cyan-400/20 hover:bg-cyan-400/40 border-2 border-cyan-400 rounded-md transition-all duration-300 hover:scale-110 z-50"
                    aria-label="Back to top"
                >
                    back to top
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}

            {/* Footer */}
            <footer className="mt-8 bg-gray-900/50 rounded-md p-6">
                <div className="border-t border-slate-800 pt-4">
                    <p className="text-center text-slate-400 text-sm">
                        © {new Date().getFullYear()} <span className="font-semibold text-cyan-400">J2courier</span>. All Rights Reserved.
                    </p>
                </div>
            </footer>

        </div>
    )
}