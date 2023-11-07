import { TbArrowRight } from "react-icons/tb"
import { useMoviesCategory } from "../hooks/tmdbApi"
import { MediaCard } from "./media-card"


export const Section = ({ title, endpoint }) => {
    const { data, isLoading } = useMoviesCategory(endpoint)

    if (isLoading) return <p>Loading</p>

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
            <div className="carousel carousel-center max-w-full p-8 space-x-4 rounded-box overflow-y-visible mask-x">
                {
                    data?.data.results.map(movie => (
                        <MediaCard
                            key={ movie.id }
                            { ...movie }
                        />
                    ))
                }
            </div>
        </section>
    )
}

