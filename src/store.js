import { configureStore, createSlice } from '@reduxjs/toolkit';


const member = createSlice({  // Slice는 하나의 state를 뜻함.
    name : 'member',     //  state이름
    initialState : {},   //  state초기값
    reducers : {    // state변경함수들 이곳에
        memberInfo(state, action){
            return action.payload;
        }, 
    }
});

export let { memberInfo } = member.actions;   //  member.actions안에 state변경함수들이 담긴 객체이다.


const Index = createSlice({
    name : 'Index',
    initialState : 0,
    reducers : {
       nowIndex(state, action){
          return action.payload;
       }
    }
});

export let { nowIndex } = Index.actions;


const explanTab = createSlice({   // Explanation컴포넌트 보일 상태.
     name : 'explanTab',
     initialState : {switch : false, ind : 0},
     reducers : {
        showExplanTab(state, action){  // switch병경.
           state.switch = action.payload;
        },  
        
        getIndex(state, action){  // 선택한 ind번호 가져온다.
           state.ind = action.payload;     
        }
     }
});

export let { showExplanTab, getIndex } = explanTab.actions;



export default configureStore({
    reducer : {
       member : member.reducer, 
       Index : Index.reducer, 
       explanTab : explanTab.reducer,      
    }    
}); 