import React from "react"
import Header from "./component/Header"
import Home from "./component/Home"
import { Route, Routes } from "react-router-dom"
import Cart from "./component/cart"
import SingleProduct from "./component/SingleProduct"
import Login from "./component/Login"
import PaymentGetway from "./component/Paymentgetway"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/SingleProduct/:id" element={<SingleProduct />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/PaymentGetway" element={<PaymentGetway />} />
            </Routes>
        </div>
    )
}

export default App