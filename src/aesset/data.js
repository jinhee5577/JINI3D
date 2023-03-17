/*eslint-disable*/ 
import $ from 'jquery';


export const slide_data = [
    {         
      img : 'https://globalvx.dn.nexoncdn.co.kr/Web/upload/notice/230228/230228105738t.jpg',    
      gameName : '베일드 엑스퍼트',
      explan : 'PC슈팅 게임의 새로운 지평을 개척할 신규 TPS게임. 각자의 개성을 지닌 9명의 요원, 고유 스킬을 지닌 캐릭터를 선택해 승리를 위한 다양한 전략을 구사하며 사실적인 전투를 경험할 수 있습니다.'
    }, 
    {
      img : 'https://static.line.games/uwo/roadmap/image/d202301-1.jpg?v=omyxnz90sq',
      gameName : '대항해시대 오리진',
      explan : '우리가 바라던 바다 “대항해시대 Origin" 16세기, 세계가 아직 미지에 둘러싸였던 시대에서 펼쳐지는 이야기 전세계를 탐험했던 그때 그 시절 그 설렘을 다시 가슴에 품고 대항해시대로 모험을 떠나보세요'      
    },  
    {
      img : 'https://s1.pearlcdn.com/KR/Upload/WALLPAPER/857146e138520230111090106776.jpg',
      gameName : '검은사막',
      explan : '생동감 넘치는 그래픽과 사실감 있는 오디오를 구현하여 MMORPG의 한계를 시험하는 검은사막. 박진감 넘치는 전투와 공성전, 그리고 탐험과 무역, 낚시,조련,연금등 다양한 콘텐츠를 광활한 오픈월드에서 즐기세요.'      
    },  
    {
      img : 'https://event.game.daum.net/aw/pc/pre-assets/images/world_view_visual_3_1.jpg',      
      gameName : '아키에이지 워',
      explan : '아키에이지 워는 PC MMORPG 원작 ‘아키에이지’의 IP를 활용한 PC·모바일 크로스플랫폼 대작 MMORPG다. ‘아키에이지’ 대비 필드전 및 해상전 등 대규모전투 콘텐츠를 강조한 점이 특징입니다.'
    },  
    {
      img : 'https://raw.githubusercontent.com/jinhee5577/allData/master/cross.png',
      gameName : '크로스파이어X',
      explan : '크로스파이어X는 스마일게이트 엔터테인먼트에서 글로벌 최고의 기업들과 손을 잡고 선보이는 AAA급 콘솔 게임입니다.'
    },       
];


export const youtube = [
    {
      name : '베일드 엑스퍼트',
      iframe : <iframe className='youtube' src="https://www.youtube.com/embed/S5pkZed4SmY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      content : '요원들은 이에 맞서 보이드의 마이크로칩 <렙톤 시스템>을 파괴하거나 각 정부와 각기업의 요구에 따라 올바르게 개조하기 위해 렙톤의 지배 장악권을 두고 전 세계적인 글로벌 미션에 투입되었다.',
    }, 
    {
      name : '대항해시대 오리진',
      iframe : <iframe className='youtube' src="https://www.youtube.com/embed/QUohig63yfo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      content : '전세계를 항해하며 신항로를 개척하는 모험을 떠납니다. 유럽부터 아시아까지 각 나라의 도시를 탐험하고 구름으로 가려진 세계지도를 완성해 보세요.',
    },
    {
      name : '검은사막',
      iframe : <iframe className='youtube' src="https://www.youtube.com/embed/j-3lpc0hy4A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      content : '펄어비스 자체 개발엔진으로 구현된 아름다운 오픈월드를 만나보세요. 리얼함을 넘어 새로운 경험을 선사하는 극한의 그래픽이 모험가 여러분을 찾아갑니다.',
    },
    {
      name : '아키에이지 워',
      iframe : <iframe className='youtube' src="https://www.youtube.com/embed/aAFzthP0gbE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      content : '원대륙의 멸망과 대이주후, 각 종족은 뿔뿔이 흩어져 누이아 대륙(서대륙) 곳곳에 각자의 공동체를 설립했다. 긴 시간이 흐른 뒤 누이안 종족의 국가인 <이즈나 왕가>가 대륙의 패권을 쥐고 다른 국가와 종족 연합들을 복속시켰다.',
    },
    {
      name : '크로스파이어X',
      iframe : <iframe className='youtube' src="https://www.youtube.com/embed/rK12kTcCxn8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      content : '레메디 엔터테인먼트가 독자 개발한 ‘노스라이트’ 엔진을 통해 자연스럽게 실제플레이 화면과 연결되는 크로스파이어X 특유의 연출을 느껴보세요.',
    },
];


export const LightSet = [{h3 : [1,2,3,4,5,6]}, {h3 : [1,2,3,4,5,6]}, {h3 : [1,2,3,4,5,6]}];

export const style = [  // 불빛style
    {background: 'rgba(152, 102, 228, 0.35)', boxShadow: '0 0 10px 20px rgba(152, 102, 228, 0.2)'},
    {background: 'rgba(205, 223, 43, 0.35)', boxShadow: '0 0 10px 20px rgba(205, 223, 43, 0.2)'},
    {background: 'rgba(189, 223, 241, 0.35)', boxShadow: '0 0 10px 20px rgba(189, 223, 241, 0.2)'},
    {background: 'rgba(208, 86, 75, 0.35)', boxShadow: '0 0 10px 20px rgba(208, 86, 75, 0.2)'},
    {background: 'rgba(55, 148, 198, 0.35)', boxShadow: '0 0 10px 20px rgba(55, 148, 198, 0.2)'},
];


export const flower = (ref) => {  // 별빛 실행함수.
    let colors = ["#8cc3f7ab", "#cef38aaf"];
    let numBalls = 35;
    let balls = [];
 
    for (let i = 0; i < numBalls; i++) {
       let ball = document.createElement("p");
       ball.classList.add("ball");
       ball.style.background = colors[Math.floor(Math.random() * colors.length)];
       ball.style.left = `${Math.floor(Math.random() * 60)}vw`;
       ball.style.top = `${Math.floor(Math.random() * 60)}vh`;
       ball.style.transform = `scale(${Math.random()}) translate(-85%, -95%)`;
       ball.style.width = `${Math.random() / 1.7}em`;
       ball.style.height = ball.style.width;     
    
       balls.push(ball);
       ref.current.append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
          let to = {
                      x: Math.random() * (i % 2 === 0 ? -20 : 20),
                      y: Math.random() * 30,
                      z: Math.random() * (-70)
                };

          let anim = el.animate(
          [{ transform: "translate3d(0, 0, 0)", opacity: 0.7},
          { transform: `translate3d(${to.x}rem, ${to.y}rem, ${to.z}rem)`, opacity: 0 }],
             {
                duration: (Math.random() + 1) * 2500, // random duration
                // direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
             }
          );                  
    });           
}; 



export function selectBOX ({ setState }){   // 시/도/군/구 selectBOX 생성함수
   // selectBOX함수에서 인자로 받은 object를 구조분해할당 으로 state변경함수를 가져온다.
   // key이름을 setState로 지정했으니 컴포넌트쪽 전송할 오브젝트key도 setState로 맞추어 주어야한다.
   // 오브젝트key에 담아와서 state변경함수 기능을 그데로 사용할수있다.
    let area0 = ["시/도 선택","서울특별시","인천광역시","대전광역시","광주광역시","대구광역시","울산광역시","부산광역시","경기도","강원도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","제주특별자치도"];
    let area1 = ["구/군 선택","강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
    let area2 = ["구/군 선택","계양구","미추홀구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
    let area3 = ["구/군 선택","대덕구","동구","서구","유성구","중구"];
    let area4 = ["구/군 선택","광산구","남구","동구","북구","서구"];
    let area5 = ["구/군 선택","남구","달서구","동구","북구","서구","수성구","중구","달성군"];
    let area6 = ["구/군 선택","남구","동구","북구","중구","울주군"];
    let area7 = ["구/군 선택","강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
    let area8 = ["구/군 선택","고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
    let area9 = ["구/군 선택","강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
    let area10 = ["구/군 선택","제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
    let area11 = ["구/군 선택","계룡시","공주시","논산시","보령시","서산시","아산시","천안시","금산군","당진군","부여군","서천군","연기군","예산군","청양군","태안군","홍성군"];
    let area12 = ["구/군 선택","군산시","김제시","남원시","익산시","전주시","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"];
    let area13 = ["구/군 선택","광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
    let area14 = ["구/군 선택","경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
    let area15 = ["구/군 선택","거제시","김해시","마산시","밀양시","사천시","양산시","진주시","진해시","창원시","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"];
    let area16 = ["구/군 선택","서귀포시","제주시",];

    
    // 시/도 선택 박스 초기화
    $("#sido1").each(function(i, item) {
        if(i == 0){
           let $selsido = $(this);
           $.each(eval(area0), function() {
             $selsido.append("<option value='"+this+"'>"+this+"</option>");
           });
           $selsido.next().append("<option value=''>구/군 선택</option>");
        }        
    });
    
    // 시/도 선택시 구/군 설정
    $("select[name^=sido]").change(function(e) {
       let area = "area"+$("option",$(this)).index($("option:selected",$(this))); // 선택지역의 구군 Array
       let $gugun = $(this).next(); // 선택영역 군구 객체
       $("option",$gugun).remove(); // 구군 초기화
       
       setState(e.target.value); 
      // 이렇게 선택한 시/도를 넣어 변경함수를 실행하면, 컴포넌트 쪽에서는 state가 계획데로 잘변경되어있다!. 
       if(area == "area0")
          $gugun.append("<option value=''>구/군 선택</option>");
       else {
         $.each(eval(area), function() {
            $gugun.append("<option value='"+this+"'>"+this+"</option>");
         });        
       }
       
    });
      
}