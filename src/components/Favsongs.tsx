import { useEffect, useRef, useState } from "react";
import BackToTop from './BackToTop';

const ArtistEmbed = ({ artistId }: { artistId: string }) => {
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: "200px",
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full aspect-square min-h-[352px] bg-slate-800/20 rounded-md flex items-center justify-center relative overflow-hidden">
            {!isInView && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                </div>
            )}
            {isInView && (
                <iframe
                    data-testid="embed-iframe"
                    className="w-full h-full rounded-md transition-opacity duration-500"
                    src={`https://open.spotify.com/embed/artist/${artistId}?utm_source=generator`}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            )}
        </div>
    );
};

export default function Favsongs() {
    const artistIds = [
        "3U2oWd07HPgl60o8RBMG4P",
        "3MZsBdqDrRTJihTHQrO6Dq",
        "7dqb1363wqRxJw9RfgQeo3",
        "7D7a6cnpitkgKgz4bJDYy6",
        "6cd3XfCAc3e596RQW8P94H",
        "515DCsL7PUKhEkrY6au52K",
        "2EoyTW14yqnbqmk90NjbLT",
        "4MCBfE4596Uoi2O4DtmEMz",
        "64tJ2EAv1R6UaZqc4iOCyj",
        "2KpK4apOMD6evPHoPggSVF",
        "0QDCjKEJLERqsoqUZmyjd2",
        "2xvtxDNInKDV4AvGmjw6d1",
        "6hG0VsXXlD10l60TqiIHIX",
        "5he5w2lnU9x7JFhnwcekXX",
        "6HvZYsbFfjnjFrWF950C9d",
        "6lcwlkAjBPSKnFBZjjZFJs",
    ];

    return (
        <div className="flex flex-col p-4 gap-5">
            <h1 className="font-bold text-4xl">Fav Artist section</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {artistIds.map((id) => (
                    <ArtistEmbed key={id} artistId={id} />
                ))}
            </div>
            <BackToTop />
        </div>
    );
}
