import React from 'react';
import '../../../App.css';
import cashinPNG from '../../../black/img/icons/cashin.png';
import Footer from '../../layouts/footer';
import NavBar from '../../layouts/navbars/CustomerNavbar';
import Sidebar from '../../layouts/sidebar/customersSidebar';
const addMoney = (props) => {
    return (
        
        < div className ="wrapper">
            <Sidebar/>
            <div className="main-panel ps">
                <NavBar/>
                <div className = "content">

                </div>
                <Footer/>
            </div>
          
        </div>
         
    );
};

export default addMoney;