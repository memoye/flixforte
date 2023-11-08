import { useState } from "react"
import { TbHeart, TbHeartFilled, TbHeartPlus, TbPlayerPlay, TbPlaylistAdd } from "react-icons/tb"
import { truncateString } from "../../utils/misc_utils"
import { Rating } from "../user-interactions/rating"

export const MediaCard = ({ adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count }) => {

    const [like, setLike] = useState(false)
    const { truncated, str: dispTitle } = truncateString(title)


    return (
        <>
            <div className="carousel-item flex-col bg-primary p-2 relative max-w-xs rounded-[30px] hover:shadow-lg transition-transform hover:-translate-y-1 hover:z-10 group">
                <figure className="rounded-[22px] rounded-br-lg overflow-hidden min-h-[250px]">
                    <img className="h-full object-cover" src={ `https://image.tmdb.org/t/p/original${backdrop_path}` } alt={ original_title } />
                </figure>

                <div className={ `flex w-11/12 mx-auto px-2 items-start gap-2 max-h-32 -mt-6 ` }>
                    <figure className="w-1/4 rounded-md overflow-hidden -translate-y-3 shadow-lg shadow-[rgba(0,0,0,0.5)]  transition-transform" >
                        <img src={ `https://image.tmdb.org/t/p/original${poster_path}` } alt={ original_title } />
                    </figure>
                    <div className="flex-1 flex flex-col justify-between h-full">
                        <button className="btn-circle  bg-red-700 ml-auto">
                            <TbPlayerPlay className="m-0 mx-auto text-3xl" />
                        </button>

                        <div className={ `${truncated ? 'tooltip tooltip-top w-fit' : ''} text-left` } data-tip={ title }>
                            <h3 >{ dispTitle }</h3>
                            <p>{ release_date?.slice(0, 4) }</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex">
                        <Rating uniqueKey={ crypto.randomUUID() } value={ 5 } />
                    </div>
                    <div>{ vote_average }</div>
                </div>

                {/* <div className=""> */ }
                {/* <button className={ `indicator-item ${like ? 'animate-none' : 'animate-pulse invisible'} group-hover:visible` }>
                        <TbHeart className="m-0 mx-auto text-3xl" />
                    </button> */}
                {/* <div className=" image-full shadow-xl">

                        <figure>
                            <img src={ `https://image.tmdb.org/t/p/original${poster_path}` } alt={ original_title } />
                        </figure>


                        <div className="">
                            <h3 className="">
                                { original_title }
                            </h3>
                            <div className="join join-horizontal space-x-2">
                                <div className="">☆{ vote_average }</div>

                                <div>{ vote_count } Ratings</div>
                                <div>{ release_date?.slice(0, 4) }</div>
                            </div>

                        </div>

                    </div> */}
                {/* </div> */ }
            </div >



        </>
    )

}