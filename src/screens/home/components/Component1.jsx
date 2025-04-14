import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'

const Component1 = () => {
    const [searchText, setSearchText] = useState('');


    const data = [
        {
            image: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/13aecc48-e0ff-48d1-9d7e-808acceab24e.jpeg",
            itemName: "ABCS",
            price: "₹3176",
            discountedPrice: "₹239",
            qty: "450ml"
        },
        {
            image: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/13aecc48-e0ff-48d1-9d7e-808acceab24e.jpeg",
            itemName: "Vietnamese Cold Coffee",
            price: "₹31989",
            discountedPrice: "₹239",
            qty: "450ml"
        },
        {
            image: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/13aecc48-e0ff-48d1-9d7e-808acceab24e.jpeg",
            itemName: "Tata Salt",
            price: "₹78919",
            discountedPrice: "₹239",
            qty: "450ml"
        },
        {
            image: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/13aecc48-e0ff-48d1-9d7e-808acceab24e.jpeg",
            itemName: "Cold Coffee",
            price: "₹319",
            discountedPrice: "₹239",
            qty: "450ml"
        },
        {
            image: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/13aecc48-e0ff-48d1-9d7e-808acceab24e.jpeg",
            itemName: "Tea",
            price: "₹319",
            discountedPrice: "₹239",
            qty: "450ml"
        },
    ];

    // test.forEach(item => {
    //     console.log(item)
    // });

    // console.log(test.map(item => item + 1));

    // console.log(test.filter(item => {
    //     return item
    // }))

    // console.log(test.some(item => item === 1));


    const ProductCard = ({ item }) => {

        return <div className="slide">

            <div className="offers">
                <span>
                    76% Off
                </span>
                <img className="off" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.59.0/images/offer-tag.svg"
                    alt="" />
            </div>

            <img src={item.image} alt='' />

            <div className="additionalOffer">
                <img className="free" src="https://cdn.zeptonow.com/production/tr:w-120,ar-292-46,pr-true,f-auto,q-80/inventory/product/eb337250-2ec6-4535-bd64-eed2a6407293.png"
                    alt="" />
            </div>
            <h5 className="product-name">{item.itemName}</h5>
            <p className="ml">{item.qty}</p>
            <p className="price">{item.discountedPrice} <del>{item.price}</del></p>
            <button>Add to Cart</button>
        </div>
    }

    return (
        <div>
            <Navbar name={searchText} setName={setSearchText} />
            <div className="slides">

                <div className="slider" >

                    {
                        data
                            .filter((item) => item.itemName.toLowerCase().includes(searchText.toLowerCase()))
                            .map((item, i) => {
                                return <ProductCard
                                    key={i}
                                    item={item}
                                />
                            })
                    }

                </div>
            </div>

        </div>
    )
}

export default Component1