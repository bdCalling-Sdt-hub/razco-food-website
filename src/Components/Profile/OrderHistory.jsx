import React from 'react'
import CommonHeading from './CommonHeading'

const OrderHistory = ({setTab}) => {
    return (
        <div>
            <CommonHeading title={"Order History"}/>
            <button onClick={()=>setTab("details")}></button>
        </div>
    )
}

export default OrderHistory