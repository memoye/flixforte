import { useState } from "react"
import { TbBookmarkFilled, TbCalendar, TbCalendarTime, TbDetails, TbDeviceTv, TbHeart, TbHeartFilled, TbHeartOff, TbHeartPlus, TbLanguage, TbList, TbMovie, TbPlayerPlay, TbPlaylistAdd, TbShare, TbShare2, TbX } from "react-icons/tb"
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { formatDate, getImage, getRatingPercentage, isReleased, roundToNearestHalf, truncateString } from "../../utils/misc_utils"
import { Rating } from "../user_interactions/rating"
import { ImageModal, TrailerModal } from "../modal"
import AddToList from "./AddToList";

export const Card = ({ id, media_type, name, adult, backdrop_path, genre_ids, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count, first_air_date }) => {
    // const comingSoon = isReleased(release_date || first_air_date)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { truncated, str: dispTitle } = truncateString(title || name)
    const date = formatDate(release_date || first_air_date)
    const { percentage: rating_percentage, color: rating_color } = getRatingPercentage(vote_average)

    function handleDropdown() {
        if (dropdownOpen) {
            setDropdownOpen(false)
        } else {
            setDropdownOpen(true)
        }
    }

    return (
        <div className={ `relative m-auto mb-2 max-w-[200px] rounded-box min-h-[346px]` } title={ truncated ? (title || name) : '' }>
            <div className={ `absolute inset-0 backdrop-blur-md rounded-box z-10 ${!dropdownOpen && "hidden"}` } onClick={ handleDropdown } />
            {/* { comingSoon && <div className={ `absolute bg-warning text-warning-content px-2 uppercase bottom-0 rounded-box z-10` } >Coming soon!</div> } */ }

            <div className={ `absolute dropdown dropdown-end top-4 right-4 z-10 ${dropdownOpen && "dropdown-open"}` }>
                <div role="button" className="btn btn-sm btn-circle hover:bg-warning/75 hover:text-warning-content text-lg" onClick={ handleDropdown }>
                    {
                        dropdownOpen ?
                            <TbX /> :
                            <IoEllipsisHorizontalOutline />
                    }
                </div>
                {
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-max">
                        <li><button onClick={ () => console.log(1) }><TbHeartFilled /><span>Add to Favorites</span></button></li>
                        <li><button onClick={ () => console.log(2) }><TbBookmarkFilled /> <span>Add to WatchList</span> </button></li>
                        <AddToList />
                    </ul>
                }
            </div>

            <figure className={ `w-full rounded-box overflow-hidden relative min-h-[300px]` }>
                <img src={ getImage(poster_path) } alt={ title || name } />
                <div className={ `absolute bottom-4 right-4 text-white` }>
                    {
                        media_type === 'tv' &&
                        <div className="inline-flex items-end gap-1 italic text-sm font-semibold bg-transparent backdrop-blur rounded-box px-4">
                            <TbDeviceTv size={ 20 } /> <span>TV Series</span>
                        </div>
                    }
                </div>
            </figure>

            <div
                className={ `absolute -top-8 left-2 radial-progress bg-neutral  text-${rating_color} border-4 border-neutral ${dropdownOpen ? 'hidden' : ''}` }
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