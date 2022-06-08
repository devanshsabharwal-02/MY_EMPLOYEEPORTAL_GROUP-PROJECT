import React, { useState, useEffect } from 'react';
import './leavescreen.css';
import Navbar from "./Navbar.js";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from "firebase/database";


const Home = () => {

    const [date, setDate] = useState(new Date());

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

        var shortDateStart = (shortDateStart[0] + "-" + shortDateStart[1] + "-" + shortDateStart[2]);
        var shortDateEnd = (shortDateEnd[0] + "-" + shortDateEnd[1] + "-" + shortDateEnd[2]);

        setdateLeaveStart(shortDateStart);
        setdateLeaveEnd(shortDateEnd);

    }

    const firebaseConfig = {
        apiKey: "AIzaSyA0yRpIMOAQsaShGUmfKhjpb_Cu2lgq9Pg",
        authDomain: "employeeportal-3c880.firebaseapp.com",
        projectId: "employeeportal-3c880",
        storageBucket: "employeeportal-3c880.appspot.com",
        messagingSenderId: "555593712718",
        appId: "1:555593712718:web:03380e84e54f3eb7ce6f1f"
    };

    firebase.initializeApp(firebaseConfig);
    var database = firebase.database;

    const [name, setName] = useState();
    const [reasonForLeave, setreasonForLeave] = useState();
    const [dateLeaveStart, setdateLeaveStart] = useState();
    const [dateLeaveEnd, setdateLeaveEnd] = useState();

    const postToDatabase = () => {

        const db = getDatabase();
        set(ref(db, "leave-request "+ localStorage.getItem("username")), {
            name: name,
            reasonForLeave: reasonForLeave,
            dateLeaveStart: dateLeaveStart,
            dateLeaveEnd: dateLeaveEnd
        });

        alert("Expense Request has been Submitted");


    }

    return (
        <><Navbar></Navbar><>
         <div class="leavecontainer">
            <article class="form-personal-details">
               
                <h1 class="leave-request-header">Submit Leave Request</h1>
                
                <label class="label-form">  <h3>Name</h3>
                    <input id="enter-fname" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>

                <label class="label-form"> <h3>Reason for Leave</h3>
                    <textarea id="enter-lname" value={reasonForLeave} onChange={(e) => setreasonForLeave(e.target.value)}>
                        Comments
                    </textarea>
                </label>
                <h3 > Select dates</h3>
                <Calendar onChange={onChange} value={date} selectRange={true} />
                <button class="submit-button" onClick={postToDatabase}>Submit Request</button>

            </article> </div> 
      </></>
        )
}
 
export default Home;