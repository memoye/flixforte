import { Outlet } from 'react-router-dom'
import { gradientBg } from './assets'
import { Footer, Header } from './components'


function Root() {

    return (
        <div className='relative overflow-x-hidden min-h-screen flex flex-col justify-between max-w-[1440px] mx-auto text-skin-base'>
            <div className='absolute overflow-hidden w-[550px] -top-32 -right-14 -z-0'>
                <img className='h-full min-w-400px opacity-30 -scale-x-100'
                    src={ gradientBg }
                    alt="gradient background"
                    decoding="async"
                />
            </div>
            <Header />
            <main className='flex-auto'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Root
