import { TbArrowRight, TbDeviceTvOld, TbMovie } from "react-icons/tb"
import { Card, CardSkeleton, Hero, Section } from "../components"
import { Link, useLoaderData } from "react-router-dom"

const sections = [
    {
        title: 'Trending',
        endpoint: '/movie/now_playing',
    },
    {
        title: 'Popular',
        endpoint: '/movie/popular',
    },
    {
        title: 'Top Rated',
        endpoint: '/movie/top_rated',
    },
]

export const HomePage = () => {

    const loading = false

    return (
        <div>
            <Hero />
            {/* <div className="w-full h-20">

            </div> */}
            {
                // sections.map(section => (
                //     <Section
                //         key={ section.title }
                //         { ...section }
                //     />)
                // )
                <div className={ `w-fit mx-auto my-10` }>
                    <div className="flex justify-between mb-4">
                        <h2 className="text-3xl font-bold text-skin-base md:text-start text-center">Trending</h2>
                        {
                            // <button className="flex items-center border">
                            // <TbMovie /> <TbDeviceTvOld />
                            // </button>
                        }
                        <Link to={ '/' } // ⚠️ TODO: Link to page with paginated query of this category 
                            className="text-2xl px-4 transition-transform hover:translate-x-2 active:scale-105">
                            <TbArrowRight />
                        </Link>
                    </div>
                    <div className={ `carousel carousel-center w-screen max-w-6xl p-4 space-x-4 rounded-box pt-12 ${loading && 'overflow-hidden'}` }>
                        {
                            loading ?
                                [1, 2, 3, 4, 5]
                                    .map((_, i) => (
                                        <div className="carousel-item" key={ i }>
                                            <CardSkeleton />
                                        </div>
                                    )) :
                                [1, 2, 3, 4, 5, 6, 7]
                                    .map((_, i) => (
                                        <div className="carousel-item" key={ i }>
                                            <Card />
                                        </div>
                                    ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export async function loader() {
    return JSON.parse(sessionStorage.getItem('validated_user'))
}