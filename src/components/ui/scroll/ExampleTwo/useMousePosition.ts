import { useEffect, useState } from 'react';

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });
    useEffect(() => {
        window.onmousemove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        };
        return () => {
            window.onmousemove = null;
            return;
        };
    }, [])

    return { mousePosition };
}

export default useMousePosition
