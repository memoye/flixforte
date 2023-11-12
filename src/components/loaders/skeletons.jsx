export const CardSkeleton = () => {

    return (
        <div className="carousel-item flex-col max-h-fit bg-neutral-focus opacity-80 p-2 relative w-[294px] h-[470px] rounded-[30px] animate-pulse opacity-10">
            <div className="rounded-[22px] bg-neutral-content bg-opacity-10 rounded-br-lg  min-h-[250px] " />

            <div className="flex w-11/12 ml-auto px-2 items-start gap-2 h-32 pr-2 -mt-6 ">
                <div className="w-1/3 h-[121px] bg-neutral rounded-md -translate-y-3" />
                <div className="flex-1 flex flex-col justify-between h-full z-10 ">
                    <div className="h-12 w-12 rounded-full bg-neutral ml-auto animate-pulse" />
                    <div className="h-8 w-4/5 bg-neutral rounded-md animate-pulse" />
                    <div className="h-6 w-1/2 bg-neutral rounded-md animate-pulse" />
                </div>
            </div>

            <div className="stats bg-neutral-content h-32 bg-opacity-5 w-full ml-auto mt-5 rounded-b-[22px] rounded-tl-lg" />
        </div>
    )
}