import React, { useState } from 'react';
import { render } from "react-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ViewShifts.css';
import Navbar from "./Navbar.js";
 
const Home = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
        console.log(date.toString().includes("Mon"));

        if (!(date.toString().includes("Sun")) && !(date.toString().includes("Sat"))
            && !(date.toString().includes("Mon")) && !(date.toString().includes("Fri"))
            && !(date.toString().includes("Wed"))) {

            document.getElementById("6").style.background = "";
            document.getElementById("7").style.background = "";
            document.getElementById("8").style.background = "";
            document.getElementById("9").style.background = "";
            document.getElementById("10").style.background = "";
            document.getElementById("11").style.background = "";
            document.getElementById("12").style.background = "";
            document.getElementById("13").style.background = "";
            document.getElementById("14").style.background = "";
            document.getElementById("15").style.background = "";
            document.getElementById("16").style.background = "";
            document.getElementById("17").style.background = "";
            document.getElementById("18").style.background = "";
            document.getElementById("19").style.background = "";
            document.getElementById("20").style.background = "";
            document.getElementById("21").style.background = "";


            document.getElementById("9").style.background = "#7FDBFF";
            document.getElementById("10").style.background = "#7FDBFF";
            document.getElementById("11").style.background = "#7FDBFF";
            document.getElementById("12").style.background = "#7FDBFF";
            document.getElementById("14").style.background = "#7FDBFF";
            document.getElementById("15").style.background = "#7FDBFF";
            document.getElementById("16").style.background = "#7FDBFF";
            document.getElementById("17").style.background = "#7FDBFF";

        } else if (date.toString().includes("Mon")) {
            document.getElementById("6").style.background = "";
            document.getElementById("7").style.background = "";
            document.getElementById("8").style.background = "";
            document.getElementById("9").style.background = "";
            document.getElementById("10").style.background = "";
            document.getElementById("11").style.background = "";
            document.getElementById("12").style.background = "";
            document.getElementById("13").style.background = "";
            document.getElementById("14").style.background = "";
            document.getElementById("15").style.background = "";
            document.getElementById("16").style.background = "";
            document.getElementById("17").style.background = "";
            document.getElementById("18").style.background = "";
            document.getElementById("19").style.background = "";
            document.getElementById("20").style.background = "";
            document.getElementById("21").style.background = "";

            document.getElementById("8").style.background = "#7FDBFF";
            document.getElementById("10").style.background = "#7FDBFF";
            document.getElementById("11").style.background = "#7FDBFF";
            document.getElementById("12").style.background = "#7FDBFF";
            document.getElementById("13").style.background = "#7FDBFF";
            document.getElementById("15").style.background = "#7FDBFF";
            document.getElementById("16").style.background = "#7FDBFF";
            document.getElementById("17").style.background = "#7FDBFF";

        } else if (date.toString().includes("Wed")) {

            document.getElementById("6").style.background = "";
            document.getElementById("7").style.background = "";
            document.getElementById("8").style.background = "";
            document.getElementById("9").style.background = "";
            document.getElementById("10").style.background = "";
            document.getElementById("11").style.background = "";
            document.getElementById("12").style.background = "";
            document.getElementById("13").style.background = "";
            document.getElementById("14").style.background = "";
            document.getElementById("15").style.background = "";
            document.getElementById("16").style.background = "";
            document.getElementById("17").style.background = "";
            document.getElementById("18").style.background = "";
            document.getElementById("19").style.background = "";
            document.getElementById("20").style.background = "";
            document.getElementById("21").style.background = "";

            document.getElementById("12").style.background = "#7FDBFF";
            document.getElementById("13").style.background = "#7FDBFF";
            document.getElementById("14").style.background = "#7FDBFF";
            document.getElementById("15").style.background = "#7FDBFF";
            document.getElementById("18").style.background = "#7FDBFF";
            document.getElementById("19").style.background = "#7FDBFF";
            document.getElementById("20").style.background = "#7FDBFF";
            document.getElementById("21").style.background = "#7FDBFF";

        } else if (date.toString().includes("Fri")) {
            document.getElementById("6").style.background = "";
            document.getElementById("7").style.background = "";
            document.getElementById("8").style.background = "";
            document.getElementById("9").style.background = "";
            document.getElementById("10").style.background = "";
            document.getElementById("11").style.background = "";
            document.getElementById("12").style.background = "";
            document.getElementById("13").style.background = "";
            document.getElementById("14").style.background = "";
            document.getElementById("15").style.background = "";
            document.getElementById("16").style.background = "";
            document.getElementById("17").style.background = "";
            document.getElementById("18").style.background = "";
            document.getElementById("19").style.background = "";
            document.getElementById("20").style.background = "";
            document.getElementById("21").style.background = "";

            document.getElementById("8").style.background = "#7FDBFF";
            document.getElementById("10").style.background = "#7FDBFF";
            document.getElementById("11").style.background = "#7FDBFF";
            document.getElementById("12").style.background = "#7FDBFF";
            document.getElementById("13").style.background = "#7FDBFF";
            document.getElementById("14").style.background = "#7FDBFF";
            document.getElementById("15").style.background = "#7FDBFF";
            document.getElementById("16").style.background = "#7FDBFF";

        } else if (date.toString().includes("Sat")) {

            document.getElementById("6").style.background = "";
            document.getElementById("7").style.background = "";
            document.getElementById("8").style.background = "";
            document.getElementById("9").style.background = "";
            document.getElementById("10").style.background = "";
            document.getElementById("11").style.background = "";
            document.getElementById("12").style.background = "";
            document.getElementById("13").style.background = "";
            document.getElementById("14").style.background = "";
            document.getElementById("15").style.background = "";
            document.getElementById("16").style.background = "";
            document.getElementById("17").style.background = "";
            document.getElementById("18").style.background = "";
            document.getElementById("19").style.background = "";
            document.getElementById("20").style.background = "";
            document.getElementById("21").style.background = "";

        } else if (date.toString().includes("Sun")) {

            document.getElementById("6").style.background = "";
            document.getElementById("7").style.background = "";
            document.getElementById("8").style.background = "";
            document.getElementById("9").style.background = "";
            document.getElementById("10").style.background = "";
            document.getElementById("11").style.background = "";
            document.getElementById("12").style.background = "";
            document.getElementById("13").style.background = "";
            document.getElementById("14").style.background = "";
            document.getElementById("15").style.background = "";
            document.getElementById("16").style.background = "";
            document.getElementById("17").style.background = "";
            document.getElementById("18").style.background = "";
            document.getElementById("19").style.background = "";
            document.getElementById("20").style.background = "";
            document.getElementById("21").style.background = "";
        }
    }
    return (
        <><Navbar></Navbar><>
        
        <h1 class= "shiftsheader"> View Shifts</h1>
        
        <><div class="calendar-test-shifts">
            <Calendar onChange={onChange} value={date} />
        </div><table class="shift-table" id="shift-table">
                <thead>
                    <tr>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="4">04:00</td>
                    </tr>
                    <tr>
                        <td id="5">05:00</td>
                    </tr>
                    <tr>
                        <td id="6">06:00</td>
                    </tr>
                    <tr>
                        <td id="7">07:00</td>
                    </tr>
                    <tr>
                        <td id="8">08:00</td>
                    </tr>
                    <tr>
                        <td id="9">09:00</td>
                    </tr>
                    <tr>
                        <td id="10">10:00</td>
                    </tr>
                    <tr>
                        <td id="11">11:00</td>
                    </tr>
                    <tr>
                        <td id="12">12:00</td>
                    </tr>
                    <tr>
                        <td id="13">13:00</td>
                    </tr>
                    <tr>
                        <td id="14">14:00</td>
                    </tr>
                    <tr>
                        <td id="15">15:00</td>
                    </tr>
                    <tr>
                        <td id="16">16:00</td>
                    </tr>
                    <tr>
                        <td id="17">17:00</td>
                    </tr>
                    <tr>
                        <td id="18">18:00</td>
                    </tr>
                    <tr>
                        <td id="19">19:00</td>
                    </tr>
                    <tr>
                        <td id="20">20:00</td>
                    </tr>
                    <tr>
                        <td id="21">21:00</td>
                    </tr>
                </tbody>
            </table></><div class="text-test">
                <p>Shifts are shown in blue</p>
            </div></></>
    );
}

render(<Home />, document.querySelector("#root"));
 
export default Home;