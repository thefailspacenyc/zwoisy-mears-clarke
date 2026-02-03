
// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom"

// Components
import useFetch from "../useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const ProjectList = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/events&populate=deep`)
    
    let events = [];

    const options = {
        month: "long",
        day: "numeric",
        year: "numeric"
      };


    if (data) {

        events = data.data
        console.log(events)
        
        return (
            <div>
                
            </div>                  
        )
    }
    
}

export default ProjectList;