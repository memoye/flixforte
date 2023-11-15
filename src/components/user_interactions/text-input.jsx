export const TextInput = ({ type = 'text', label, required = false, error, placeholder }) => {



    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{ label }</span>
                {/* <span className="label-text-alt">Top Right label</span> */ }
            </label>
            <input type="text" placeholder={ placeholder } className="input input-bordered w-full max-w-xs" />
            <label className="label">
                { error && <span className="label-text-alt">{ error }</span> }
                {/* <span className="label-text-alt">Bottom Right label</span> */ }
            </label>
        </div>
    )
}
