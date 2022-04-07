const initialState = {category: 'all'}

const categories = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_CATEGORY':
         return {
            ...state,
            category: action.payload
         }
      default:
         return state
   }
}
export default categories