import React from 'react';

 
import Register from './screens/RegisterScreen';
import MainMenu from './screens/MainMenu';
import Home from './screens/HomeScreen';
import Refund from './screens/RefundScreen'
import Payroll from './screens/PayrollScreen'
import Leave from './screens/LeaveScreen'
import PersonalInformation from './screens/PersonalInformationScreen'
import ViewShifts from './screens/ViewShifts'



 
const App = () => {
  const urlRef = window.location.href;

  return (
    <div>
      {urlRef.includes('register') ? <Register/> : urlRef.includes('MainMenu') ? <MainMenu/> : urlRef.includes('Refund') ?<Refund/>:urlRef.includes('Payroll')? <Payroll/>: urlRef.includes('leave')? <Leave/>: urlRef.includes('PersonalInformationScreen')? <PersonalInformation/>: urlRef.includes('ViewShifts')? <ViewShifts/>:<Home/>}
    </div>
  )

}
 
export default App;