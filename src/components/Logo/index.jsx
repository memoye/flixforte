import { Link } from "react-router-dom";
import { logo } from "../../assets"

export const Logo = ({ text = true, img = true, className }) => {
    return (
        <Link to={ '/' } className={ `flex gap-1 items-center font-black font-serif text-2xl group ${className}` }>
            { img && <div>
                <img className="w-[60px] aspect-auto drop-shadow group-hover:drop-shadow-sm font-mono text-xs" src={ logo } alt="logo by logoipsum" />
            </div>
            }
            { text && (
                <div className="font-thin drop-shadow-md drops ">
                    <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-red-600 transition-colors font-thin">FLIX</span>
                    <span className="group-hover:font-black transition-all ">forte.</span>
                </div>
            ) }
        </Link>
    );
}
