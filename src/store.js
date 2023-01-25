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
     initialState : false,
     reducers : {
        showExplanTab(state, action){
           return action.payload;
        }    
     }
});

export let { showExplanTab } = explanTab.actions;



export default configureStore({
    reducer : {
       member : member.reducer, 
       Index : Index.reducer, 
       explanTab : explanTab.reducer,      
    }    
}); 