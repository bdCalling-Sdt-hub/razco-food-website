import React from 'react'
import SubCategoryProduct from "../SubCategoryProduct";

const page = ({params: {name}}) => {
    return (
        <React.Fragment>
            <SubCategoryProduct name={name} />
        </React.Fragment>
    )
}

export default page