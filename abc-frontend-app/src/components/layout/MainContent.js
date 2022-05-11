import { Route, Routes } from 'react-router-dom';
import StockHandling from '../../pages/StockHandling';


function MainContent() {
  
  return (
        <Routes>
          <Route exact path="/stocks"  element={<StockHandling />} />
        
        </Routes>
  );
}

export default MainContent;
