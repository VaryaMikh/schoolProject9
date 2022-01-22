import {createGlobalState} from "react-hooks-global-state";

const { useGlobalState, getGlobalState } = createGlobalState({
    authenticated: false,
    email:''
});

export {useGlobalState, getGlobalState}