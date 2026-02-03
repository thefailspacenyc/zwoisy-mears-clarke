
// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom"

// Components
import useFetch from "../useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Calendar = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/events?pLevel`)
    
    let events = [];

    const options = {
        month: "long",
        day: "numeric",
        year: "numeric"
      };


    if (data) {

        events = data.data

        events.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.Start_Date) - new Date(a.Start_Date);
        }); 

        console.log(events)
        
        return (
            <div className="bg-dark">
                <div className="page-container">
                    
                </div>
                <div className="page-container flex column space-between ai-center">
                    {/* <div className="hr-line-light"></div>
                    <h1 className="page-title-light">Calendar</h1> */}
                    <div className="calendar-container width-75 flex ai-flex-end">
                        {events.map((event)=>
                            <div className="flex flex-end width-75">
                                <h3 className="txt-align-right padding-right-10 width-25 margin-top-0"><em className="performance-title">{ event.Event_Title }</em></h3>
                                <div className="flex column width-75 primary-border-left padding-left-10">
                                    <p className="margin-top-0">{ event.Date_Written } | { event.Time }</p>
                                    <BlocksRenderer content={ event.Address } />
                                    <div>
                                        {event.Icons.map((icon) => 
                                            <img className="accessibility-icon" src={`${process.env.REACT_APP_BACKEND}${icon.Icon.url }`} />
                                        )}
                                    </div>
                                    <div > 
                                        <BlocksRenderer content={ event.Event_Description } />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>  
                
            </div>
                            
        )
    }
    
}

export default Calendar;