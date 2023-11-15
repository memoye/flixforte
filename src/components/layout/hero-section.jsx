import { HeroImg } from '../others/hero-img';

export const Hero = () => {
    return (
        <>
            {/* <section className='md:flex gap-10 pt-4 md:border-b border-skin-muted md:py-8'>
                <div className='md:self-center h-full grid items-center gap-8'>
                    <div className='md:text-start text-center'>
                        <h1 className='md:text-5xl text-4xl font-semibold md:leading-snug leading-snug md:w-10/12'>
                            <span className='bg-gradient-to-r from-red-500 via-lime-500 to-blue-500 bg-[length:100%_6px] bg-no-repeat bg-bottom cursor-none font-bold text-skin-muted text-opacity-90'>Unleash</span> your inner movie buff!</h1>
                        <p className={ `text-xl text-skin-muted leading-snug` }>Organize your favorite movies and TV shows, share with friends. All in one place.</p>
                    </div>
                    <button className='bg-skin-button-accent hidden md:block text-skin-inverted text-xl mt-2 py-2 px-4 rounded font-semibold w-fit hover:bg-opacity-95 active:scale-95 transition-transform'>Get Started!</button>
                </div>
                <HeroImg />
                <button className='md:hidden bg-skin-button-accent text-skin-inverted text-xl mt-2 py-2 px-4 rounded font-semibold w-full hover:bg-opacity-95 active:scale-95 transition-transform'>Get Started!</button>
            </section> */}

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */ }
                    <HeroImg />

                    <div>
                        <h1 className="text-5xl font-bold leading-snug"><span className='bg-gradient-to-r from-red-500 via-lime-500 to-blue-500 bg-[length:100%_6px] bg-no-repeat bg-bottom cursor-default font-bold text-skin-muted text-opacity-90'>Unleash</span> your inner movie buff!</h1>
                        <p className="mb-5 max-w-md">Organize your favorite movies and tv shows, share with friends. All in one place.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* <div className="hero min-h-screen" style={ { backgroundImage: `url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)` } }>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            <span className='bg-gradient-to-r from-red-500 via-lime-500 to-blue-500 bg-[length:100%_6px] bg-no-repeat bg-bottom cursor-default font-bold text-skin-muted text-opacity-90'>Unleash</span> your inner movie buff!</h1>
                        <p className="mb-5">Organize your favorite movies and tv shows, share with friends. All in one place.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}