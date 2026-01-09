interface Work {
    title: string;
    image: string;
    description: string;
    categories: string[];
    rating: string;
}

const WorkCard = ({ work }: { work: Work }) => {
    return (
        <div className="w-full hover:bg-slate-900/20 transition-all duration-100 rounded-md group hover:cursor-pointer">
            <div className="flex flex-col lg:flex-row gap-10 p-4">
                <img src={work.image} alt={work.title} className='opacity-50 w-full lg:w-128 rounded-md hover:scale-102 transition-all duration-100 object-cover hover:opacity-100' />
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-bold">TITLE: <span className="text-white tracking-wider uppercase">{work.title}</span></h1>
                    <p className="text-gray-400 rounded-md ">DESCRIPTION: <br />
                        <span className="text-white/40 tracking-widest text-md transition-colors duration-100 group-hover:text-white/90">
                            {work.description}
                        </span>
                    </p>
                    {/* category section */}
                    <div className="flex flex-wrap gap-2">
                        {work.categories.map((category, index) => (
                            <div key={index} className="bg-indigo-800/60 p-2 rounded-md cursor-pointer hover:bg-indigo-900">
                                <h1>{category}</h1>
                            </div>
                        ))}
                    </div>
                    {/* rating section */}
                    <div className="flex items-center gap-2">
                        <h1>My Rating: </h1>
                        <span className="text-white tracking-wider">{work.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Myworks() {
    const works: Work[] = [
        {
            title: "Nothing",
            image: "./art1.jpg",
            description: "During pandemic 2020-2021, my mother bought me a pen tab for digital art. My father also bought me a laptop Fujitsu, it was enough and good to handle software for digital art/illustration. I tried softrware such as Clip Studio (the best) but paid subscription for other functionalities, second ibispaint it was the best free art application but only available on mobile, before it has a less ADs and only used or activate to use other types of pen. Thirdly, medibang this was the best free software for digital art/illustration, it has a lot of features and it is free, it was better for creating manga and I liked it a lot and learned how to use it, now I can say I'm fluent at it I have customize it to my likings such as the shortcut keys, for tilting left and right, redo, undo, zoom in and out. So the real reason was basically I draw it in medibang as unfinished since I was trying a lot of software for my Art works.",
            categories: ["Amateur", "For fun", "Unfinished, 2021-2022"],
            rating: "7/10 ⭐⭐⭐⭐⭐⭐⭐"
        },
        {
            title: "ピエcエs オf シエエt (pieces of sheet)",
            image: "./myart2.jpg",
            description: "Pandemic days, school is almost like non-existence but still continouos where I have a lot of free time to be into art while learning some japanese specifically Hiragana(ひらがな) and Katakana(カタカナ). The title up above is katakana since its foreign word and a combination of letters. I have decided back in the days that my pen name would be pieces of sheet (ピエcエs オf シエエt) and I have been using it ever since even my Twitter username is 'pieces of sheet'. Now the story behind this illustration is that I learned and begun to be comfortable on using pen tab and medibang in my laptop but still struggling on my coloring skills. But I would say it's fine now, before I don't really like the outcome of this illustration maybe my mind hard a different expected outcome and I was disappointed. I was really focusing on creating my Original Character or they called (OC), since I was so inspired to make manga I made this illustration, supposed to be will serves as the cover illustration for my manga. It did not turned out well backend but now I kinda appreciate my work. I can say I did well on this one.",
            categories: ["Sketch", "Digital Illustration", "2021-2022", "Colored", "Covered Page"],
            rating: "8/10 ⭐⭐⭐⭐⭐⭐⭐⭐"
        },
        {
            title: "Monochromic tones",
            image: "./myart3.jpg",
            description: "The story behind this illustration is about I was inspired to tackle different artstyle despite being in a digital illustration colors can be always the prioty and top options of making arts but lots of artsyle which inspired me to draw Iori Yagami from King of Fighters(KOF). I was a big fan of King of Fighters since they did a collab in Mobile Legends back then, so I watched and read any KOF collections and then e decided to draw it in style like this similar to a charcoal type of art. I also liked the process of drawing this, despite it's not perfect and before I was satisfied for the outcome, now I realized there are still I can improved in this illustration. I remember posting this into medibang art gallery and received 7 likes and a comment that they like the way I portray the shadow. I'm really happy I created this kind of artstyle tho it's not complete and perfect in my opinion. It is still good I appreciate my hardwork for this one!",
            categories: ["Digital Illustration", "2021-2022", "Monochromic", "Shade"],
            rating: "7.5/10 ⭐⭐⭐⭐⭐⭐⭐⭐⯪"
        },
        {
            title: "This is my comfort zone",
            image: "./myart4.jpg",
            description: "I remember drawing this illustration in medibang after long-week school like it was after examination or something that it drained me a lot, so I did rest up and have an inspiration to draw which I said 'this is my comfort zone', I genuinly don't remember what I feel here exaclty but my thoughts is telling me that some thing inside me has been shakened up, and expressing what I felt that I'm comfortable drawing and being alone, reading a book specifically a manga. That manga or book that I draw is a cover page from Manga series called Gachiakuta. I think I did great on this illustration I like the color although that it is not refined and perfect but it still has a spark when you look at it. I'm really proud cause the hand and perspective are reasonable. However, I still see a room for improvement on this one, like the way the character leans on the wall and I should have put a shadow depicting that he is leaning on the wall, which makes it more realistic. But overall great, the bag tho is not polished enought it lacks something that it doesn't stand out much, it is bland. It can be improve still. Great job my past self for this one.",
            categories: ["Digital Illustration", "2021-2022", "Manga Inspired", "Colored"],
            rating: "8/10 ⭐⭐⭐⭐⭐⭐⭐⭐⭐"
        },
        {
            title: "Work in progress of 'This is my comfort zone",
            image: "./myart11.jpg",
            description: "This is the work in progress illustration of 'this is my comfort zone, illustration. Which is kinda look great, I remember my the reason why I have this saved as WIP, it is because I am worried that anything might happen in this project so I must save some piece of this before it is ruined. Like It look good for me in the work progress of it and being afraid that it will look ugly if I continue to render it. There is like a qoute that I believe that process is beautiful than the outcome or result, which aligned to an art sometimes the process of creating or illustrating something we felt excitement, joy, satisfaction for each line and stroke that we put an effort for. Art is really rewarding as long as you have patience. But realistically art is seen as not worth becuase it does not make lots of money for a beginner or amateur that just starting up. Sad reality but we enjoy the beauty or process and art. ",
            categories: ["Digital Illustration", "2021-2022", "Manga Inspired", "Colored"],
            rating: "7/10 ⭐⭐⭐⭐⭐⭐⭐"
        },
        {
            title: "Metal Bat/Josuke Inspired hairstyle ",
            image: "./myart6.jpg",
            description: "I illustrated this during the time after I draw the Iori Yagami illustration, so they have similar art style and color scheme. Back then I liked the result of monochromatic artstyle from Iori Yagami so I decided to illustrate this one, but it's only half body and only a face, not really much to be impress about, but I like the process and kinda satisfied to the result. I think this was 400x400 canvas in medibang so it's small.",
            categories: ["Digital Illustration", "2021-2022", "Manga Inspired", "Monochromic", "Shade", "400x400 canvas"],
            rating: "8/10 ⭐⭐⭐⭐⭐⭐⭐⭐⯪"
        },
        {
            title: "Screw Head Times",
            image: "./myart7.jpg",
            description: "This was inspired from the manga panel from Battle Angel Alita, I really love the movie of Alita and later then I found out that it was originated from japan and has manga so I did read and look at it for a bit, I like the world building, the sci-fi vibe, the junky metal settings, and the artstyle fits very well. Due to that I re-created the manga panel although I didn't nailed it but the outcome is great. I remember drawing this in the scketch book which my moom bought me, at the same time the ink pens that I use for this illustration is not the best but it's still great. I really really really appreciate buying me art materilas Mom!",
            categories: ["Traditional Illustration", "2021-2022", "Manga Inspired", "Sketch/Ink Pen", "Unfinished"],
            rating: "8.5/10 ⭐⭐⭐⭐⭐⭐⭐⭐⯪"
        },
        {
            title: "Ice of Heaven",
            image: "./myart8.jpg",
            description: "Well the title was inspired from JOJO Part 6 where pucci stand's called Made in Heaven. Not really relevant to jojo. I draw this cause like there is an idea in my head where there is a lone Island that has a disastrous-like weather, strong waves, and less trees. I don't know which reference I have in mind but it looks great. During the process as far as I rememebr the waves and the shadowing using ink pen was the best, as well as creating a rock and a cliff by controlling the ink pen was definitely the best and most exciting part of creating this sketch. However, I have this like, syndrome? that if I am satisfied witht he initial looks I don't continue it anymore. This is great 10/10 unfinished so 9/10",
            categories: ["Traditional Illustration", "2021-2022", "Manga Inspired", "Colored"],
            rating: "9/10 ⭐⭐⭐⭐⭐⭐⭐⭐"
        },
        {
            title: "July Calendar",
            image: "./myart9.jpg",
            description: "My sister bought me a scketch pad, and during that time I was watching lots of youtube illustration, painting, arts and stuff. I was really inspired from that one youtuber I don't remember its name but he paints one buildings or shops alones, it looks so great the color paint is not over saturated, not colorful but like a mild or the color is at 30% opacity but still looks good. Then I tried to copy its art styl by sketching as well as the idea and I just added a data to it and make it the calendar background and I remember putting (X) mark on it when the days past. So this made me conscious of everyday since I'm  anticipating for the they to end so I can cross it.",
            categories: ["Traditional Illustration", "2021-2022", "Manga Inspired", "Colored"],
            rating: "8/10 ⭐⭐⭐⭐⭐⭐⭐⭐⯪"
        },
        {
            title: "July Calendar Inked",
            image: "./myart10.jpg",
            description: "So yeah I decided to inked the sketch July Calendar, it turns out good. I can't complain. Great job me!",
            categories: ["Traditional Illustration", "2021-2022", "Youtube Inspired", "Unfinished"],
            rating: "8/10 ⭐⭐⭐⭐⭐⭐⭐⭐⯪"
        },
        {
            title: "A-I-E-U-O",
            image: "./myart5.jpg",
            description: "During this time I was learning Hiragana, and I stumbled upon a custom pen in medibang and I tried making fun of sketches since the line and stroke is great plus it has a good fading. I don't remember what kind of pen was this but man this is great if your pen tab supports pressure sensitivity for pen. So this illustartion is kinda great!",
            categories: ["Digital Illustration", "2021-2022", "Youtube Inspired", "Plain"],
            rating: "8/10 ⭐⭐⭐⭐⭐⭐⭐⭐⯪"
        },
        {
            title: "June Calendar Sketch",
            image: "./myart12.jpg",
            description: "Nothing much to say about this, this supposed to be on top before july but yeah it's fine as it is. It's great I hope I can find the video of the youtube creator an artist that inspired me to create this kind of drawings.",
            categories: ["Traditional Illustration", "2021-2022", "Youtube Inspired", "Sketch"],
            rating: "8/10 ⭐⭐⭐⭐⭐⭐⭐⭐⯪"
        },
        {
            title: "This is my comfort zone",
            image: "./myart13.jpg",
            description: "I drew this in my Mom samsung tablet using IbisPaint and some DIY stylus pen for drawing, turned out pretty well, I spend a time on this cause I'm not well versed in coloring.",
            categories: ["Digital Illustration", "2021-2022", "Original Character", "Colored", "Unfinished", "IbisPaint"],
            rating: "8/10 ⭐⭐⭐⭐⭐⭐⭐⭐⯪"
        }
    ];

    return (
        <div className="flex flex-col p-4 gap-4">
            <div>
                <h1 className="text-2xl font-bold tracking-wider">My Work Section</h1>
            </div>
            {/* Art Works List */}
            <div className="flex flex-col gap-4 bg-slate-900/50 p-4 items-start ">
                {works.map((work, index) => (
                    <WorkCard key={index} work={work} />
                ))}
            </div>
        </div>
    );
}
