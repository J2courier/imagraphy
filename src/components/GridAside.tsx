import React, { useRef, useState } from 'react';

interface GridAsideProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
}

const GridAside: React.FC<GridAsideProps> = ({ className = '', ...props }) => {
    const asideRef = useRef<HTMLElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!asideRef.current) return;

        const rect = asideRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <aside
            ref={asideRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
            style={{
                '--mouse-x': `${position.x}px`,
                '--mouse-y': `${position.y}px`,
                '--spotlight-opacity': opacity,
            } as React.CSSProperties}
            {...props}
        >
            <div className="absolute inset-0 z-0 grid-base pointer-events-none" />
            <div className="absolute inset-0 z-10 grid-highlight pointer-events-none" />
            {props.children}
        </aside>
    );
};

export default GridAside;
