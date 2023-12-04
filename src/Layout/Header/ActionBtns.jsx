import { FaUserCircle } from 'react-icons/fa'
import { TbBell, TbBellHeart, TbBellMinus, TbSearch } from 'react-icons/tb'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ActionBtns = () => {

    const { logged_in, user_name } = useSelector((state) => state.user)

    return (
        <>
            { logged_in ?
                <>
                    <li className="flex items-center -z-10">

                        <button className="text-xl">
                            { <TbBell /> || <TbBellHeart /> || <TbBellMinus /> }
                        </button>

                    </li>
                    <li className="pl-1">
                        <Link to={ `/${user_name}` } className="text-2xl">
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
