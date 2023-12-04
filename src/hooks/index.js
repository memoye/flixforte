import { useState } from "react"

export const useCyclicState = (possibleStates) => {
    const [state, setState] = useState(possibleStates[0])

    const handleStateChange = () => {
        setState((currentState) => {
            const currStatePos = possibleStates.indexOf(currentState)
            const nextPos = (currStatePos + 1) % possibleStates.length
            return possibleStates[nextPos]
        })
    }

    return [state, setState, handleStateChange]
}