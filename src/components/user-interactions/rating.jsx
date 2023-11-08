import { roundToNearestHalf } from '../../utils/misc_utils';

export const Rating = ({ uniqueKey, value, selectedValue }) => {

    const stars = [
        { half: '1', ratingValue: 1, },
        { half: '2', ratingValue: 2, },
        { half: '1', ratingValue: 3, },
        { half: '2', ratingValue: 4, },
        { half: '1', ratingValue: 5, },
        { half: '2', ratingValue: 6, },
        { half: '1', ratingValue: 7, },
        { half: '2', ratingValue: 8, },
        { half: '1', ratingValue: 9, },
        { half: '2', ratingValue: 10, },
    ]

    return (
        <form>
            <div className="rating rating-md rating-half">
                <input type="radio" name={ `rating-${uniqueKey}` } id="rate0" className="rating-hidden tooltip tooltip-top tooltip-warning" data-tip="⚠️ Remove rating" />
                {
                    stars.map(star => (
                        <input
                            key={ crypto.randomUUID() }
                            type="radio"
                            name={ `rating-${uniqueKey}` }
                            id="rate0_5" value={ 0.5 }
                            className={ `bg-yellow-500 mask mask-star-2 mask-half-${star.half}` }
                        />
                    ))
                }
            </div>
        </form>
    )
}