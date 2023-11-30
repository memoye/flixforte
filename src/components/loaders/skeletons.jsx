export const CardSkeleton = () => {

    return (
        <div className="skeleton h-[300px] w-[200px]">
            <div className="skeleton h-4/5   w-full bg-neutral rounded-box animate-pulse" />
            <div className="skeleton h-4 w-4/5 mt-4 ml-2 bg-neutral animate-pulse" />
            <div className="skeleton h-4 w-3/5 mt-4 ml-2 bg-neutral animate-pulse" />
        </div>
    )
}