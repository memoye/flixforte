import { Hero, Section } from "../Layout"

const homePageSections = [
    {
        title: "Trending",
        queryKey: ["trending", "all"],
    },
    // {
    //     title: "Popular Movies",
    //     queryKey: ["discover", "movie"]
    // },
    // {
    //     title: "",
    //     queryKey: ["discover", "tv"]
    // }
]

export const HomePage = () => {
    return (
        <div>
            <Hero />
            {
                homePageSections.map(section => (
                    <Section
                        key={ section.title }
                        { ...section }
                        bg={ section.queryKey.includes("trending") && 'bg-wavy-lines2' }
                    />))
            }
        </div>
    )
}

export async function loader() {
    return JSON.parse(sessionStorage.getItem('validated_user'))
}
