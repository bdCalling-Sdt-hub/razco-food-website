import React from 'react'
import SubCategory from "../SubCategory"

const page = ({params: { productId }}) => {
    return (
        <React.Fragment>
            <SubCategory  id={productId} />
        </React.Fragment>
    )
}

export default page