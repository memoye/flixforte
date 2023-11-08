import { CiDark, CiLight } from 'react-icons/ci'
import { getPreferredTheme, setTheme, usePreferredTheme } from '../../utils/misc_utils'
import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks';

export const ThemeToggle = () => {
    const [currentTheme, setCurrentTheme] = useTheme();

    async function toggleTheme() {
        let theme = await getPreferredTheme()
        theme === 0 ? (setTheme(1), setCurrentTheme(1)) : (setTheme(0), setCurrentTheme(0))
    }



    useEffect(() => {
        usePreferredTheme()
    }, [])


    return (
        <button
            className={ `bg-transparent hover:bg-skin-button-muted bg-opacity-30 rounded-md p-1 text-2xl ml-1` }
            onClick={ toggleTheme }
        >
            { currentTheme === 1 ? <CiDark /> : <CiLight /> }
        </button>
    )
}