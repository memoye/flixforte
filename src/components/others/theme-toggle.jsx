import { useEffect, useState } from 'react'
import { TbMoon, TbSun } from 'react-icons/tb';
import { themeChange } from 'theme-change';



export const ThemeToggle = () => {
    useEffect(() => {
        themeChange(false)
    }, [])


    return (
        <label className="swap swap-rotate">

            {/* this hidden checkbox controls the state */ }
            <input type="checkbox" />

            {/* sun icon */ }
            <TbMoon data-set-theme="retro" data-act-class="ACTIVECLASS" className="swap-on fill-current" />

            {/* moon icon */ }
            <TbSun data-set-theme="dark" data-act-class="ACTIVECLASS" className="swap-off fill-current" />
        </label>
    )
}