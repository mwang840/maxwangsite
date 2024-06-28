import {useState, useEffect} from "react";

interface MousePositon {
    x : number;
    y : number;
}

export default function useMousePositon(): MousePositon {
    const [mousePosition, setMousePosition] = useState<MousePositon>({x: 0, y : 0});

    useEffect(() => {
        const handleMouseMove = (event : MouseEvent) => {
            setMousePosition({x : event.clientX, y : event.clientY});
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }

    }, []);

    return mousePosition;
}