import React from "react";

export default (props)=>{
    return(
        <div>
            <input value={props.val1}
                   className={`${props.clas1} inp`}
                   onChange={props.ChangeOne}
                   type="text"
                   placeholder={'Fruits Name'}/>

            <input value={props.val2}
                   onChange={props.ChangeTwo}
                   className={props.clas2}
                   type="text"
                   placeholder={'Price'}/>
            <input type="text"
                    value={props.val3}
                   onChange={props.Changetree}
                   placeholder={'Count'}
            />

            <button
                className={'btn btn-success'}
                onClick={props.Click}
                disabled={props.val1.trim() && props.val2.trim() && props.val3.trim() ? false : true}>Click</button>
        </div>
    )
}