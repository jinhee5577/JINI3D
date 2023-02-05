/*eslint-disable*/ 
import React, { useEffect, useState, useRef, } from 'react';
import { youtube } from '../aesset/data.js';
import { useDispatch, useSelector } from 'react-redux';
import { nowIndex, showExplanTab } from '../store.js';
import '../App.css';


function Explanation(){
    const dispatch = useDispatch();
    const explanTab = useSelector((state) => {return state.explanTab;});
    const chooseYT = youtube[explanTab.ind];


    return (
      <div className='explanation' >
        <div className='relative'>  
          <span className={`line lt ${explanTab.switch && 'go_line'}`}></span>   
          <h2>{chooseYT.name}</h2>       
          {chooseYT.iframe}
          <p>{chooseYT.content}</p>
          <button onClick={() => { dispatch(showExplanTab(false)); }}  className='close'></button> 
          <span className={`line lb ${explanTab.switch && 'go_line'}`}></span>
        </div>                 
      </div>  
    );
}


export default Explanation;
