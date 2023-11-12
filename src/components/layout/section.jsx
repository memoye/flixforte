import { TbArrowRight } from "react-icons/tb"
import { useMoviesCategory } from "../../hooks/tmdbApi"
import { MediaCard } from "../data_disp/card"
import { TrailerModal } from "../data_disp/modal"
import { CardSkeleton } from "../loaders/skeletons"


export const Section = ({ title, endpoint }) => {
    const { data, isLoading, isError, error } = useMoviesCategory(endpoint)
    const max = 5

    return (
        <section className="mt-8 ">
            <div className="flex justify-between mb-4">
                <h2 className="text-3xl font-bold text-skin-base md:text-start text-center">{ title }</h2>
                {
                    // <button className="flex items-center border">
                    // <TbMovie /> <TbDeviceTvOld />
                    // </button>
                }
                <button className="text-2xl hover:bg-white hover:bg-opacity-50 hover:text-skin-inverted rounded-md px-4">
                    <TbArrowRight className="animate-pulse" />
                </button>
            </div>
            <div className="sm:carousel carousel-center items-start max-w-full p-8 space-x-4 rounded-box overflow-y-visible mask-x">
                { isError ? <>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </>
                    :
                    (!isError && data?.data?.results?.map((movie, i) => i < max ? (
                        <MediaCard
                            key={ movie.id }
                            tilt_dir={ i % 2 <= 0 ? '' : '-' }
                            { ...movie }
                        />
                    ) : ''))
                }
            </div>

            {/* <div className="sm:carousel carousel-center max-w-full p-8 sm:space-x-4 rounded-box overflow-y-visible mask-x">

            </div> */}
        </section>
    )
}

