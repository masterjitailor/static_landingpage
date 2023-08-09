import React from "react";

import footerPay from "../img/Group 221.png"
import "../style/header.css";
import vectorImg from "../img/Vector.png";
import EllipseImg from "../img/Ellipse 7.png";
import Ellipse20 from "../img/Ellipse 20.png";
import frameImg from "../img/Frame.png";
import img from "../img/logo-masterji 1.png";

import img1 from "../img/Frame (1).png"
import img5 from "../img/Frame (2).png"
import img2 from "../img/Group 205.png"
import img3 from "../img/Group 207.png"
import new1 from "../img/new.jpg"

export default function Masterwork() {
  return (
    <>
      <div className="MainMaster">
        <div className="textMaster">
          <div className="ellipseBox">
            <img src={EllipseImg} alt="" className="elipi"></img>
            <h1 className="text1">
              How Masterji works _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
            </h1>
          </div>


          <div className="container-fluid my-5">
          <div className="row justify-content-evenly">
            <div className="col-md-2">
              <div  className=" justify-content-center"  style={{ width: "15rem" }} >
                <img
                  className=" justify-content-center"
                  style={{ width: "81px", height: "81px" }}
                  src={img1}
                  alt="Card image cap"
                />
                <div className="card-body">
                <h4 style={{marginLeft:"-8rem",marginTop:"-2rem"}}>1</h4>
                <p className="card-text my-2" style={{fontWeight:"bold",width:"10rem",textAlign:"left",marginLeft:"3rem"}} >
                 
                  Select garments and book a tailor for it’s stitching.
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="" style={{ width: "15rem" }}>
                <img
                  className="card-img-top"
                  src={img2}
                  style={{ width: "81px", height: "81px" }}
                  alt="Card image cap"
                />
                <div className="card-body">
                <h4 style={{marginLeft:"-8rem",marginTop:"-2rem"}}>2</h4>
                <p style={{color: "var(--gray-2, #4F4F4F)"}}>Arera colony, Bhopal</p>
                <p className="card-text " style={{fontWeight:"450",width:"10rem",textAlign:"left",marginLeft:"3rem", marginTop:"-1rem"}}>
                  <b>
                  A tailor will arrive at your doorstep</b>
                  </p>
              
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="" style={{ width: "15rem" }}>
               
                 <img
                  className="card-img-top"
                  style={{ width: "81px", height: "81px" }}
                  src={new1}
                  alt="Card image cap"
                />
                
                <div className="card-body">
                <h4 style={{marginLeft:"-8rem",marginTop:"-2rem"}}>3</h4>
                <p className="card-text my-2" style={{fontWeight:"450",width:"10rem",textAlign:"left",marginLeft:"3rem"}}>
                  <b>
                  Our expert will take your measurements</b>
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="" style={{ width: "15rem" }}>
                <img
                  className="card-img-top"
                  style={{ width: "81px", height: "81px" }}
                  src={img3}
                  alt="Card image cap"
                />
                <div className="card-body">
                <h4 style={{marginLeft:"-8rem",marginTop:"-2rem"}}>4</h4>
                <p style={{color: "var(--gray-2, #4F4F4F)"}}>Arera colony, Bhopal</p>
                  <p className="card-text  " style={{fontWeight:"450",width:"10rem",textAlign:"left",marginLeft:"3rem",marginTop:"-1rem"}} >
                  <b>
                  Stitched garment will be deilvered at your doorstep </b>
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>


        <div className="text2Master">
          <img src={vectorImg} alt="" className="vectorImg"></img>
          <h1 className="text2">
            Why our customers <br /> love us?
          </h1>
        </div>

        <div className="container my-5">
          <div className="row justify-content-evenly">
            <div className="col-md-2">
              <div  className=" justify-content-center"  style={{ width: "15rem" }} >
                <img
                  className=" justify-content-center"
                  style={{ width: "81px", height: "81px" }}
                  src={Ellipse20}
                  alt="Card image cap"
                />
                <div className="card-body">
                <p className="card-text my-2" style={{fontWeight:"300"}}>
                  <b>
                    “Some content. Some content. Some content. Some content.
                    Some content. Some content”</b>
                  </p>
                  <h6 className="card-title" style={{fontWeight:"700"}} >  <b> Meghna Mishra </b></h6>
                  <p style={{color: "var(--gray-2, #4F4F4F)"}}>Arera colony, Bhopal</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="" style={{ width: "15rem" }}>
                <img
                  className="card-img-top"
                  src={Ellipse20}
                  style={{ width: "81px", height: "81px" }}
                  alt="Card image cap"
                />
                <div className="card-body">
                <p className="card-text my-2" style={{fontWeight:"300"}}>
                  <b>
                    “Some content. Some content. Some content. Some content.
                    Some content. Some content”</b>
                  </p>
                  <h6 className="card-title" style={{fontWeight:"700"}}>  <b> Meghna Mishra </b></h6>
                  <p style={{color: "var(--gray-2, #4F4F4F)"}}>Arera colony, Bhopal</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="" style={{ width: "15rem" }}>
                <img
                  className="card-img-top"
                  style={{ width: "81px", height: "81px" }}
                  src={Ellipse20}
                  alt="Card image cap"
                />
                
                <div className="card-body">
                  <p className="card-text my-2" style={{fontWeight:"300"}} >
                  <b>
                    “Some content. Some content. Some content. Some content.
                    Some content. Some content”</b>
                  </p>
                  <h6 className="card-title">  <b> Meghna Mishra </b></h6>
                  <p style={{color: "var(--gray-2, #4F4F4F)"}}>Arera colony, Bhopal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className="container">
        <div className="row">
        <div className="aboutMaster">
        <img src={EllipseImg}></img>
            <h1>About Masterji</h1>
        </div>
        <div className="paragraph">
        <p>Custom Stitching being the new trend, Masterji is just one tap close to get the kind of clothes you’ve always envisioned to wear. So, irrespective of your size, color, and gender, we can help you stand out with style and flaunt every attire you plan to carry</p>
<p>All you have to do is download the app, connect with us and then just see what our fashion and stitching experts can offer you. Our service is availabe in Bangalore and Bhopal</p>
        </div>
        </div>
       </div>
       <div className="contactMain container">
  <div className="row align-items-center justify-content-center">
    <div className="col-md-6 text-center">
      <img src={frameImg} alt="" className="img-fluid mb-4" />
      <h1>Contact us</h1>
      <div className="inputForm" style={{width:"20rem"}}>
        <input type="text" placeholder="We would love to hear from you." className="input1 form-control mb-3 " />
        <input type="email" placeholder="Enter your email Id" className="input2 form-control mb-3" />
        <button className="btn btn-warning btnWidth " >Submit</button>
      </div>
    </div>
  </div>
</div>

      </div>

      <div className="footer">
        <img src={img} alt="Logo" className="footerLogo"/>
        <div>
            <h3>Address</h3>
            <p>2nd floor, Ayodhya Bypass Rd, Bhawanidham <br/> Phase-1, Chhatrapati Nagar, Narela Shankri,<br/>  Ayodhya Nagar, Bhopal, Madhya Pradesh <br/> 462041 9599569654, 9599569654</p>
        </div>
        <img src={footerPay} alt="Payment Img" className="footerPay"></img>
        <p className="footerAdd">Fashion consultants Find <br/>Fabric shops Blogs <br/> Privacy Policy</p>
      </div>
    </>
  );
}
