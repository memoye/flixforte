import { apprx } from '../../utils/misc_utils';

export const Rating = ({ uniqueKey, value, selectedValue }) => {



    const stars = [
        { half: 'mask-half-1', ratingValue: 1, },
        { half: 'mask-half-2', ratingValue: 2, },
        { half: 'mask-half-1', ratingValue: 3, },
        { half: 'mask-half-2', ratingValue: 4, },
        { half: 'mask-half-1', ratingValue: 5, },
        { half: 'mask-half-2', ratingValue: 6, },
        { half: 'mask-half-1', ratingValue: 7, },
        { half: 'mask-half-2', ratingValue: 8, },
        { half: 'mask-half-1', ratingValue: 9, },
        { half: 'mask-half-2', ratingValue: 10, },
    ]

    return (
        <form>
            <div className="rating rating-md rating-half">
                {/* <input type="radio" name={ `rating-${uniqueKey}` } id="rate0" className="rating-hidden tooltip tooltip-top tooltip-warning" data-tip="⚠️ Remove rating" /> */ }
                {
                    stars.map(star => (
                        <input
                            key={ crypto.randomUUID() }
                            type="radio"
                            name={ `rating-${uniqueKey}` }
                            className={ `bg-yellow-500 mask mask-star-2 ${star.half}` }
                            defaultChecked={ star.ratingValue === apprx(selectedValue) }
                        />
                    ))
                }
            </div>
        </form>
    )
}