
const reducer =(state,action)=>{
    
    switch (action.type) {
        case "GET_LOADING": return {...state,isloading:true}
        case "GET_DATA":return {...state,hits:action.payload.hits,nbPages:action.payload.nbPages,isloading:false,page:action.payload.page}
        case"SERCHDATA":return{...state,query:action.payload}
        case "REMOVEITEM":return{...state,hits:state.hits.filter((current)=>current.objectID !== action.payload)}
        case "NEXTPAGE":
        let nubpage= state.page+1;
        if(nubpage>=state.nbPages){
                nubpage=0;
        }    
        return{...state,page:nubpage}
        case"PREVPAGE":
        let prepage=state.page-1;
        if(prepage<0){
            prepage=0
        }
        
        return {...state,page:prepage}
        default:return state;}
    }

export default reducer;