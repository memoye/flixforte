import { useEffect, useState } from 'react'
import { IoMdColorPalette } from 'react-icons/io';
import { themeChange } from 'theme-change';



export const ThemeToggle = () => {
    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <IoMdColorPalette data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" />
    )
}