import { FaUserCircle } from 'react-icons/fa'
import { TbBell, TbBellHeart, TbBellMinus, TbSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom';

export const HeaderActions = ({ setSearchOpen }) => {

    function handleSearchBtn() {
        setSearchOpen(true)
    }

    const user = true

    return (
        <ul className="flex items-center gap-2">
            <li className="flex items-center">
                <button className="text-xl"
                    onClick={ handleSearchBtn }
                >
                    <TbSearch />
                </button>
            </li>
            { user ?
                <>
                    <li className="border-r border-r-skin-muted pr-2 flex items-center">
                        <button className="text-xl">
                            { <TbBell /> || <TbBellHeart /> || <TbBellMinus /> }

                        </button>
                    </li>
                    <li className="pl-1">
                        <Link className="text-2xl">
                            <FaUserCircle />
                        </Link>
                    </li>
                </>
                :
                <>
                    <li className="font-semibold hover:text-skin-muted">
                        <Link>Login</Link>
                    </li>
                    <li className="bg-skin-button-accent text-skin-inverted px-2 py-1 rounded hover:bg-skin-button-accent-hover">
                        <Link className="">Sign up</Link>
                    </li>
                </>
            }
        </ul>
    );
}
