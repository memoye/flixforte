import { useState } from "react";
import { TbBookmarkFilled, TbHeartFilled, TbList } from "react-icons/tb"
import { FaPlus } from "react-icons/fa"
import { stopBubbling } from "../../utils/misc_utils";

const AddToList = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <li onClick={ () => setDropdownOpen(!dropdownOpen) }>
            <div className={ `dropdown dropdown-bottom ${dropdownOpen && 'dropdown-open'}` }>
                <div tabIndex={ 0 } role="button" className="flex items-center gap-1 w-full h-full" >
                    <TbList className={ `` } />&nbsp;<span>Add to List</span>
                </div>
                { dropdownOpen &&
                    <div className={ `dropdown-content z-[1] shadow-md select-primary bg-base-200 w-[120%] max-w-sm p-2` } onClick={ stopBubbling }>
                        <button className="btn btn-sm btn-ghost w-full justify-start mb-1"><FaPlus /> Create New</button>
                        <select className="select select-primary w-full max-w-sm">
                            <option>Add to existing lists</option>
                            <option>Game of Thrones</option>
                            <option>Lost</option>
                            <option>Breaking Bad</option>
                            <option>Walking Dead</option>
                        </select>
                    </div>
                }
            </div>
        </li>
    )
}
export default AddToList