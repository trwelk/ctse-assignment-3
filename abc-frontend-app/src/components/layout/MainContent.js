import { Route, Routes } from 'react-router-dom';
import OrderHandling from '../../pages/OrderHandling';
import StockHandling from '../../pages/StockHandling';


function MainContent() {
  
  return (
        <Routes>
          <Route exact path="/stocks"  element={<StockHandling />} />
          <Route exact path="/orders"  element={<OrderHandling />} />
        
        </Routes>
  );
}

export default MainContent;
