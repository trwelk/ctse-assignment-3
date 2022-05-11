import { combineReducers } from 'redux'
import { product } from '../slicers/ProductSlicer'

 const reducer = combineReducers({
 
    productSlice: product.reducer,
 
    
})

export default reducer