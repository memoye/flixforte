import { HeroImg } from '../others/hero-img';
import { Link } from 'react-router-dom'

export const Hero = () => {

    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */ }
                    <HeroImg />

                    <div>
                        <h1 className="text-5xl font-bold leading-snug"><span className='bg-gradient-to-r from-red-500 via-lime-500 to-blue-500 bg-[length:100%_6px] bg-no-repeat bg-bottom cursor-default font-bold text-skin-muted text-opacity-90'>Unleash</span> your inner movie buff!</h1>
                        <p className="mb-5 max-w-md">Organize your favorite movies and tv shows, share with friends. All in one place.</p>
                        <Link to={ 'signin' } className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    )
}