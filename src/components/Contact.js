import {Link} from 'react-router-dom'
const Contact=()=>{
return(
<>
<div className="container">
    <div className="row mb-4">
        <div className="col-md-6 d-flex align-items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/007/620/779/non_2x/male-customer-support-phone-operator-with-headset-working-in-call-center-concept-illustration-free-vector.jpg" className="img-fluid"></img>
        </div>
        <div className="col-md-6 ">
         <form>
              <div className="mb-3">
                <label for="exampleInputName1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  
                  className="form-control"
                  id="exampleInputName1"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputPhoneNumber1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number tel"
                  className="form-control"
                  id="exampleInputPhoneNumber1"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputMessage1" className="form-label">
                  Message
                </label>
               <textarea className="form-control" rows={4}></textarea>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Agree
                </label>
                
              </div>
              <div className="col mb-4">
                <Link to={'/contactme'} className="text-danger text-decoration-none">Contact Me?</Link>
                            </div>
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </form>
            
            </div>
    </div>


</div>

</>
)
}
export default Contact;