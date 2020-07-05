import React from "react";

export default ({arr,Delete,Add,Actual})=>{
    const element = (
        <>
            {arr.map( (e,i) => {
                return(
                    <div style={{border:'1px solid',padding:'50px'}} key={e.id}>
                        <h1>{e.name} </h1>
                        <h3>{e.surName} AMD</h3>
                        <p>{e.count} KG</p>
                        <button type="button" onClick={Actual.bind(this,i)} className={e.btn ? "btn btn-success" :"btn btn-outline-success"}>Actual</button>
                        <button className={'btn btn-primary'} onClick={Add.bind(this,e,i)}>Add</button>
                        <button onClick={Delete.bind(this,i,e)} className={'btn btn-danger'}> Delete</button>
                    </div>
                )
            })}
        </>
    )
    return(
        <>
            {element}
        </>

    )
}
