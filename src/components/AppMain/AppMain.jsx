import React from 'react';

// react router import
import { Route } from 'react-router-dom'; 

// styling import 
import './AppMain.scss'; 

// component imports 
import BoxCalculator from '../BoxCalculator/BoxCalculator'; 
import SavedBoxes from '../SavedBoxes/SavedBoxes'; 
import Products from '../Products/Products'; 
import VendorList from '../VendorList/VendorList'; 

const AppMain = () => {
    return ( 
        <div className="app-main-background">
            <Route path='/box-calculator' component={BoxCalculator} />
            <Route path='/saved-boxes' component={SavedBoxes} />
            <Route path='/products' component={Products} />
            <Route path='/vendor-list' component={VendorList} />
        </div>
     );
}
 
export default AppMain;