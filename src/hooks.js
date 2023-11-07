import { useEffect, useState } from 'react';
import { getPreferredTheme } from './utils';

export function useTheme() {
    const [theme, setTheme] = useState(0);
    const [stroke, setStroke] = useState(`rgb(187, 187, 187)`)

    useEffect(() => {
        const preferredTheme = getPreferredTheme();
        preferredTheme === 0 ? setStroke(`rgb(34, 34, 34)`) : setStroke(`rgb(187, 187, 187)`)
        setTheme(preferredTheme);
    }, []);

    return [theme, setTheme, stroke];
}
