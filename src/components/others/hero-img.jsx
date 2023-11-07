import { elba, emiliaKit, samJackson, table, toggles } from "../../assets"

export const HeroImg = () => {
    return (
        <div className="relative w-fit h-fit my-4 p-5 scale-90 rotate-1 mx-auto">
            <img draggable={ false } className='tableSvg' src={ table } alt="table" />

            <div className="absolute -rotate-2 mask-x top-1/2 w-full -translate-y-1/2 inline-flex flex-nowrap">
                <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                    <li>
                        <img draggable={ false } src={ toggles } alt="/" />
                    </li>
                </ul>
                <ul aria-hidden className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                    <li>
                        <img draggable={ false } src={ toggles } alt="/" />
                    </li>
                </ul>
            </div>

            <img draggable={ false } className='absolute rounded-sm hover:drop-shadow-glow transition-transform hover:scale-125 hover:z-10 -top-2 left-1/2 -translate-x-1/2 aspect-auto w-40 shadow-lg ' src={ samJackson } alt="movie screenshots " />
            <img draggable={ false } className='absolute rounded-sm hover:drop-shadow-glow transition-transform hover:scale-125 hover:z-10 -right-4 aspect-auto bottom-8 w-44 shadow-lg' src={ emiliaKit } alt="movie screenshots" />
            <img draggable={ false } className='absolute rounded-sm hover:drop-shadow-glow transition-transform hover:scale-125 hover:z-10 -left-4 md:scale-105 -bottom-2 aspect-auto w-36 shadow-lg' src={ elba } alt="movie screenshots" />
        </div>
    )
}
