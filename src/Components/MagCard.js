import React from "react";

export default ({magArr,btnDel,total})=>{
    var total = 0
    var tot = magArr.map((e,i) =>{
        return <p>
            {total += e.magPrice}
        </p>
    })
    var elem = <div>
        {magArr.map((e,i)=>{
            console.log(e.magPrice)
            return(
                <>
                    <h1 key={e.id}>{e.name}</h1>
                    <h3>{e.magPrice} AMD</h3>
                    <button className={'btn btn-outline-danger'}> - </button>
                    <span>{e.magCount} KG</span>
                    <button className={'btn btn-outline-success'}> + </button><br/>
                    <button className={'btn btn-danger'} onClick={btnDel.bind(this,i,e)}>Delete</button>
                </>

            )
        })}
    </div>

    return(

        <>
           {elem}
            <h1>Total Price :{total}</h1>
        </>
    )
}