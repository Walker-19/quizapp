import { useState } from "react";

function UseShared(initalState: any){

    const [state, setState] = useState(initalState)

    const updateState =  (newState: any) =>{
        setState(newState);
    }

    const resetState = () => {
        setState(initalState);
    }

    return[state, updateState, resetState];
}

export default UseShared;