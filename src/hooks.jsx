import { useEffect, useMemo, useState } from 'react';
import { debounce, getPreferredTheme } from './utils';

const HEADER_FIXED_CLASS = 'fixed';

export const useHeaderPosition = (ref) => {
    // Use a debounce function to prevent the scroll event handler from being called too frequently.
    const debouncedScrollHandler = useMemo(() => {
        return debounce(() => {
            const scrollY = window.scrollY;

            ref.classList.toggle(HEADER_FIXED_CLASS, scrollY > 70);
            ref.classList.toggle('shadow', scrollY > 20);
            ref.classList.toggle('backdrop-blur-sm', scrollY > 200);
        }, 100);
    }, []);

    // Add a scroll event listener.
    useEffect(() => {
        window.addEventListener('scroll', debouncedScrollHandler);

        // Remove the scroll event listener if the component is unmounted.
        return () => {
            window.removeEventListener('scroll', debouncedScrollHandler);
        };
    }, []);
};



export function useTheme() {
    const [theme, setTheme] = useState(0);

    useEffect(() => {
        const preferredTheme = getPreferredTheme();
        setTheme(preferredTheme);
    }, []);

    return [theme, setTheme];
}
