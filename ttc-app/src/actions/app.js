import axios from "axios"

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";



export const fetchData = (station = "davisville") => {
    return dispatch => {
        dispatch({
            type:FETCH_DATA
        });
        setTimeout(()=>{
            axios //TODO ADD DISPATCHES
                .get(
                    `https://myttc.ca/${station}_station`
                )
                .then(res =>{
                    console.log("TROY: ACTIONS > AXIOS THEN RES", res)
                    const station_name = res.data.name
                    const bus_info = res.data.stops[0].routes.map(info =>{
                        const line_name = info.name;
                        const first_depart = info.stop_times[0].departure_time;
                        const second_depart = info.stop_times[1].departure_time;
                        const key = info.stop_times[0].departure_timestamp; //this may work?
                        return{
                            name:station_name,
                            line:line_name,
                            first:first_depart,
                            second:second_depart,
                            key:key
                        
                        }
                    })
                    const ttc_info = {
                        station_name:station_name,
                        bus_info
                    }
                    dispatch({type: DATA_SUCCESS, payload:ttc_info});
                })
                .catch(err =>{
                    console.log("TROY : ACTIONS : AXIOS THEN ERR", err)
                    dispatch({type: DATA_ERROR, payload:err})
                })
        }, 1500 )
    }
}