import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function PaymentGetway() {
    const ProductForPayment = useSelector((state) => state.PassData) // selected product for the payment.

    let price = ProductForPayment.map((item) => item.price)

    price = Number(price)  // convert the string into the number
    return (
        <>
            <Link to="/">Back</Link>
            <h1>PaymentGetway</h1>
            <div className="paymentcontainer">
                <div className="card-details">
                    <p>Pay using Credit or Debit card</p>

                    <div className="card-number space">
                        <label> Card Number </label>
                        <input
                            type="text"
                            className="card-number-field"
                            placeholder="###-###-###" />
                    </div>
                    <br />
                    <div className="date-number space">
                        <label> Expiry Date </label>
                        <input type="text" className="date-number-field"
                            placeholder="DD-MM-YY" />
                    </div>

                    <div className="cvv-number space">
                        <label> CVV number </label>
                        <input type="text" className="cvv-number-field"
                            placeholder="xxx" />
                    </div>
                    <div className="nameholder-number space">
                        <label> Card Holder name </label>
                        <input
                            type="text"
                            className="card-name-field"
                            placeholder="Enter your Name" />
                    </div>
                    <button type="submit"
                        className="submit-now-btn">
                        submit
                    </button>
                </div>

                <div className="paymentDetail">
                    <p>price of product : {price}Rs</p>
                    <p><b>Discount:</b>{price / 12}</p>
                    <p><b>Tax:</b>{price / 20}</p>
                </div>
            </div>
        </>
    )
}

export default PaymentGetway