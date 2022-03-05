import React, { useState } from 'react'
import '../assets/SearchHistory.css';
import Moment from 'react-moment'

function SearchHistory(props) {

    return (
        <div className="container-history">
            <div className="history-header">
                <label className="history-title">Search History</label>
            </div>
            <div className="history-body">
                {props.history.length !== 0 ? props.history?.map((item, index) => {
                    return (
                        <div key={index} className="row-history">
                            <label  className="history-place">{index + 1}. {item.place}</label>
                            <Moment unix format="hh:mm:ss A" className="history-datetime">{item.datetime / 1000}</Moment>
                            <button className="history-btn btn-search" onClick={() => props.searchWeather(item.place)}></button>
                            <button className="history-btn btn-delete" onClick={() => props.deleteHistory(item.place)}></button>
                        </div>
                    )
                }) : <div className="row-history" >
                    <label className="noRecord">No record</label>
                </div>
                }
            </div>
        </div>
    );
}

export default SearchHistory;
