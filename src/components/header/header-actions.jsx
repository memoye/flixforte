import { FaUserCircle } from 'react-icons/fa'
import { TbBell, TbBellHeart, TbBellMinus, TbSearch } from 'react-icons/tb'
import { Link, useRouteLoaderData } from 'react-router-dom';

export const HeaderActions = ({ setSearchOpen }) => {
    const user = JSON.parse(sessionStorage.getItem('validated_user'))

    // useRouteLoaderData("root");

    return (
        <>
            { user?.logged_in ?
                <>
                    <li className="flex items-center -z-10">

                        <button className="text-xl">
                            { <TbBell /> || <TbBellHeart /> || <TbBellMinus /> }
                        </button>

                    </li>
                    <li className="pl-1">
                        <Link to={ `/profile:` } className="text-2xl">
                            <FaUserCircle />
                        </Link>
                    </li>
                </> :
                <>
                    <li className="font-semibold min-w-max">
                        <Link to={ '/signin' } className='btn btn-sm btn-accent'>Sign in</Link>
                    </li>
                </>
            }
        </>
    );
}
