import { CiDark, CiLight } from 'react-icons/ci'
import { getPreferredTheme, setPreferredTheme, setTheme } from '../utils'
import { useEffect, useState } from 'react'
import { useTheme } from '../hooks';

export const ThemeToggle = () => {
    const [currentTheme, setCurrentTheme] = useTheme();

    async function toggleTheme() {
        let theme = await getPreferredTheme()
        theme === 0 ? (setTheme(1), setCurrentTheme(1)) : (setTheme(0), setCurrentTheme(0))
    }



    useEffect(() => {
        setPreferredTheme()
    }, [])


    return (
        <button
            className={ `bg-transparent hover:bg-skin-button-muted bg-opacity-30 rounded-full p-2 text-2xl` }
            onClick={ toggleTheme }
        >
            { currentTheme === 1 ? <CiDark /> : <CiLight /> }
        </button>
    )
}