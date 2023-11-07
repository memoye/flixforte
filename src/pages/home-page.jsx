import { TbDeviceTvOld, TbMovie } from "react-icons/tb"
import { Hero, MediaCard, Section } from "../components"

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



    return (
        <div>
            <Hero />
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