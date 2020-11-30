const zipcodeSubmitReducer = (state = '' , action) => {
    switch(action.type) {
        case `SET_ZIPCODE`:
            return action.payload
        default:
            return state
    }

}
export default zipcodeSubmitReducer