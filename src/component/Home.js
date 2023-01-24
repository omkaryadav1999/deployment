import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { DispatchAction, AddTocart, Filter, AddToPayment } from "../Redux/action/getData"
import { NavLink, useNavigate } from "react-router-dom"

const Home = () => {
    const dispatch = useDispatch() // dipstach is used for the trigged the action .
    const userData = useSelector((state) => state.PassData) //useSelector are used for to get the data from the store.
    const navigate = useNavigate()   // usenavigate is used for to navigate on the payment page. 

    // useEffect are used for to dispatch the action.when the browser first time load.
    useEffect(() => {

        // condition used for to check the user are log in or not
        if (sessionStorage.getItem("loginInfo")) {
            dispatch(DispatchAction())
        } else {
            alert("plase login")
        }
    }, [dispatch])


    //  addProduct function for to add the product in cart 
    const addProduct = (e, value) => {
        e.preventDefault()
        dispatch(AddTocart(value))
    }

    // function for to payment page
    const navigateTopaymentcomponent = (e, id) => {
        e.preventDefault()
        navigate("/PaymentGetway")
        dispatch(AddToPayment(id))
    }

    return (
        <div className="parentContainer">

            <div className="containerFilter">
                <h6><b>filter your Product</b></h6>
                <select onChange={(e) => dispatch(Filter(e.target.value))}>
                    <option value="select" >select</option>
                    <option value="men's" >mens</option>
                    <option value="women">women</option>
                    <option value="jewelery" >jewelery</option>
                </select>

            </div>


            <div className="container">
                {userData.map((value) => {
                    const { id, title, price, category, image } = value

                    return <NavLink to={`/SingleProduct/${id}`} key={id} style={{ textDecoration: "none", color: "black" }}>

                        <div className="sub_container"  >
                            <img src={image} alt="imge_shopping" className="img" />
                            <div>
                                <p><b>Title:</b>{title.slice(0, 25)}</p>
                            </div>
                            <div>
                                <p><b>category:</b>{category}</p>
                            </div>
                            <div>
                                <p><b>price:</b>{price}</p>
                            </div>
                            <div className="btn_container">
                                <button className="btn btn-outline-success" onClick={(e) => addProduct(e, value)}>addTocart</button>

                                {/* buy button */}
                                <button className="btn btn-outline-success" onClick={(e) => navigateTopaymentcomponent(e, id)}>buy Now</button>
                            </div>
                        </div>
                    </NavLink>
                })
                }
            </div>
        </div>
    )
}

export default Home
