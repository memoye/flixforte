import { useState } from "react"
import { TbBookmarkFilled, TbCalendar, TbCalendarTime, TbDetails, TbDeviceTv, TbHeart, TbHeartFilled, TbHeartOff, TbHeartPlus, TbLanguage, TbList, TbMovie, TbPlayerPlay, TbPlaylistAdd, TbShare, TbShare2, TbX } from "react-icons/tb"
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { formatDate, getImage, getRatingPercentage, isReleased, roundToNearestHalf, truncateString } from "../../utils/misc_utils"
import { Rating } from "../user_interactions/rating"
import { ImageModal, TrailerModal } from "../modal"
import AddToList from "./AddToList";

const sample = [{
    "adult": false,
    "backdrop_path": "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
    "id": 897087,
    "title": "Freelance",
    "original_language": "en",
    "original_title": "Freelance",
    "overview": "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
    "poster_path": "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
    "media_type": "movie",
    "genre_ids": [
        28,
        35
    ],
    "popularity": 104.793,
    "release_date": "2023-10-05",
    "video": false,
    "vote_average": 6.897,
    "vote_count": 68
},
{
    "adult": false,
    "backdrop_path": "/vcFW09U4834DyFOeRZpsx9x1D3S.jpg",
    "id": 57243,
    "name": "Doctor Who",
    "original_language": "en",
    "original_name": "Doctor Who",
    "overview": "The Doctor is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living—more of a hobby actually, and the Doctor's very, very good at it.",
    "poster_path": "/8n8bF1hPICIYC4byBj0pqNn9vXs.jpg",
    "media_type": "tv",
    "genre_ids": [
        10759,
        18,
        10765
    ],
    "popularity": 750.33,
    "first_air_date": "2005-03-26",
    "vote_average": 7.5,
    "vote_count": 2696,
    "origin_country": [
        "GB"
    ]
},
]

export const Card = (
    // { adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count }
) => {

    const { id, media_type, name, adult, backdrop_path, genre_ids, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count, first_air_date } = sample[0]
    const comingSoon = !isReleased(release_date)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { truncated, str: dispTitle } = truncateString(title || name)
    const date = formatDate(release_date || first_air_date)
    const rating_percentage = getRatingPercentage(vote_average)

    function handleDropdown() {
        if (dropdownOpen) {
            setDropdownOpen(false)
        } else {
            setDropdownOpen(true)
        }
    }

    return (
        <div className={ `relative m-auto mb-2 max-w-[200px] rounded-box min-h-[346px]` }>
            <div className={ `absolute inset-0 backdrop-blur-md rounded-box z-10 ${!dropdownOpen && "hidden"}` } onClick={ handleDropdown } />

            <div className={ `absolute dropdown dropdown-end top-4 right-4 z-10 ${dropdownOpen && "dropdown-open"}` }>
                <div role="button" className="btn btn-sm btn-circle hover:bg-warning/75 hover:text-warning-content text-lg" onClick={ handleDropdown }>
                    {
                        dropdownOpen ?
                            <TbX /> :
                            <IoEllipsisHorizontalOutline />
                    }
                </div>
                {
                    // dropdownOpen &&
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-max">
                        <li><button onClick={ () => console.log(1) }><TbHeartFilled /><span>Add to Favorites</span></button></li>
                        <li><button onClick={ () => console.log(2) }><TbBookmarkFilled /> <span>Add to WatchList</span> </button></li>
                        <AddToList />
                    </ul>
                }
            </div>

            <figure className={ `w-full rounded-box overflow-hidden relative min-h-[300px]` }>
                <img src={ getImage(poster_path) } alt={ title || name } />
                <div className={ `absolute bottom-4 right-4 text-xl text-warning` }>
                    {
                        media_type === 'tv' ?
                            <TbDeviceTv /> :
                            <TbMovie />
                    }
                </div>
            </figure>

            <div
                className={ `absolute -top-8 left-2 radial-progress bg-primary text-primary-content border-4 border-primary ${dropdownOpen ? 'hidden' : ''}` }
                style={ { "--value": rating_percentage, "--size": '50px' } }
                role="progressbar">{ rating_percentage }%
            </div>

            <div className={ `mx-2` }>
                <div className={ `text-lg font-semibold w-full` }>
                    { dispTitle }
                </div>
                <div className={ `items-center text-md` }>
                    <span>
                        { date }
                    </span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}