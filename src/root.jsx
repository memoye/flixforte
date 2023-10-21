import { Outlet } from 'react-router-dom'
import { gradientBg } from './assets'
import { Footer, Header } from './components'
import { useEffect } from 'react'
import { usePreferedTheme } from './utils'


function Root() {

    useEffect(() => {
        usePreferedTheme()
    }, [])

    return (
        <div className='relative bg-skin-fill overflow-x-hidden min-h-screen flex flex-col justify-between max-w-[1440px] mx-auto text-skin-base'>
            <div className='absolute overflow-hidden w-[550px] -top-32 -right-14 -z-0'>
                <img className='h-full min-w-400px opacity-30 -scale-x-100'
                    src={ gradientBg }
                    alt="gradient background"
                    decoding="async"
                />
            </div>

            <Header />
            {/* <main className='flex-auto z-20 pt-20 px-5 md:px-14'> */ }
            <main className='flex-auto z-20 px-5 md:px-14'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Root
