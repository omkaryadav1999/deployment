import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AddTocart } from '../Redux/action/getData'
import { Link } from "react-router-dom"

// component for single Product.

const SingleProduct = () => {
    
    const selecter = useSelector((state) => state.PassData)

    const dispatch = useDispatch()
    
    const [userData, setUserData] = useState([])  // useState is used for to store the selected product.

    const data = useParams() //for to get the data from the query 

    useEffect(() => {
        // filter used for to get the same product from the selector that match the id

        const check = selecter.filter((value) => {
            return value.id === Number(data.id)
        })
        setUserData(check)

    }, [])


    console.log(userData)
    return (
        <div>
            {/* link are used for to navigate to Home page */}
            <Link to="/">Back</Link>
            <h1>Product Info...</h1>
            {userData.map((value) => {

                const { image, category, price, title, id, description } = value

                return <div className='selectedProduct' key={id}>
                    <img src={image} alt="imge_shopping" className="img" />
                    <div>
                        <p><b>Title:</b>{title}</p>
                    </div>
                    <div>
                        <p><b>Description:</b>{description}</p>
                    </div>
                    <div>
                        <p><b>category:</b>{category}</p>
                    </div>
                    <div>
                        <p><b>price:</b>{price}</p>
                    </div>
                    <div>
                        <button className="btn btn-outline-success" onClick={() => dispatch(AddTocart(value))}>addTocart</button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default SingleProduct
