import { TbArrowRight } from "react-icons/tb"
import { Link } from "react-router-dom"
import { Card, CardSkeleton } from "../../components"
import { useMoviesData } from "../../hooks/tmdbApi"

export const Section = ({ title, queryKey, bg = 'bg-transparent' }) => {
    const { data, isLoading, isError, error, isFetching, handleTimeWindowChange } = useMoviesData(queryKey)

    return (
        <div className={ `bg-gradient-to-t from-base-300 via-transparent` }>
            <div className={ `${bg} bg-center bg-fixed bg-cover` }>
                <div className={ `w-fit mx-auto my-10` }>
                    <div className="flex justify-between mb-4">
                        <h2 className="text-3xl flex font-bold text-skin-base md:text-start text-center">{ title }
                            {
                                title.toLowerCase() === 'trending' && (
                                    <span className={ ` mx-2 text-base flex items-center gap-2` }>
                                        <span className="font-mono">Today</span>
                                        <input type="checkbox" className="toggle toggle-lg" onChange={ handleTimeWindowChange } />
                                        <span className="font-mono">This week</span>
                                    </span>
                                )
                            }
                        </h2>
                        <Link to={ '/' } // ⚠️ TODO: Link to page with paginated query of this category 
                            className="text-2xl px-4 
                    transition-transform 
                    hover:translate-x-2 
                    active:scale-105">
                            <TbArrowRight />
                        </Link>
                    </div>
                    {
                        isError ?
                            <div className={ `font-semibold 
                    text-4xl capitalize text-center 
                    max-w-sm mx-auto` }>{ error }</div> :
                            <div className={ `carousel carousel-center 
                    w-screen max-w-6xl p-4 space-x-4 pt-12 
                    items-start ${isLoading && 'overflow-hidden'}` }>
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
