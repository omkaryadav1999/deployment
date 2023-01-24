import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {

        sessionStorage.setItem("loginInfo", JSON.stringify({ email, password })) //sessionStorage used for the store the login info.
    }, [email, password])

    return (
        <div>
            <Link to="/">Back</Link>
            <section className=" text-center text-lg-start">

                <div className="card mb-3">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-lg-4 d-none d-lg-flex">
                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
                                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
                        </div>
                        <div className="col-lg-8">
                            <div className="card-body py-5 px-md-5">

                                <form>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form2Example1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                        <label className="form-label" >Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form2Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                        <label className="form-label" >Password</label>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
                                                <label className="form-check-label"> Remember me </label>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>

                                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={() => Navigate("/")}>Sign in</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login