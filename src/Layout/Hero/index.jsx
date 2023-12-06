import { useSelector } from 'react-redux';
import { HeroImg } from '../../components'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { useMoviesData } from '../../hooks/tmdbApi';
import { useState } from 'react';
import { getImage } from '../../utils/misc_utils';
import { TbBookmarkFilled, TbHeartFilled, TbPlayerPlay } from 'react-icons/tb';

export const Hero = () => {
    const { logged_in } = useSelector(state => state.user)

    if (logged_in) {
        return (
            <LoggedInHero />
        )
    }

    return (
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
    )
}

function LoggedInHero() {
    const { data, isLoading, isError, error, isRefetching } = useMoviesData(['movie', 'now_playing'])
    const [nowShowing, setNowShowing] = useState(1)
    const [isFavourite, setIsFavourite] = useState(false)

    const movie = data?.data?.results[nowShowing]
    console.log(movie)



    return (
        <div className={ `hero min-h-screen overflow-hidden` }>
            <div className={ `w-full h-full grid place-items-center relative` }>
                <img src={ getImage(movie?.backdrop_path, 'original') } className="hidden sm:block absolute inset-0 brightness-50 blur-[1px] opacity-60" />
                <img src={ getImage(movie?.poster_path, 'original') } className="sm:hidden block absolute inset-0 brightness-50 blur-[1px] opacity-60" />
                <div className="hero-content max-w-6xl flex-col lg:flex-row-reverse  bg-gradient-to-t from-base-100 to-transparent via-base-100 sm:bg-none">
                    <img src={ getImage(movie?.poster_path, 'small') } className="max-[375px]:hidden max-w-xs rounded-lg shadow-2xl" />
                    <img src={ getImage(movie?.backdrop_path, 'small') } className="max-[375px]:block hidden rounded-lg shadow-2xl" />

                    <div className='max-lg:text-center'>
                        <h1 className="text-5xl font-bold">{ movie?.title }</h1>
                        <p className="py-6">{ movie?.overview }</p>
                        <div className={ `flex items-center justify-center sm:justify-start gap-2` }>
                            <button className="btn btn-primary"
                            >
                                <span className={ '' }>{ <TbPlayerPlay size={ 24 } /> }</span>
                                <span className={ '' }>Watch Trailer</span>
                            </button>
                            <button className="btn btn-ghost"
                                onClick={ () => setIsFavourite(!isFavourite) }
                            >
                                <span className={ `transition-colors ${isFavourite ? 'text-red-700' : ''}` }>{ <TbHeartFilled size={ 24 } /> }</span>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}