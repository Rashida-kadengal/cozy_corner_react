

import Banner from "./Banner";
import Product from "./Product";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css'

function Home({products,offers}){
    const [searchParams]=useSearchParams();
    var searchText=searchParams.get("search");
    const filteredProductList = products.filter((p) => p.name.toLowerCase().includes(searchText?searchText.toLowerCase():""));
    console.log("offers:",offers)
    return (
      <>
      <Banner/>
      <h4 className="ms-4 mt-5">Offers</h4>
      <div className="offers  m-5">
      {
        offers.map((off)=>{
          return <div className="card d-inline-block m-3 rounded-5   " style={{width:250}} >
          <img src={off.image} className="card-img-top object-fit-cover image p-2 " alt={off.name} width={200} height={200}/>
          <div className="card-body">
            <h5 className="card-title" style={{
                height: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>{off.name}</h5>
            <p class="card-text" style={{
                height: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>{off.description}</p>
            <button className='btn btn-warning '><Link to={`/products/${off.id}`} className="text-white text-decoration-none">
      View Details
      </Link></button>
          </div>
        </div>
        })
       
      }
      </div>
      
      
  {
    filteredProductList.map((item)=>{
      return <div className="product cardprd" style={{ margin: 10 }}>
        <img src={item.image} alt={item.name} width={250} height={200}  className='image' />
        <h2 style={{
                  height: "40px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}>{item.name}</h2>
     <p>{item.description}</p>
     <button className='btn btn-warning '><Link to={`/products/${item.id}`} className="text-white text-decoration-none">
      View Details
      </Link></button>
   
    </div> 
    })
  }
  </>
    )
  }
export default Home;