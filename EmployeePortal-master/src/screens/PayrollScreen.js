import React, { useState } from 'react';
import './PayrollScreen.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ViewShifts.css';
import Navbar from "./Navbar.js";
import logo from './FDMLOGOwithoutbackground.png';
import jsPDF from 'jspdf';

const Home = () => {

    function pdfGenerate() {

        var arrayfname = (document.getElementById("f-name").innerHTML).split(":");
        var arraylname = (document.getElementById("l-name").innerHTML).split(":");
        var arraydob = (document.getElementById("dob").innerHTML).split(":");
        var arrayaddress = (document.getElementById("address").innerHTML).split(":");
        var arraytel = (document.getElementById("tel").innerHTML).split(":");
        var arrayemail = (document.getElementById("email").innerHTML).split(":");
        var arraytime = (document.getElementById("time-period").innerHTML).split(":");
        var arraypay = (document.getElementById("pay").innerHTML).split(":");

        console.log(arraypay[1]);

        if ((arraypay[1] === " ") || (arrayfname[1] === " ") || (arraylname[1] === " ")
            || (arraydob[1] === " ") || (arrayaddress[1] === " ") || (arraytel[1] === " ")
            || (arrayemail[1] === " ") || (arraytime[1] === " ")) {
            alert("A value required is not present. Remember to fill out 'Personal Information' and select a date period.")
        } else {
            var doc = new jsPDF("landscape", "px", "a4", "false");
            doc.addImage(logo, 'PNG', 0, 10, 340, 100)
            doc.text(document.getElementById("f-name").innerHTML, 10, 150);
            doc.text(document.getElementById("l-name").innerHTML, 10, 165);
            doc.text(document.getElementById("dob").innerHTML, 10, 180);
            doc.text(document.getElementById("address").innerHTML, 10, 195);
            doc.text(document.getElementById("tel").innerHTML, 10, 210);
            doc.text(document.getElementById("email").innerHTML, 10, 225);
            doc.text(document.getElementById("time-period").innerHTML, 10, 240);
            doc.text(document.getElementById("pay").innerHTML, 10, 255);
            doc.save("Pay-Slip.pdf");
        }


        console.log(arrayfname);
    }

    const [date, setDate] = useState(new Date());

    function loadLocalStorage() {
        document.getElementById("f-name").innerHTML = "First Name: " + localStorage.getItem("fname");
        document.getElementById("l-name").innerHTML = "Surname: " + localStorage.getItem("lname");
        document.getElementById("dob").innerHTML = "Date of Birth: " + localStorage.getItem("dob");
        document.getElementById("address").innerHTML = "Address: " + localStorage.getItem("address");
        document.getElementById("tel").innerHTML = "Phone Number: " + localStorage.getItem("phone");
        document.getElementById("email").innerHTML = "E-Mail Address: " + localStorage.getItem("email");
    }

    window.addEventListener('load', loadLocalStorage)

    const onChange = date => {
        setDate(date);
        var dateStart = (date[0].toString()).split(" ");
        var dateEnd = (date[1].toString()).split(" ");
        var shortDateStart = [];
        var shortDateEnd = [];

        shortDateStart.push(dateStart[2])

        if (dateStart[1] == "Jan") {
            shortDateStart.push("01");
        } else if (dateStart[1] == "Feb") {
            shortDateStart.push("02");
        } else if (dateStart[1] == "Mar") {
            shortDateStart.push("03");
        } else if (dateStart[1] == "Apr") {
            shortDateStart.push("04");
        } else if (dateStart[1] == "May") {
            shortDateStart.push("05");
        } else if (dateStart[1] == "Jun") {
            shortDateStart.push("06");
        } else if (dateStart[1] == "Jul") {
            shortDateStart.push("07");
        } else if (dateStart[1] == "Aug") {
            shortDateStart.push("08");
        } else if (dateStart[1] == "Sep") {
            shortDateStart.push("09");
        } else if (dateStart[1] == "Oct") {
            shortDateStart.push("10");
        } else if (dateStart[1] == "Nov") {
            shortDateStart.push("11");
        } else if (dateStart[1] == "Dec") {
            shortDateStart.push("12");
        }

        shortDateStart.push(dateStart[3])

        shortDateEnd.push(dateEnd[2])

        if (dateStart[1] == "Jan") {
            shortDateEnd.push("01");
        } else if (dateEnd[1] == "Feb") {
            shortDateEnd.push("02");
        } else if (dateEnd[1] == "Mar") {
            shortDateEnd.push("03");
        } else if (dateEnd[1] == "Apr") {
            shortDateEnd.push("04");
        } else if (dateEnd[1] == "May") {
            shortDateEnd.push("05");
        } else if (dateEnd[1] == "Jun") {
            shortDateEnd.push("06");
        } else if (dateEnd[1] == "Jul") {
            shortDateEnd.push("07");
        } else if (dateEnd[1] == "Aug") {
            shortDateEnd.push("08");
        } else if (dateEnd[1] == "Sep") {
            shortDateEnd.push("09");
        } else if (dateEnd[1] == "Oct") {
            shortDateEnd.push("10");
        } else if (dateEnd[1] == "Nov") {
            shortDateEnd.push("11");
        } else if (dateEnd[1] == "Dec") {
            shortDateEnd.push("12");
        }

        shortDateEnd.push(dateEnd[3])

        console.log(shortDateStart);
        console.log(shortDateEnd);

        document.getElementById("time-period").innerHTML = "Time Period Selected: " + shortDateStart[0] +
            "/" + shortDateStart[1] + "/" + shortDateStart[2] + " - " + shortDateEnd[0] + "/" +
            shortDateEnd[1] + "/" + shortDateEnd[2];

        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date[1].getTime() - date[0].getTime();
        const diffInDays = Math.round(diffInTime / oneDay);

        var weekends = Math.floor((date[0].getDay() + diffInDays) / 7);
        weekends = 2 * weekends + (date[0].getDay() == 0) - (date[1].getDay() == 6);

        var paidDays = diffInDays - weekends;
        var hoursPerDay = 8;
        var hourlySalary = 15;
        var paylog = (hoursPerDay * paidDays) * hourlySalary;

        document.getElementById("pay").innerHTML = "Pay: " + "&#163;" + paylog;

        document.getElementById("f-name").innerHTML = "First Name: " + localStorage.getItem("fname");
        document.getElementById("l-name").innerHTML = "Surname: " + localStorage.getItem("lname");
        document.getElementById("dob").innerHTML = "Date of Birth: " + localStorage.getItem("dob");
        document.getElementById("address").innerHTML = "Address: " + localStorage.getItem("address");
        document.getElementById("tel").innerHTML = "Phone Number: " + localStorage.getItem("phone");
        document.getElementById("email").innerHTML = "E-Mail Address: " + localStorage.getItem("email");

    }
    return (
        <><body>
        </body><div>
                <Navbar></Navbar>
                <h1 class="payslipheader"> Payslips</h1>

               
                <div class="calendar-test-1">
                    <Calendar onChange={onChange} value={date} selectRange={true} />
                </div>
                
                <article class="values">
                    <h1 id="f-name">First Name: </h1>
                    <br></br>
                    <h1 id="l-name">Surname: </h1>
                    <br></br>
                    <h1 id="dob">Date of Birth: </h1>
                    <br></br>
                    <h1 id="address">Address: </h1>
                    <br></br>
                    <h1 id="tel">Phone Number: </h1>
                    <br></br>
                    <h1 id="email">E-Mail Address: </h1>
                    <br></br>
                    <h1 id="time-period">Time Period Selected: </h1>
                    <br></br>
                    <h1 id="pay" >Pay: </h1>
                    <button onClick={pdfGenerate} class="download-playslips">Download Payslip</button>
                </article>
                <p></p>
            </div></>
    );

}
 
export default Home;
