import { request } from "../../utils/axios-utils"

const sample_user = {
    "avatar": {
        "gravatar": { "hash": "66fbfaea93e503d3d301d309bf8165bb" },
        "tmdb": { "avatar_path": null }
    },
    "id": 20245798,
    "iso_639_1": "en",
    "iso_3166_1": "NG",
    "name": "Brown Memoye",
    "include_adult": true,
    "username": "memoye"
}

export const Account = () => {
    // const data = useLoaderData()

    return (
        <div>
            <img src={ sample_user.avatar.tmdb.avatar_path !== null ?
                sample_user.avatar.tmdb.avatar_path :
                `https://www.gravatar.com/avatar/${sample_user.avatar.gravatar.hash}` }
                alt={ sample_user.username }
            />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio autem excepturi fugit dolor vitae amet possimus accusantium. Nesciunt numquam laborum, labore accusantium enim sint fuga dolores quisquam maxime rem nemo.
            <button className="btn btn-ghost"
                onClick={ tmdb_logout }
            >Logout</button>
        </div>
    )
}

export function loader() {
    const { request_token } = JSON.parse(sessionStorage.getItem('validated_user'))
    return request({ url: 'account', data: { request_token } })
}