import { TbDeviceTvOld, TbMovie } from "react-icons/tb"
import { Hero, MediaCard, Section } from "../components"
import { useLoaderData } from "react-router-dom"

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
    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <Hero />
            <div className="w-full h-20">

            </div>
            {
                sections.map(section => (
                    <Section
                        key={ section.title }
                        { ...section }
                    />)
                )
            }
        </div>
    )
}

export async function loader() {
    return JSON.parse(sessionStorage.getItem('validated_user'))
}