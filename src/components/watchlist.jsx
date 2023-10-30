import { useState } from "react"
import { TbPlus } from "react-icons/tb"

const lists = [
    {
        id: crypto.randomUUID(),
        title: 'My Watchlist',
        content: [],
        selected: false
    },
    {
        id: crypto.randomUUID(),
        title: 'My Watchlist',
        content: [],
        selected: true
    },
    {
        id: crypto.randomUUID(),
        title: 'My Watchlist',
        content: [],
        selected: false
    },
    {
        id: crypto.randomUUID(),
        title: 'My Watchlist',
        content: [],
        selected: false
    },
]

export const Watchlists = () => {
    const [adding, setAdding] = useState(false)
    const [testList, setTestList] = useState(lists)

    return (
        <>
            <div className="bg-skin-fill p-2 border  w-[200px] bg-opacity-80 backdrop-grayscale text-sm text-left">
                <strong>SELECT LIST</strong>
                {
                    testList.map(list => (
                        <p>{ list.title }</p>
                    ))
                }
                <div>
                    {
                        adding ?
                            <div className="relative max-w-[200px] ">
                                <input
                                    type="text"
                                    className="inset-0 focus:outline-none bg-skin-fill text-skin-base pr-4 pl-2 font-thin"
                                    name="ListName" id="listName"
                                />
                                <button
                                    onClick={ () => setAdding(false) }
                                    className="absolute right-0  inset-y-0 bg-skin-button-accent text-skin-inverted">
                                    <TbPlus />
                                </button>
                            </div>
                            :
                            <button
                                onClick={ () => setAdding(true) }
                                className="flex relative items-center bg-skin-button-accent text-skin-inverted rounded-sm px-2 py-0.5"
                            >
                                <TbPlus />&nbsp;
                                <span>New</span>
                            </button>

                    }
                    { !adding &&
                        <button>
                            SAVE
                        </button>
                    }
                </div>
            </div>

        </>
    )
}