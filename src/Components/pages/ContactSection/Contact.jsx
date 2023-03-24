import React, { useState } from "react";
import "./Contact.css";
export const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, message } = userData;

    if (firstName && lastName && phone && email && message) {
      const res = fetch(
        "https://andyproject-48f96-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill all the data");
    }
  };

  return (
    <>
      <div
        className=" contactus-section d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        {/*  */}
        <div>
          <span className="touch">Let’s Keep In Touch</span>
        </div>
        <hr />
        {/*  */}
        <form
          method="POST"
          className="form"
          style={{
            backgroundColor: "rgba(250,250,250,0.1)",
            padding: "30px",
            marginTop: "4rem",
          }}
        >
          <div className="row">
            <div className="col-12 col-lg-6 contact-input-feild">
              <input
                type="text"
                name="firstName"
                id="myform"
                className="form-control"
                placeholder="First Name"
                value={userData.firstName}
                onChange={postUserData}
              />
            </div>
            <div className="col-12 col-lg-6 contact-input-feild">
              <input
                type="text"
                name="lastName"
                id="myform"
                className="form-control"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={postUserData}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 contact-input-feild">
              <input
                type="number"
                name="phone"
                id="myform"
                className="form-control"
                placeholder="Phone Number "
                value={userData.phone}
                onChange={postUserData}
              />
            </div>
            <div className="col-12 col-lg-6 contact-input-feild">
              <input
                type="email"
                name="email"
                id="myform"
                className="form-control"
                placeholder="Email ID"
                value={userData.email}
                onChange={postUserData}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 ">
              <textarea
                type="text"
                name="message"
                id="myform"
                className="form-control"
                placeholder="Enter Your Message..."
                value={userData.message}
                onChange={postUserData}
                style={{ height: "30vh" }}
              />
            </div>
          </div>

          <div className="form-text ">
            <button className="btn " type="submit" onClick={submitData}>
              SEND MESSAGE NOW
            </button>
          </div>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.39107485235!2d73.72107856029987!3d19.990944012930758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679313690679!5m2!1sen!2sin"
          width="70%"
          height="400"
          style={{ border: 0, padding: "30px", marginTop: "2rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};
