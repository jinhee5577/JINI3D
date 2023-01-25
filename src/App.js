/*eslint-disable*/ 
import React, { useEffect, useState, useRef, } from 'react';
import { Link, Route, Routes, } from 'react-router-dom';
import home_icon from './aesset/home_icon.png';   // img는 import해와서 넣어주어야 한다.
import { useSelector } from 'react-redux';
import Home from './Route/Home.js';
import Client from './Route/Client.js';
import RealEstate from './Route/RealEstate.js';
import Explanation from './Route/Explanation.js';
import './App.css';


function App() {
    let [userInfo, SETuserInfo] = useState({});
    let [modifyTab, SETmodifyTab] = useState(false);  
    let member = useSelector((state) => {return state.member;});  
    let explanTab = useSelector((state) => {return state.explanTab});
    
    const showProfile = () => { 
        const profile = localStorage.getItem('profile');
        const isVaild = JSON.parse(profile);
        
        if(isVaild){
          SETuserInfo(isVaild);
          SETmodifyTab(isVaild.status);
        } else {  }  
    };
  
    useEffect(() => {   
       showProfile();
       
    }, [member]);


    return (
      <div className="App">
        <header>
          <Link to='/' className='gnb'><img src={home_icon} alt='home'/></Link>
          <Link to='/client' className='gnb gnb2'>{modifyTab ? <UserGnbInfo userInfo={userInfo} /> : '고객 전용'}</Link>
        </header>

        { explanTab
          ? <Explanation />
          : null          
        }
        
        <Routes>
           <Route exact path='/' element={<Home />} />
           <Route path='/client' element={<Client />} />
           <Route path='/realEstate' element={<RealEstate />} />
        </Routes>
      </div>
    );
}


function UserGnbInfo ({ userInfo }){

   return(
     <div className='userGnb_info'>
       <aside>
         <img src={userInfo.userImg} alt='user_img'/>        
       </aside>
       <h4>{`${userInfo.name} 님`}</h4>
     </div>
   );
};

export default App;
