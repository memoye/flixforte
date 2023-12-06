import { TbArrowRight } from "react-icons/tb"
import { Link } from "react-router-dom"
import { Card, CardSkeleton } from "../../components"
import { useMoviesData } from "../../hooks/tmdbApi"

export const Section = ({ title, queryKey, bg = 'bg-transparent' }) => {
    const { data, isLoading, isError, error, isFetching, timeWindow, setTimeWindow } = useMoviesData(queryKey)

    return (
        <div className={ `bg-gradient-to-t from-base-300 via-transparent` }>
            <div className={ `${bg} bg-center bg-fixed bg-cover` }>
                <div className={ `w-fit mx-auto my-10` }>
                    <div className="flex justify-between mb-4">
                        <h2 className="text-3xl flex font-bold text-skin-base md:text-start text-center mx-4">{ title }
                            {
                                title.toLowerCase() === 'trending' && (
                                    <div className={ `text-sm join border overflow-hidden ml-4 font-semibold cursor-pointer hover:bg-accent/20 transition-all` }>
                                        <div className={ `px-1 grid place-items-center transition-all ${timeWindow === 'day' ? 'bg-accent text-accent-content rounded-r-full pr-1 z-[2]' : ''}` } onClick={ () => setTimeWindow('day') }>TODAY</div>
                                        <div className={ `px-1 grid place-items-center transition-all ${timeWindow === 'week' ? 'bg-accent text-accent-content rounded-l-full pl-1 z-[2]' : ''}` } onClick={ () => setTimeWindow('week') }>THIS WEEK</div>
                                    </div>
                                )
                            }
                        </h2>
                        <Link to={ '/' } // ⚠️ TODO: Link to page with paginated query of this category 
                            className="text-2xl px-4 transition-transform hover:translate-x-2 active:scale-105">
                            <TbArrowRight />
                        </Link>
                    </div>
                    {
                        isError ?
                            <div className={ `font-semibold text-4xl capitalize text-center max-w-sm mx-auto` }>{ error }</div> :
                            <div className={ `carousel carousel-center w-screen max-w-6xl p-4 space-x-4 pt-12 items-start ${isLoading && 'overflow-hidden'}` }>
                                {
                                    isLoading || isFetching ?
                                        [1, 2, 3, 4, 5]
                                            .map((_, i) => (
                                                <div className="carousel-item" key={ i }>
                                                    <CardSkeleton />
                                                </div>
                                            )) :
                                        data?.data?.results
                                            .map(item => (
                                                <div className="carousel-item" key={ item.id }>
                                                    <Card { ...item } />
                                                </div>
                                            ))
                                }
                            </div> }
                </div>
            </div>
        </div>

    )
}
