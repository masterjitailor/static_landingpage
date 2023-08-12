import React from "react";

import footerPay from "../img/Group 221.png"
import "../style/header.css";
import vectorImg from "../img/Vector.png";
import EllipseImg from "../img/Ellipse 7.png";
import Ellipse20 from "../img/Ellipse 20.png";
import frameImg from "../img/Frame.png";
import img from "../img/logo-masterji 1.png";
import img1 from "../img/Frame (1).png"
import img2 from "../img/Group 205.png"
import img3 from "../img/Group 207.png"
import new1 from "../img/new.jpg";
import twitter from ".././img/twitter.png"
import instagram from "../img/Instagram.png";
import facebook from "../img/facebook.png";
import youtube from ".././img/youtube.png"

export default function Masterwork() {
  return (
    <>
      <div className="MainMaster" id="mainmaster">
        <div className="textMaster">
          <div className="ellipseBox">
            <img src={EllipseImg} alt=""></img>
            <h1 className="text1">
              How Masterji works <span>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>
            </h1>
          </div>

          <div className="container-fluid my-5">
            <div className="row justify-content-evenly">
              <div className="col-md-2">
                <div className=" justify-content-center masterMain1">
                  <img
                    className=" justify-content-center masterimg1"
                    src={img2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 style={{ marginLeft: "-8rem", marginTop: "-2rem" }}>1</h4>
                    <p className="card-text my-2 masterText1" >
                      Select garments and book a tailor for it’s stitching.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="masterMain2">
                  <img
                    className="card-img-top masterimg2"
                    src={img1}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 style={{ marginLeft: "-8rem", marginTop: "-2rem" }}>2</h4>
                    <p style={{ color: "var(--gray-2, #4F4F4F)" }}>Arera colony, Bhopal</p>
                    <p className="card-text masterText2">
                      <b>
                        A tailor will arrive at your doorstep</b>
                    </p>

                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="masterMain3">

                  <img
                    className="card-img-top masterimg3"
                    src={new1}
                    alt="Card image cap"
                  />

                  <div className="card-body">
                    <h4 style={{ marginLeft: "-8rem", marginTop: "-2rem" }}>3</h4>
                    <p className="card-text my-2 masterText3">
                      <b>
                        Our expert will take your measurements</b>
                    </p>

                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="masterMain4">
                  <img
                    className="card-img-top masterimg4"
                    src={img3}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 style={{ marginLeft: "-8rem", marginTop: "-2rem" }}>4</h4>
                    <p style={{ color: "var(--gray-2, #4F4F4F)" }}>Arera colony, Bhopal</p>
                    <p className="card-text masterText4">
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
              <div className=" justify-content-center cust1">
                <img
                  className=" justify-content-center custImg1"
                  src={Ellipse20}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text my-2" style={{ fontWeight: "300" }}>
                    <b>
                      “Some content. Some content. Some content. Some content.
                      Some content. Some content”</b>
                  </p>
                  <h6 className="card-title" style={{ fontWeight: "700" }} >  <b> Meghna Mishra </b></h6>
                  <p style={{ color: "var(--gray-2, #4F4F4F)" }}>Arera colony, Bhopal</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="cust2">
                <img
                  className="card-img-top custImg2"
                  src={Ellipse20}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text my-2" style={{ fontWeight: "300" }}>
                    <b>
                      “Some content. Some content. Some content. Some content.
                      Some content. Some content”</b>
                  </p>
                  <h6 className="card-title" style={{ fontWeight: "700" }}>  <b> Meghna Mishra </b></h6>
                  <p style={{ color: "var(--gray-2, #4F4F4F)" }}>Arera colony, Bhopal</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="cust3">
                <img
                  className="card-img-top custImg3"
                  src={Ellipse20}
                  alt="Card image cap"
                />

                <div className="card-body">
                  <p className="card-text my-2" style={{ fontWeight: "300" }} >
                    <b>
                      “Some content. Some content. Some content. Some content.
                      Some content. Some content”</b>
                  </p>
                  <h6 className="card-title">  <b> Meghna Mishra </b></h6>
                  <p style={{ color: "var(--gray-2, #4F4F4F)" }}>Arera colony, Bhopal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="aboutMaster" id="aboutMaster">
              <img src={EllipseImg}></img>
              <h1>About Masterji</h1>
            </div>
            <div className="paragraph">
              <p>Custom Stitching being the new trend, Masterji is just one tap close to get the kind of clothes you’ve always envisioned to wear. So, irrespective of your size, color, and gender, we can help you stand out with style and flaunt every attire you plan to carry</p>
              <br/><p>All you have to do is download the app, connect with us and then just see what our fashion and stitching experts can offer you. Our service is availabe in Bangalore and Bhopal</p>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
        </div>

        <div className="container" id='container'>
          <div className="row">
            <div className="aboutMaster" id="aboutMaster">
              <img src={EllipseImg}></img>
              <h1>Frequently asked <br /> questions</h1>
            </div>
            <div className="paragraph2">
              <h4>How does Masterji work?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse.
              </p>
            </div>
            <div className="paragraph2">
              <h4>Who is Masterji?</h4>
            </div>
            <div className="paragraph2">
              <h4>Who will come for measurement?</h4>
            </div>
          </div>
        </div>
        <div className="contactMain container" id = 'contactUs'>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center">
              <img src={frameImg} alt="" className="img-fluid mb-4" />
              <h1>Contact us</h1>
              <div className="inputForm" style={{ width: "20rem" }}>
                <input type="text" placeholder="We would love to hear from you." className="input1 form-control mb-3 " />
                <input type="email" placeholder="Enter your email Id" className="input2 form-control mb-3" />
                <button className="btn btn-warning btnWidth " >Submit</button>
              </div>
            </div>
          </div>
        </div>

      </div >

      <div className="footer">
        <img src={img} alt="Logo" className="footerLogo" />
        <div className="address">
          <h3>Address</h3>
          <p className="footData">36, 2nd Floor,<br /> Salarpuria Tower -1. 22 ,<br />Next to Forum Mall, Hosur Rd, <br />above Big Bazzar, <br />7th Block, koramangala, <br />Bengaluru, Karnataka 560095</p>
        </div>
        <div className="footPlayApp">
        <button class="linkbtn"><a href="https://www.instagram.com/masterjitailor/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" className="instImg" /></a></button>
        <button class="linkbtn"><a href="https://www.facebook.com/MasterJiOnlineTailor" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" className="faceImg" /></a></button>
        <button class="linkbtn"><a href="https://twitter.com/home?lang=en" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" className="twitterImg" /></a></button>
        <button class="linkbtn"><a href="https://www.youtube.com/watch?v=ZooZYlTGym4&t=7s" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="" className="youtubeImg" /></a></button>
        </div>
        <p className="footerAdd">Blogs <br /> Privacy Policy</p>
      </div>
    </>
  );
}
