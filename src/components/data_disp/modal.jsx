export const TrailerModal = ({ movie_id, title }) => {
    return (
        <div>
            {/* <button className="btn">open modal</button> */ }
            <dialog id={ `trailer_modal_${movie_id}` } className="modal">
                <div className="modal-box p-2 lg:max-w-[65%] md:max-w-[80%] sm:max-w-screen-sm">
                    {/* { movie_id } */ }
                    <iframe
                        class="w-full aspect-video rounded-lg"
                        src="https://www.youtube.com/embed/6AQPaSJOQ7o"
                        title={ title }
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                <p className="py-4">Press ESC key or click outside to close</p>
                <form method="dialog" className="modal-backdrop h-screen backdrop-blur">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export const ImageModal = ({ id, img_path, title }) => {
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