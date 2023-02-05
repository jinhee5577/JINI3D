/*eslint-disable*/ 
import React, { useEffect, useState, useRef, useSyncExternalStore, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nowIndex, showExplanTab, getIndex } from '../store.js';
import { style, LightSet, slide_data } from '../aesset/data.js';
import { Link, useFetcher, } from 'react-router-dom';
import '../App.css';


function Home (){  
    let [mainLight, SETmainLight] = useState(LightSet);  // 메인조명배열.
    const [styleColor, SETstyleColor] = useState(style); 
    let Index = useSelector((state) => {return state.Index;});  // 리덕스에서 가져온 번호
    // console.log(Index);
    

    return(
        <div id='Home'>           
          <div className='perspective_light'>
            <div className='mainLight'>
              { mainLight.map((item, i) => {
                   return (  // 조명.
                     <section key={i}>
                       { item.h3.map((num, c) => <h3 key={c} style={styleColor[Index]}></h3>) }
                     </section>
                   ); 
                })
              }
            </div> 
          </div>               
          <Slider3D slide_data={slide_data} radius={550} mainLight={mainLight} SETmainLight={SETmainLight}/>
          <div className='perspective_light perspective_light2'>
            <div className='mainLight'>
              { mainLight.map((item, i) => {
                  return (  // 조명.
                    <section key={i}>
                      { item.h3.map((num, c) => <h3 key={c} style={styleColor[Index]}></h3>) }
                    </section>
                  ); 
                })
              }
            </div> 
          </div>
        </div>
    );
}


function Slider3D ( {slide_data, radius, mainLight, SETmainLight} ){
    let [currentIndex, setCurrent] = useState(0);
    let [Radius, setRadius] = useState(radius);
    let len = slide_data.length || 0;
    let angle = 2 * Math.PI / len;
    let s3d = useRef();
    let Intval;
    let stateOn = true;
    const dispatch = useDispatch();
    const media_600 = matchMedia('screen and (max-width: 600px)');
    const media_1400 = matchMedia('screen and (max-width: 1400px)');
    const more_1400 = matchMedia('screen and (min-width: 1400px)');
    let index = 0;  // 다른컨포넌트에 보낼 번호 변수가 필요하다.

    let rotateInterval = () => {
        stateOn = true;
        if(stateOn){
           Intval = setInterval(() => {
              // setCurrent((currentIndex + 1) % slide_data.length);   // 이렇게 하면 처음 한번만 currentIndex가 증가되고 그다음 부터는 증가하질 않음, 따라서 slide또한 돌지않음. 
              setCurrent(currentIndex => (currentIndex + 1) % slide_data.length);   // 1회성이면 모를까 계속 진행되는거면 콜백으로 넘기는게 이전 state의 변경인걸 보장해준다.    
            //  console.log(currentIndex);
              index = (index + 1) % slide_data.length;
              // console.log(index);
              dispatch(nowIndex(index));  // 리덕스로 index번호를 보낸다.
           }, 2600);
        }
    };

    useEffect(() => { 
      rotateInterval();

      return () => { clearInterval(Intval); }
    }, []);

    useEffect(() => {  // 해당 미디어쿼리 마다 Radius조절.
      if(more_1400.matches){ setRadius(550); SETmainLight(LightSet); }
      if(media_1400.matches){ 
         setRadius(400); 
         const copyLight = [...mainLight];
         copyLight.pop();   // 조명기둥 하나 빼준다.
         SETmainLight(copyLight);
      }  
      if(media_600.matches){ setRadius(300); }

    }, [media_600.matches, media_1400.matches, more_1400.matches]);

    
    useEffect(() => {  // 3D이미지에 hover했을때 이벤트 
      s3d.current.addEventListener('mouseenter', () => { 
        stateOn = false;
        console.log('e');
        clearInterval(Intval);
      });
      s3d.current.addEventListener('mouseleave', rotateInterval);   
  
      return () => { clearInterval(Intval); }
    }, [stateOn]);


    return (
      <div className='total_wrap'>
        <Title currentIndex={currentIndex}/> 
        <div className="slider3D">
          <div className="slider__viewport" ref={s3d}  // 원기둥 이라고 생각하자.
            style={{
              transform: `translateZ(${-Radius}px) rotateY(${-currentIndex * angle}rad)`
            }}>
            {
              slide_data.map((data, i) => {
                const indexAngle = i * angle;
                const z = Math.cos(indexAngle) * Radius;
                const x = Math.sin(indexAngle) * Radius;
              //   console.log(Radius);
                return (
                    <div key={i} onClick={() => { dispatch(showExplanTab(true)); dispatch(getIndex(currentIndex)); }}
                      className={`slider__image ${i === currentIndex && 'slider__image_active'}`}                 
                      style={{
                        transform: `translateZ(${z}px) translateX(${x}px) rotateY(${indexAngle}rad)`
                      }}
                    >
                      <section>
                        <img src={data.img} alt='gameimg'/>  
                        <h2 className={i === currentIndex ? 'textOn' : null }>{data.gameName}</h2>
                        <p className={i === currentIndex ? 'textOn' : null }>{data.explan}</p>
                      </section>                      
                    </div>
                )
              })  
            }                  
          </div>
        </div>
        <SlideButton stateOn={stateOn} Intval={Intval} rotateInterval={rotateInterval} setCurrent={setCurrent}/>
      </div>
    );
}


function SlideButton ({ setCurrent, stateOn, Intval, rotateInterval }){ 
    const [button, SETbutton] = useState([0, 1, 2, 3, 4, 'https://jinhee5577.github.io/Jinhee_PF/']);

    useEffect(() => { 

      return () => {clearInterval(Intval);};
    }, []);
  
    return (
       <div className='slideButton'>
         <div className='button_3d'>
           { button.map((bt, i) => {
                if(i < 5){
                  return (<button key={bt} onClick={() => { 
                    stateOn = false;     
                    setCurrent(currentIndex => bt); 
                    clearInterval(Intval);                 
                  }}>{bt + 1}</button>); 
                } else {
                  return <a href={bt} key={i}>진희PF</a>  // 내 메인포토폴리오로 이동.
                }                 
             }) 
           }       
         </div>  
       </div>
    );
};


function Title ({ currentIndex }){
  const [company_ci, SETcompany_ci] = useState([
     'https://raw.githubusercontent.com/jinhee5577/allData/master/smileLOGO.png',
     'https://raw.githubusercontent.com/jinhee5577/allData/master/LINE%20Games%20CI_logo_white.png',
     'https://s1.pearlcdn.com/pearlabyss/contents/img/common/cm_bi_white.svg',
     'https://webofficial.kakaogames.com/live/official/image/mobile/20190424/img_logo.png',
     'https://www.krafton.com/wp-content/themes/krafton/assets/img/logo/logo-white.png'
  ]);


  return (
     <h2 className='company_ci'>
      { company_ci.map((ci, i) => {
          return (<img src={ci} key={i} className={i == currentIndex ? 'show' : null} alt='기업로고'/>); 
        })         
      }
     </h2>
  );
}


export default Home;