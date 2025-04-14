import React from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {
    const { productId, shopId, thirdParams,
        fourthParams } = useParams()

    return (
        <div>
            Product Id = {productId}<br />
        </div>
    )
}

export default ProductDetail