import React, { useState, useEffect } from 'react';
import './refundscreen.css';
import Navbar from "./Navbar.js";
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from "firebase/database";


const Home = () => {

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

    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [total, setTotal] = useState();
    const [date, setDate] = useState();

    const postToDatabase = () => {

        const db = getDatabase();
        set(ref(db, localStorage.getItem("username")), {
            title: title,
            desc: desc,
            total: total,
            date: date,
        });

        alert("Expense Request has been Submitted")


    }

    return (
        <><Navbar></Navbar><>

        <div class="refund-form"> 
            <article class="form-personal-details">
                <h1 class="refundtitle">Submit New Expense</h1>
                <label class="label-form"> Title
                    <input id="enter-fname" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>

                <label class="label-form"> Description
                    <textarea id="enter-lname" value={desc} onChange={(e) => setDesc(e.target.value)}>
                        Comments
                    </textarea>
                </label>

                <label class="label-form"> Expense Total
                    <input id="enter-dob" type="number" value={total} onChange={(e) => setTotal(e.target.value)}/>
                    <select>
                        <option value="GBP">GBP</option>
                        <option value="USD">USD</option>
                        <option value="AUD">GBP</option>
                        <option value="CAD">CAD</option>
                    </select>
                </label>

                <label class="label-form"> Date
                    <input id="enter-address" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </label>

                <button class="submit-button-refund" onClick={postToDatabase}>Submit Request</button>

            </article>
            </div>
        </></>
    )
}

export default Home;