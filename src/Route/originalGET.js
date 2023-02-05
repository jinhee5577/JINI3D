/*eslint-disable*/ 
import React, { useEffect, useState, useRef, } from 'react';
import { Link, } from 'react-router-dom';
import $ from 'jquery';
import all_locationDongCode from '../aesset/all_locationDongCode.json';
import xmlToJson from '../xmlToJson.js';
import { selectBOX } from '../aesset/data.js';
import { Spinner } from 'react-bootstrap';
import '../App.css';


function RealEstate () {
    let [apartTrading, SETapartTrading] = useState([]);   // 아파트 매매 실거래
    let [gugun, SETgugun] = useState('');  // 선택한 구/군.
    let [filter_loca, SETfilter_loca] = useState([]);
    let [selectSido, SETselectSido] = useState('');   // 선택한 시/도 담을 state.
    let [spinner, SETspinner] = useState(false);
    const postOBJ = {setState : SETselectSido};   // data.js에 있는 함수에 보내기위해, state변경함수를 object에 담았다.
   
    const textRead = () => { 
       const existenceDong = all_locationDongCode.filter((item, i) => { 
             return item.법정동코드.includes('존재');   // '존재만' 걸러낸다.
       }); 
     //  console.log(existenceDong);
       SETfilter_loca(existenceDong);   
    };

    const searchAPT = () => { 
       console.log(selectSido);
       SETspinner(true);
       const findDong = filter_loca.find((item) => {
             return item.법정동코드.includes(gugun) && item.법정동코드.includes(selectSido); 
       });  
       const DongCode = findDong.법정동코드.split(',')[0];
       const DongCode5 = Number(DongCode.slice(0, 5));   // 법정동코드 앞5자리까지 잘라주기.
       console.log(findDong);

       getXMLfromAPI(DongCode5);
    };
  
    const getXMLfromAPI = async (code) => {
        // 국토교통부 xml
        const baseurl = '/api';         
        const key ='Beovx/ZaM7OfGbg6iZ+06xFcFQSEdOQHVjYLQ6oaun/Nd7kcl9OdhAGIoHEtqq7z9ipubaB6aOYFYYW3OqHUzA==';        
        const params = {
            serviceKey : key,
            LAWD_CD : code,
            // numOfRows : 200,
            DEAL_YMD : 202205,
        };
        
        const queryString = new URLSearchParams(params).toString();
        const requrl = `${baseurl}?${queryString}`;
      
        try{
           const resData = await fetch(requrl); 
           const xmlString = await resData.text();  // 해석할 xml문자열.
           const XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');
           const {response} = xmlToJson(XmlNode);            
           const aptData = response?.body?.items?.item
         //  console.log(response);
           SETapartTrading(aptData);
           SETspinner(false);
        }catch(error){
           SETspinner(false);   
           console.log(error); 
        }

    };    

    const test = async () => {
        const response = await fetch('https://crazyplace.vercel.app/api/getMolitApi');
        const result = await response.json();
        console.log(result); 
    };

   //  $('document').ready(selectBOX);

    useEffect(() => { 
      //  getXMLfromAPI();
       selectBOX(postOBJ);  // 시/도/군/구 selectBOX 생성함수에 파라미터로 postOBJ를 넣어주고 호출.
       textRead();
      //  test();
    }, []);


    return (
      <div id="realEstate">
        <div className='apt_SearchWrap'>
            <h2>궁금한 아파트 실거래가 조회</h2>
            <div className='search_box'>
               <select name="sido1" id="sido1"></select>
               <select name="gugun1" id="gugun1" onChange={(e) => { SETgugun(e.target.value); }}></select>
               <button onClick={searchAPT}>조회</button>           
            </div>
        </div> 
        { spinner
          ? <Spinner animation="grow" variant="light" />
          : (<div className="apartTrading" >  
               { apartTrading.map((apt, i) => { 
                     let price = apt.거래금액;  // 금액문자열
                     let arr = [];       
                     for(let i = 0; i <price.length; i++){
                        if(price[i] !== ' '){ arr.push(price[i]); }
                     }
                     if(arr.length > 5){ 
                        arr.splice(-5,0, '억');
                        if(arr[3] == 0){ arr.splice(3, 1); }  // 천만자리가 0이면 제거함.   
                     }                               
                     price = arr.join('');

                     return (
                        <section key={i}>
                           <h3><span>{apt.법정동}</span> {apt.아파트} <span>{apt.층}층</span></h3>
                           <h2>{price}만원 <span>{apt.거래유형}</span></h2> 
                           <h4>건축년도 : {apt.건축년도}년 <span>{apt.전용면적}㎡</span></h4>                       
                        </section>
                     );
                 })
               }  
             </div> 
            )  
        }      
      </div>
    );
}


export default RealEstate;
