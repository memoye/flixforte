export const SearchBox = ({ setSearchOpen }) => {
    function handleClose() {
        setSearchOpen(false)
    }

    return (
        <form>
            <div className="bg-transparent backdrop-blur-sm absolute inset-0"
                onClick={ handleClose }
            >
                <div
                    className="m-auto max-w-sm"
                    onClick={ (event) => event.stopPropagation() }>
                    <input

                        className="block w-full py-4 pl-4 pr-12 focus:outline sm:text-sm sm:leading-6"
                        placeholder="Find Movies..."
                        aria-label="Search components"
                        id="q"
                        name="q"
                        role="combobox"
                        type="search"
                        aria-expanded="false"
                        aria-autocomplete="list"
                        tabIndex={ 0 }

                    />
                </div>
            </div>
        </form>
    )
}