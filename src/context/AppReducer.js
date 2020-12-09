
//localStorage.setItem("cartItems", JSON.stringify(cartItems));
// localStorage.clear("cartItems");
//cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") 
export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_CAT':
            return {
                //return all item has id differ to deteled id
                cats: state.cats.filter(cat => {
                    return cat.id !== action.payload
                })


            }

        case 'ADD_CAT':
            // console.log('payload', action.payload)
            // console.log('state', state.cats)
            return {
                //clone and add new item to array
                cats: [action.payload, ...state.cats]
            }
        case 'EDIT_CAT':
            const updateCat = action.payload;

            // console.log(updateCat);
            //map through all item
            //if same id return updated id
            //else return item which doesn't change
            const updateCats = state.cats.map(cat => {
                if (cat.id === updateCat.id) {
                    return updateCat;
                }
                return cat;
            })

            return {
                cats: updateCats
            }

        default:
            return state;
    }
}