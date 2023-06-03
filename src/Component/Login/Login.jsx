import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import myImg from "../../img/images/pic1.png";
import RegistrationTab from "./RegistrationTab"
import LoginTab from "./LoginTab"



function TabExample() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    console.log(newValue)
  };

  return (
    <div className='grid grid-cols-2 '>
      <div className="col-span-1 md:block hidden ">
        <img src={myImg} alt="" />
      </div>

      <div className='md:m-0 m-4 md:col-span-1 col-span-2'>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="Login" value={0}/>
        <Tab label="Registration" value={1}/> 
      </Tabs>
      {/* Content for the selected tab */}
         {selectedTab === 0 && <div><LoginTab></LoginTab></div>}
         {selectedTab === 1 && <div><RegistrationTab></RegistrationTab></div>}
      </div>
      </div>   
  );
}

export default TabExample;
