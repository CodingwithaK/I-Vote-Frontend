
  
const candidateReducer = (state = [], action) => {
    switch(action.type) {
        // case `LOADING_CANDIDATES`:
        //     return {
        //         ...state,
        //         candidates: [...state.candidates],
        //         loading: true
        //     }
        case `ADD_CANDIDATES`:
            return  action.payload
                // loading: false
            
        default:
            return state
    }

}
export default candidateReducer