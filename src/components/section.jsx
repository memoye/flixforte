import { TbArrowRight, TbDeviceTvOld, TbMovie } from "react-icons/tb"

export const Section = ({ title }) => {
    return (
        <section className="mt-8">
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
            <div>
                {

                }
            </div>
        </section>
    )
}

