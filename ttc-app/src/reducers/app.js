import {FETCH_DATA, DATA_SUCCESS, DATA_ERROR} from "../actions/app"

const initialState = {
       ttc_info: {
           staion_name:"",
            bus_info:[]
                } ,
       isLoading:false,
       error:"",
       showInfo:false



}//todo, find out initial state

export const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_DATA:
            console.log("FETCH_DATA RUNS")
            return{
                ...state,
                isLoading:true
            };
            case DATA_SUCCESS:
                console.log("DATA SUCCESS")
                console.log("PAYLOAD", action.payload)
                console.log("STATE", state)
                return{
                    ...state,
                    ttc_info:action.payload,
                    isLoading:false,
                    error:"",
                    showInfo:true
                }
            case DATA_ERROR:
                console.log("DATA_ERROR")
                return{
                    ...state,
                    isLoading: false
                } 
            default:
                return state       
    }
}