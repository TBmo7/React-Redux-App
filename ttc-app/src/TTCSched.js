import React from "react"
import {connect} from "react-redux"

import {fetchData} from "./actions/app"
import "./Styles/TTCSched.css"

/* 
    nextDepart = map over data  get the next departure time for each line and destination
    Line = get information for just that line
    

*/

const TTCSched = props => {
    console.log("TTC PROPS",props)
    
    return(
        <div className = "ttcSched">
            {props.isLoading ?(
                <div>Retrieving Information</div>
            ):(
                <div>
                    <div>
                        <h1>TTC Transit Aid</h1>
                        <p>***currently just tested this with Davisville station, possible future expansion***</p>
                    </div>
                    <div className = "choose-form"
                    >
                        <label className = "station-pick">
                            Choose a station
                        </label>
                        <select id = "bus-station" name = "bus-station">
                            <option
                            value = "davisville">
                                Davisville
                            </option>
                            <option
                            value = "finch">
                                Finch
                            </option>
                            <option
                            value = "jane"></option>
                            </select>

                    </div>
            <button onClick ={() => props.fetchData()}>GET DATA</button>
                
            <div className = "busInfo">
                <h1>Station Name : {props.ttc_info.station_name}</h1>
                {props.ttc_info.bus_info.map(info=>{
                    
                    return(
                    <div >
                    <h3>Line: {info.line}</h3>
                    <ul>
                        <li>
                            Next departure: {info.first}
                        </li>
                        <li>
                            Following departure: {info.second}
                        </li>
                    </ul>
                    </div>
                    )
                })}
                </div>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        ttc_info: state.ttc_info,
        isLoading: state.isLoading,
        error: state.error,
        showInfo: state.showInfo

    };
};

export default connect(
    mapStateToProps,
    {fetchData}
)(TTCSched)