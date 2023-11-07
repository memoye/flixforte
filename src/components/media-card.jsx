import { useState } from "react"
import { TbHeartFilled, TbHeartPlus, TbPlaylistAdd } from "react-icons/tb"
import { Watchlists } from "./watchlist"

const sample = {
    "adult": false,
    "backdrop_path": "/iQcCAm8hKWZyUntqrvzyEGtXyJl.jpg",
    "genre_ids": [
        878,
        28,
        53
    ],
    "id": 670292,
    "original_language": "en",
    "original_title": "The Creator",
    "overview": "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
    "popularity": 185.233,
    "poster_path": "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
    "release_date": "2023-09-29",
    "title": "The Creator",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 447
}

// const { adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } = sample

export const MediaCard = ({ adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count }) => {

    const [like, setLike] = useState(false)
    // https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg

    const [hovering, setHovering] = useState(false)

    return (
        // <div className="relative  w-fit">
        <div className="carousel-item relative max-w-xs rounded-3xl overflow-hidden hover:shadow-2xl md:hover:scale-105 md:focus:scale-105 transition-transform hover:-translate-y-4 ">
            <img className="min-h-[420px] bg-not-found bg-center bg-contain bg-skin-fill-extreme bg-no-repeat" src={ `https://image.tmdb.org/t/p/original${poster_path}` } alt={ original_title } />

            {/*buttons*/ }
            <div className="absolute top-4 right-4 text-3xl">
                {
                    /* <button
                        className={ `relative` }
                        onClick={ () => setLike(!like) } title="Add to favorites">
                        <TbPlaylistAdd />
                         {
                            <div className="absolute top-4 right-full">
                                <Watchlists />
                            </div>
                        } 
                    </button> */
                }
                {
                    /* <button className="bg-skin-button-accent bg-opacity-30 hover:bg-opacity-60 p-2 rounded-lg" onClick={ () => setLike(!like) } title="Add to List">
                        { like ?
                            <TbHeartFilled className="text-red-500 " /> :
                            <TbHeartPlus className="text-red-500 " />
                        }
                    </button> */
                }
                { adult && <div className="bg-skin-button-muted px-2 py-1 rounded-lg">18+</div> }
            </div>

            <div className="flex justify-between bg-gradient-to-t from-black via-black to-transparent items-center absolute bottom-0 inset-x-0 p-6 font-thin text-white">
                <div className="">
                    <p>{ release_date?.slice(0, 4) }</p>

                    <p className="font-bold">⭐{ vote_average }</p>
                    <p>{ vote_count } Ratings</p>
                </div>

                <button className="bg-skin-button-accent bg-opacity-30 hover:bg-opacity-60 p-2 rounded-lg text-4xl" onClick={ () => setLike(!like) } title="Add to List">
                    { like ?
                        <TbHeartFilled className="text-red-500 " /> :
                        <TbHeartPlus className="text-red-500 " />
                    }
                </button>
            </div>
        </div>
        // </div>
    )

}