/*eslint-disable*/ 
import React, { useEffect, useState, useRef, } from 'react';
import { useDispatch } from 'react-redux'; 
import { memberInfo } from '../store.js'; 
import { flower } from '../aesset/data.js';
import icon2 from '../aesset/icon-2.png';
import { useNavigate, useFetcher, } from 'react-router-dom';
import '../App.css';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore.js';


function Client (){
    const imgRef = useRef();
    const clientRef = useRef();
    let [userName, SETuserName] = useState('');
    let [imgFile, SETimgFile] = useState('');
    let [imgParse, SETimgParse] = useState('');
    let [modifyTab, SETmodifyTab] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    function UserOBJ (img, name, status){
      this.userImg = img;
      this.name = name;
      this.status = status;
    };
    
    let loadImg = (e) => { 
        if(!e.target.files[0]){ 
           window.alert('이미지를 선택해 주세요.');  
           return;        
        }

        SETimgFile(imgFile => e.target.files[0]);        
        imgRef.current.setAttribute('src', URL.createObjectURL(e.target.files[0]));   // URL.createObjectURL()는 일회성이다. DOM이 사라지면 같이 사라진다. 
    };   
    
    let changeName = (e) => { 
        SETuserName(e.target.value);  
     //   console.log(e.target.value); 
    };
    
    let IMGsave = () => {   // 프로필 저장버튼 함수.      
        const reader = new FileReader();
        reader.onload = (e) => {  // reader객체가 불려졌을때 실행할 함수를 미리 지정해준다.  base64인코딩으로 전환하기.
            const imgdata = e.target.result;
            console.log(e.target);
            const userInfo = new UserOBJ(imgdata, userName, true);
         //   console.log(userInfo);
            localStorage.setItem('profile', JSON.stringify(userInfo));
            dispatch(memberInfo(userInfo));   // userInfo를 store로 보낸다.
            
            const profile = localStorage.getItem('profile');
            const isVaild = JSON.parse(profile);
            SETimgParse(isVaild);
            
            // if(!isVaild){  // undefined일때 
            //    window.alert('이미지를 선택해 주세요.');  
            //    return;    
            // } 
            imgRef.current.setAttribute('src', isVaild.userImg);
            window.alert('프로필 정보가 저장되었습니다!.');
            SETmodifyTab(true);
        }; 
 
        if(imgFile){
           reader.readAsDataURL(imgFile);   // readAsDataURL() 이게 비동기라서     
        } else {  // 들어온 이미지가 없을때.
            console.log('o');
            window.alert('이미지를 선택해 주세요.');  
            return;     
        }       
    };

    const showProfile = () => { 
         const profile = localStorage.getItem('profile');
         const isVaild = JSON.parse(profile);

         if(isVaild){   // localStorage에 저장된 정보가 있을때
            imgRef.current.setAttribute('src', isVaild.userImg);
            SETmodifyTab(isVaild.status);
            SETuserName(isVaild.name);
         } else {  }  
    };

    useEffect(() => {
      if(modifyTab){  // 프로필 수정완료 되면 별쏟아짐.
         flower(clientRef);  
      } else {  // 프로필 수정시에는 별제거됨.
          const pTag = document.querySelectorAll('p');
          if(pTag){ pTag.forEach((p) => { p.remove(); }) }                
      }      
    }, [modifyTab]);

    useEffect(() => { 
      showProfile();

    }, [imgParse]);

     
    return (
       <>   
         { modifyTab
           ? ( <button className='AssetsButton' onClick={() => { navigate('/realEstate'); }}>
                  <aside>
                  <img src={icon2} alt='부동산'/>
                  </aside>
                  <h3>고객전용 부동산조회</h3>
               </button> 
             )
           : null    
         }
          
         <div className='clientBox' ref={clientRef}>
            <h2>Profile</h2>
            <div className='profile'>
               <img ref={imgRef}/>   
            </div>  
            {
               !modifyTab  // 수정 Tab
               ? (<div className={`change_infoBox ${modifyTab == false && 'slide_up2'}`}>
                     <form method='post' encType="multipart/form-data">
                        <div className='file_button'>
                           <label htmlFor='chooseFile'>IMG</label> 
                        </div>
                        <input type='file' id='chooseFile' accept="image/*" name='chooseImg' onChange={loadImg} />  
                        
                        {/* <label htmlFor='userName'>이 름</label>      */}
                        <input type='text' id='userName' name='userName' onChange={changeName} placeholder='이름을 입력해 주세요.'/>     
                     </form> 
                     <button className='pf_save' onClick={IMGsave}>저장</button>           
                  </div>
               )   // 저장완료된 Tab
               : (<div className={`user_info ${modifyTab && 'slide_up'}`}>   
                     <h3>{ userName ? `${userName} 님` : '성함을 적어주세요!'}</h3>
                     <button onClick={() => { SETmodifyTab(false); }} >수정</button>
                  </div> 
               )  
            }
         </div>
       </> 
    );

}


export default Client;