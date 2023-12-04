import { useEffect, useRef, useState } from "react"
import { TbSearch, TbLoader } from "react-icons/tb"
import { formatDate, stopBubbling, truncateString } from "../../utils/misc_utils"
import { noResult } from "../../assets"


const results = [
    // { id: '12', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '22', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '22d', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '25', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '2d', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '2dt', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '2a', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '2t', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '2wer', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '2werd', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '2dwee', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: 'swer2', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
    // { id: '2dfwr', title: 'The Godfatherjdfl jdogj ng dkskjjkksjng', release_date: '10-2-1998' },
]

export const SearchBox = ({ setSearchOpen, searchOpen }) => {

    const searchboxRef = useRef(null)
    const [searching, setSearching] = useState(false)
    const resultsContainerRef = useRef(null)

    function handleClose() {
        setSearchOpen(false)
    }


    useEffect(() => {
        searchboxRef.current.focus()
        resultsContainerRef?.current?.addEventListener('scrollend', (event) => {
            event.target.classList.add('custom-mask')
        })

        resultsContainerRef?.current?.addEventListener('scroll', (event) => {
            event.target.classList.remove('custom-mask')
        })

        resultsContainerRef?.current?.addEventListener('hover', (event) => {
            event.target.classList.remove('custom-mask')
        })

    }, [])

    return (
        <form>
            <div className="bg-transparent backdrop-blur-sm inset-0 absolute z-40"
                onClick={ handleClose }
                onKeyDown={ e => e.key === 'Escape' && setSearchOpen(false) }
            >
                <div
                    className={ `mx-auto w-[90vw] max-w-sm relative bg-skin-fill-extreme rounded-t-xl ${!searching && results.length < 1 && 'rounded-xl bg-opacity-10'}` }
                    onClick={ stopBubbling }>
                    <input
                        className="block w-full bg-skin-fill-extreme bg-opacity-50 py-4 pl-4 pr-12 focus:outline-2  sm:text-sm sm:leading-6 mt-10 rounded-xl"
                        ref={ searchboxRef }
                        placeholder="Find Movies..."
                        aria-label="Search components"
                        id="q"
                        name="q"
                        role="search"
                        type="search"
                        aria-expanded="false"
                        aria-autocomplete="list"
                        tabIndex={ 0 }
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-skin-muted">
                        { searching ?
                            <TbLoader className='animate-spin' /> :
                            <TbSearch />
                        }
                    </span>
                </div>
                { results.length > 1 &&
                    <ul
                        className={ `max-h-[50vh] overflow-y-scroll no-scrollbar overflow-x-visible md:px-10 mx-auto w-fit` }
                        onClick={ stopBubbling }
                        ref={ resultsContainerRef }
                    >
                        { results?.map(({ id, title, release_date }, index) => (
                            <li key={ id }
                                onMouseOver={ () => {
                                    if (index + 1 === results.length) {
                                        resultsContainerRef.current.classList.remove('custom-mask')
                                    }
                                } }
                                className={ `bg-skin-fill-extreme mt-[1px] max-w-sm w-[90vw] mx-auto px-4 flex items-center justify-between hover:scale-105 active:scale-95 hover:rounded transition-transform hover:shadow hover:cursor-pointer py-4 shadow-lg  ${index + 1 == results.length ? 'rounded-b-xl' : ''}` }
                            >
                                <span className="font-semibold"
                                    title={ title }
                                >
                                    { truncateString(title) }
                                </span>
                                <span className="italic font-extralight">
                                    { formatDate(release_date, 'year') }
                                </span>
                            </li>
                        ))
                        }
                    </ul>
                }
                <em className='m-auto w-fit block font-thin mt-5 max-w-20 text-skin-muted' role='note'>Click outside to exit search.</em>
                {/* If user search does not match any results  */ }
                { searching && results.length < 1 &&
                    <div className="bg-skin-fill-extreme max-w-sm w-[90vw] mx-auto text-center pb-4 px-4 rounded-b-lg "
                        onClick={ stopBubbling }
                    >
                        <img src={ noResult } alt="no result found" className="w-24 mx-auto" />
                        <strong className='text-skin-base'>No results found!</strong><br />
                        <em className='text-skin-muted'>The movie you're looking for was not found. Try searching with a different keyword</em>
                    </div>
                }
            </div>
        </form >
    )
}