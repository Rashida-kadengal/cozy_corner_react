import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <>

            <div className="container   ">
                <div className="row  m-5 w-100 ">
                    
                    <div className="col-md-6 pt-5 ">
                    <img src="https://static.vecteezy.com/system/resources/previews/007/814/278/non_2x/discounts-sale-illustration-online-store-in-the-mobile-application-of-the-smartphone-tiny-people-choose-goods-at-low-prices-in-their-gadgets-free-vector.jpg" alt="Login" className="img-fluid" />
                   
                    </div>
                    <div className="col-md-6 mt-5 pt-5">
                    <div>
                            <h2>Welcome To Cozy-Corner</h2>
                            <p>Enter your credentials to log in</p>
                        </div>
                        <form>
                            <div className="mb-3 w-75">
                                <input type="text" className="form-control" id="username" placeholder="Username" />
                            </div>
                            <div className="mb-3 w-75">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className=" d-flex justify-content-end align-items-center ">
                            <div className="col">
                                <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                 </div>
                            </div>
                            <div className="col ">
                            <a href="#" className='text-decoration-none text-dark-emphasis'>Forgot Password?</a>
                            </div>
                            </div>
                           
                            <button className='btn btn-warning w-75'>Login</button>
                         
                        </form>
                        <div className="mt-3 ">
                        <Link to={'/signup'} className='text-decoration-none text-dark-emphasis'>I don't have have an account? <strong className='text-danger'>Sign up</strong></Link>
                        
                         </div>
                    </div>
                    </div>
                    </div>
                   
        </>

    )
}
export default Login