import { combineReducers } from 'redux'
import { product } from '../slicers/ProductSlicer'
import { order } from '../slicers/OrderSlicer'

 const reducer = combineReducers({
 
    productSlice: product.reducer,
    OrderSlice: order.reducer
 
    
})

export default reducer