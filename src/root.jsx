import { Outlet, useLocation } from 'react-router-dom'
import { gradientBg } from './assets'
import { Header, Footer } from './Layout'


function Root() {
    const location = useLocation()

    return (
        <div className={ `relative bg-skin-fill overflow-x-hidden min-h-screen flex flex-col justify-between max-w-[1440px] mx-auto text-skin-base` }>
            <div className='absolute overflow-hidden w-[550px] -top-32 -right-14 -z-0'>
                <img className='h-full min-w-400px opacity-30 -scale-x-100'
                    src={ gradientBg }
                    alt="gradient background"
                    decoding="async"
                />
            </div>

            <div className={ location.pathname === '/' ? `absolute top-0 z-30 w-full` : '' }>
                <Header />
            </div>

            <main className='flex-auto z-0 _px-5 _md:px-14 _max-w-[1200px] _mx-auto'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Root
