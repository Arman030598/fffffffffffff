import React from "react";

export default  ({arr}) => {
    const ActualElem = arr.map((e,i)=>{
            return(
                <div>
                    {e.btn ?
                        <h1>{e.name} <span>{e.surName}</span></h1>
                        :null
                    }
                </div>
            )
        })
    return(
       <div>
           {ActualElem}
       </div>
    )
}