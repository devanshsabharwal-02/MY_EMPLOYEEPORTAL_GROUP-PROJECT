import React from 'react';
import './mainmenu.css';
import Navbar from "./Navbar.js";

function Test() {
    return (
        <div classname="Test">
            <Navbar />
                <table class="newsboard-table">
                    <thead>
                        <tr>
                            <th>Newsboard</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="4">02/04/22:   <br></br>ROUTINE FIRE ALARM: Fire alarms will be tested every Wednesday at 11am.</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="5">01/04/22:    <br></br>  Please remember to book you weekly catch up with your manager!</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td id="6">28/03/22:    <br></br>   Internal systems will be down from 12am-2am on 4/04/22 for maintenance.</td>
                        </tr>
                        <br></br>
                        
                        
                        
                      
                         

                    </tbody>
                </table>



        </div>

        
    );   
}

export default Test;