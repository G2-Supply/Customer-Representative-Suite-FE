import React from 'react';
import { NavLink } from 'react-router-dom'; 

// styling import
import './SideNav.scss'

const SideNav = () => {
    return ( 
        <div className="sidenav-wrapper">
            <p className="signout">Sign Out</p>
            <NavLink className='side-links' to='/box-calculator'>Box Calculator >>
                <p className="link-desc">
                    - An ineractive way to determine
                    the square footage of corrugated
                    boxes for pricing purposes.
                </p>
            </NavLink>
            <NavLink className='side-links' to='/saved-boxes'>My Saved Boxes >>
                <p className="link-desc">
                    - A list of vendor and contact info for
                    easy access.
                </p>
            </NavLink>
            <NavLink className='side-links' to='/products'>Products >>
                <p className="link-desc">
                    - A searchable list of all of the 
                    products we offer.
                </p>
            </NavLink>
            <NavLink className='side-links' to='/vendor-list'>Vendor List >>
                <p className="link-desc">
                    - A list of vendor and contact info for 
                    easy access.
                </p>
            </NavLink>
        </div>
     );
}
 
export default SideNav;