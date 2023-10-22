import { HeroImg } from './hero-img';

export const Hero = () => {
    return (
        <>
            <section className='md:flex gap-10 pt-4 md:border-b border-skin-muted md:py-8'>
                <div className='md:self-center h-full grid items-center gap-8'>
                    <div className='md:text-start text-center'>
                        <h1 className='md:text-5xl text-4xl font-semibold leading-tight md:w-10/12'><span className='bg-gradient-to-r from-red-500 via-lime-500 to-blue-500 bg-[length:100%_6px] bg-no-repeat bg-bottom cursor-none font-bold text-skin-muted text-opacity-90'>Unleash</span> your inner movie buff!</h1>
                        <p className={ `text-xl text-skin-muted leading-snug` }>organize your favorite movies and TV shows, share with friends. All in one place.</p>
                    </div>
                    <button className='bg-skin-button-accent hidden md:block text-skin-inverted text-xl mt-2 py-2 px-4 rounded font-semibold w-fit hover:bg-opacity-95 active:scale-95 transition-transform'>Get Started!</button>
                </div>
                <HeroImg />
                <button className='md:hidden bg-skin-button-accent text-skin-inverted text-xl mt-2 py-2 px-4 rounded font-semibold w-full hover:bg-opacity-95 active:scale-95 transition-transform'>Get Started!</button>
            </section>
        </>
    )
}