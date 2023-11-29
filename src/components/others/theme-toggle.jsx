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
            <input type="checkbox" className="theme-controller" data-act-class="ACTIVECLASS" value="dark" />

            {/* sun icon */ }
            <TbMoon className="swap-on fill-current" />

            {/* moon icon */ }
            <TbSun className="swap-off fill-current" />
        </label>
    )
}