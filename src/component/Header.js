import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Search } from "../Redux/action/getData"

function Header() {
    const cartData = useSelector((state) => state.UserCart)
    const dispatch = useDispatch()

    return (
        <>
            <div className="Hedder">
                <div className="productsercher">
                    <input type="text" placeholder="serach. .." onChange={(e) => dispatch(Search(e.target.value))} />
                </div>

                <h1>Local Mart</h1>
                <div>
                    <Link to="/Login">Login</Link>
                    <Link to="/Cart">
                        <div className="iconbox">
                            <span>{cartData.length}</span> <i className="bi bi-cart"></i>
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Header 