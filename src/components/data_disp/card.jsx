import { useState } from "react"
import { TbCalendarTime, TbDetails, TbHeart, TbHeartFilled, TbHeartOff, TbHeartPlus, TbLanguage, TbPlayerPlay, TbPlaylistAdd, TbShare, TbShare2 } from "react-icons/tb"
import { isReleased, roundToNearestHalf, truncateString } from "../../utils/misc_utils"
import { Rating } from "../user_interactions/rating"
import { ImageModal, TrailerModal } from "./modal"

export const MediaCard = ({ adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count }) => {

    const comingSoon = !isReleased(release_date)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { truncated, str: dispTitle } = truncateString(title)


    return (
        <>
            <div className={ `sm:carousel-item rounded-3xl flex-col max-h-fit bg-primary p-2 relative max-w-xs hover:rounded-[30px] hover:shadow-lg transition-transform ))_hover:-rotate-1 group` }>

                <figure className="hidden group-hover:block rounded-[22px] rounded-br-lg overflow-hidden sm:min-h-[250px] relative"
                    style={ {
                        background: `url(https://image.tmdb.org/t/p/original${backdrop_path}) no-repeat center / cover`
                    } }
                >
                    {/* <img className="border w-full" src={ `https://image.tmdb.org/t/p/original${backdrop_path}` } alt={ original_title } /> */ }
                    { comingSoon && <div className="absolute badge badge-md top-4 right-4">COMING SOON</div>
                    }
                </figure>

                <div className="card image-full group-hover:hidden">
                    <figure><img src={ `https://image.tmdb.org/t/p/original${backdrop_path}` } alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">{ title }</h2>
                        <p>{ truncateString(overview, 110).str }</p>
                        <div className="card-actions flex">
                            <>
                                <div className="join join-horizontal items-center space-x-2">
                                    <span className="stat-value">{ roundToNearestHalf(vote_average).toFixed(1) }</span>
                                    <Rating
                                        uniqueKey={ crypto.randomUUID() }
                                        selectedValue={ vote_average }
                                    />
                                </div>
                                <div className="stat-desc">{ vote_count.toLocaleString() } ratings | Popularity: { roundToNearestHalf(popularity).toLocaleString() }</div>
                            </>
                            <button
                                value={ id }
                                className="btn btn-circle btn-secondary ml-auto"
                                onClick={ async () => {
                                    await setIsModalOpen(true)
                                    document.getElementById(`trailer_modal_${id}`).showModal()
                                } }
                            >
                                <TbPlayerPlay className="m-0 mx-auto text-3xl" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={ `hidden group-hover:flex w-11/12 ml-auto px-2 items-start gap-2 max-h-32 pr-2 -mt-6` }>
                    <figure
                        className="w-1/3 rounded-md overflow-hidden -translate-y-3 shadow-lg shadow-[rgba(0,0,0,0.5)] transition-transform hover:rotate-2 z-0"
                        onClick={ () => document.getElementById(`poster_modal_${id}`).showModal() }
                    >
                        <img src={ `https://image.tmdb.org/t/p/original${poster_path}` } alt={ original_title } />
                    </figure>
                    <div className="flex-1 flex flex-col justify-between h-full z-10">


                        <button
                            value={ id }
                            className="btn btn-circle btn-secondary ml-auto"
                            onClick={ async () => {
                                await setIsModalOpen(true)
                                document.getElementById(`trailer_modal_${id}`).showModal()
                            } }
                        >
                            <TbPlayerPlay className="m-0 mx-auto text-3xl" />
                        </button>

                        <div className={ `${truncated ? 'tooltip tooltip-top w-fit' : ''} mb-auto text-left` } data-tip={ title }>
                            <h3 className="text-lg">{ dispTitle }</h3>
                            <p className="font-extralight flex items-center gap-1">
                                <TbCalendarTime /> { release_date?.slice(0, 4) } |
                                <TbLanguage /> { original_language.toUpperCase() }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hidden group-hover:flex stats bg-opacity-50 w-full ml-auto mt-5 rounded-b-[22px] rounded-tl-lg">
                    <div className="stat">
                        <div className="stat-title">Rating</div>
                        <div className="join join-horizontal items-center space-x-2">
                            <span className="stat-value">{ roundToNearestHalf(vote_average).toFixed(1) }</span>
                            <Rating
                                uniqueKey={ crypto.randomUUID() }
                                selectedValue={ vote_average }
                            />
                        </div>
                        <div className="stat-desc">{ vote_count.toLocaleString() } ratings | Popularity: { roundToNearestHalf(popularity).toLocaleString() }</div>
                    </div>
                    <div className="stat p-2 flex flex-col items-center justify-around">
                        <button
                            className={ `btn btn-sm btn-ghost btn-circle tooltip-left tooltip tooltip-info` }
                            data-tip={ "Add to Favorites" } >
                            <TbHeartFilled className="mx-auto" size={ 20 } />
                        </button>
                        <button
                            className={ `btn btn-sm btn-ghost btn-circle tooltip-left tooltip tooltip-info` }
                            data-tip="Add to watch list" >
                            <TbPlaylistAdd className="mx-auto" size={ 20 } /></button>
                        <button className={ `btn btn-sm btn-ghost btn-circle tooltip-left tooltip tooltip-info` } data-tip="Share" >
                            <TbShare className="mx-auto" size={ 20 } /></button>
                    </div>
                </div>
            </div >
            <TrailerModal
                movie_id={ id }
                title={ original_title }
                modalControl={ { isModalOpen, setIsModalOpen } }
            />
            <ImageModal
                id={ id }
                modalControl={ { isModalOpen, setIsModalOpen } }
                img_path={ poster_path }
                title={ original_title }
            />
        </>
    )
}
