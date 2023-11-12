
import { useEffect, useState } from "react"
import { useVideosData } from "../../hooks/tmdbApi"

export const TrailerModal = ({ movie_id, title, modalControl }) => {
    const { data, isLoading } = useVideosData(movie_id)

    const { isModalOpen, setIsModalOpen } = modalControl
    const videos = data?.data?.results?.filter(video => video?.site.toLowerCase() == "youtube")
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        document.getElementById(`slide${currentSlide}`)?.scrollIntoView({ behavior: 'smooth' })
    }, [currentSlide])



    return (
        <div>
            <dialog id={ `trailer_modal_${movie_id}` } className="modal">
                <div className="modal-box p-2 lg:max-w-[65%] md:max-w-[80%] sm:max-w-screen-sm min-h-fit">
                    { (isModalOpen &&
                        <>
                            <div className="carousel w-full lg:overflow-x-hidden">

                                { !isLoading &&
                                    videos?.map((video, i) => (
                                        <iframe
                                            key={ video.id }
                                            id={ `slide${i}` }
                                            className="carousel-item w-full aspect-video rounded-lg"
                                            src={ `https://www.youtube.com/embed/${video.key}` }
                                            title={ title }
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen={ false }
                                        />
                                    ))
                                }
                            </div>
                            <div className="join hidden md:block shadow-md shadow-black w-fit ml-auto">
                                <button
                                    className="join-item btn btn-sm"
                                    data-tip="Prev."
                                    onClick={ () => setCurrentSlide(prev => prev - 1) }
                                    disabled={ currentSlide === 0 }>
                                    «
                                </button>
                                <button className="join-item btn btn-sm">{ currentSlide + 1 }</button>
                                <button
                                    href={ `#slide${currentSlide + 1}` }
                                    className="join-item btn btn-sm"
                                    data-tip="Next"
                                    onClick={ () => setCurrentSlide(prev => prev + 1) }
                                    disabled={ currentSlide + 1 > videos.length - 1 }>
                                    »
                                </button>
                            </div>
                        </>
                    )
                    }

                </div>
                <form method="dialog" className="modal-backdrop h-screen backdrop-blur">
                    <button onClick={ () => {
                        setCurrentSlide(0)
                        setIsModalOpen(false)
                    } }>close</button>
                </form>
            </dialog>
        </div>
    )
}

export const ImageModal = ({ id, img_path, title, modalControl }) => {

    return (
        <div>
            {/* <button className="btn">open modal</button> */ }
            <dialog id={ `poster_modal_${id}` } className="modal">
                <div className="modal-box h-max p-2 w-[300px] rounded-md">
                    <figure>
                        <figure className="w-full rounded overflow-hidden" >
                            <img src={ `https://image.tmdb.org/t/p/original${img_path}` } alt={ title } />
                        </figure>
                        <span className="font-extralight text-xs text-right block mt-2" >Press ESC or click outside to close</span>
                    </figure>
                </div>
                <form method="dialog" className="modal-backdrop h-screen backdrop-blur">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}