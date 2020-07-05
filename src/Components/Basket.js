import React from "react";
import MagCard from "./MagCard";

export default (props)=>{
    return(
        <div>
           <h2>Magazine</h2>
            <MagCard total = {props.total} magArr = {props.magArr} btnDel={props.btnDel}/>

        </div>
    )
}