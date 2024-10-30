function ContactMe() {
    return ( 
        <>
        <div className="container " style={{marginBottom:70}}>
          
        <div className="row m-5 p-5  d-flex justify-content-center ">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIKnqSMs1ZS5yqP95dj12LFh31LG1oWNXqjImwdQSt6Dorkwth" className="img-fluid"></img>
            </div>
        <div className="col-md-6 ">
            <div className="row  "> <h4 className=" d-flex justify-content-center">Contact Me</h4></div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-2"><i class="fa-solid fa-phone"></i></div>
                <div className="col-md-4">+91 1234567890</div>
            </div>
            <div className="row  d-flex justify-content-center">
                <div className="col-md-2"><i class="fa-regular fa-envelope"></i></div>
                <div className="col-md-4">abcd@gmail.com</div>
            </div>
            <div className="row  d-flex justify-content-center">
                <div className="col-md-2"> <i class="fa-solid fa-location-dot"></i></div>
                <div className="col-md-4">ABCD01.Odisha</div>
            </div>
            <div className="row p-3 ">
               <h5 className="d-flex justify-content-center"> Connect with Me:</h5>
            </div>

            <div className="row  d-flex justify-content-center">
                <div className="col-md-1"><i class="fa-brands fa-facebook-f"></i></div>
                <div className="col-md-1"> <i class="fa-brands fa-instagram"></i></div>
                <div className="col-md-1"><i class="fa-brands fa-twitter"></i></div>
            </div>

</div>


</div>
        </div>
      
        </>  
     );
}

export default ContactMe;