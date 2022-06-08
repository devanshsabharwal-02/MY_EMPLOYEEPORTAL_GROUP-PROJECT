import React from 'react';
//import './refsub.css';
import Navbar from "./Navbar.js";
import './PersonalInformationScreen.css'

var firstname = ""

const Information = () => {

    function loadLocalStorage() {
        document.getElementById("f-name").innerHTML = "First Name: " + localStorage.getItem("fname");
        document.getElementById("l-name").innerHTML = "Surname: " + localStorage.getItem("lname");
        document.getElementById("dob").innerHTML = "Date of Birth: " + localStorage.getItem("dob");
        document.getElementById("address").innerHTML = "Address: " + localStorage.getItem("address");
        document.getElementById("tel").innerHTML = "Phone Number: " + localStorage.getItem("phone");
        document.getElementById("email").innerHTML = "E-Mail Address: " + localStorage.getItem("email");
    }

    window.addEventListener('load', loadLocalStorage)

    function updateInformation() {
        var fname = document.getElementById("enter-fname").value;
        var lname = document.getElementById("enter-lname").value;
        var dob = document.getElementById("enter-dob").value;
        var address = document.getElementById("enter-address").value;
        var phone = document.getElementById("enter-phone").value;
        var email = document.getElementById("enter-email").value;
        var password = document.getElementById("enter-password").value;

        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("dob", dob);
        localStorage.setItem("address", address);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        document.getElementById("f-name").innerHTML = "First Name: " + localStorage.getItem("fname");
        document.getElementById("l-name").innerHTML = "Surname: " + localStorage.getItem("lname");
        document.getElementById("dob").innerHTML = "Date of Birth: " + localStorage.getItem("dob");
        document.getElementById("address").innerHTML = "Address: " + localStorage.getItem("address");
        document.getElementById("tel").innerHTML = "Phone Number: " + localStorage.getItem("phone");
        document.getElementById("email").innerHTML = "E-Mail Address: " + localStorage.getItem("email");




    }
    return (
        <><Navbar></Navbar><>
          <h1 class= "Pdheader"> Edit Personal Details</h1>
            <article class="form-personal-details">
                <label class="label-form"> First name
                    <input id="enter-fname" type="text" />
                </label>

                <label class="label-form"> Last name
                    <input id="enter-lname" type="text" />
                </label>

                <label class="label-form"> Date of Birth
                    <input id="enter-dob" type="date" />
                </label>

                <label class="label-form"> Address
                    <input id="enter-address" type="text" />
                </label>

                <label class="label-form"> Phone Number
                    <input id="enter-phone" type="number" />
                </label>

                <label class="label-form"> Email Address
                    <input id="enter-email" type="text" />
                </label>

                <label class="label-form"> CV
                    <input type="file" id="idpicker" accept=".pdf,.doc,.docx" />
                </label>

                <label class="label-form"> Password
                    <input id="enter-password" type="text" />
                </label>

                <button class="submit-button" onClick={updateInformation}>Update Information</button>

            </article>
            <article class="details">

                <h1 class="saveddetails"> Current Details</h1>
                <h1 id="f-name">First Name: </h1>
                <br></br>
                <h1 id="l-name">Last Name: </h1>
                <br></br>
                <h1 id="dob">Date of Birth: </h1>
                <br></br>
                <h1 id="address">Address: </h1>
                <br></br>
                <h1 id="tel">Phone Number: </h1>
                <br></br>
                <h1 id="email">E-Mail Address: </h1>
                <br></br>
            </article>
        </></>
  )
}

export { firstname };
export default Information;