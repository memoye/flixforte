import { useSelector } from 'react-redux';
import { HeroImg } from '../../components'
import { Link } from 'react-router-dom'

export const Hero = () => {
    const { logged_in } = useSelector(state => state.user)

    if (logged_in) {
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content max-w-6xl flex-col lg:flex-row-reverse">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-md rounded-lg shadow-2xl" />
                    <div className='max-lg:text-center'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        )
    }

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