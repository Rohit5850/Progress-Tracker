import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import './ProgressAppCss.css'
import ProgressListComp from "./ProgressListComp";
import DsaTrackerList from "./DsaTrackerList";


const ProgressApp = ()=>{

    // const [listItem,setListItem] = useState([]);
    // useEffect(()=>{
        //     console.log("1: - " , listItem)
        // },[listItem])
        
        const [listItem,setListItem] = useState([]);
        const [servComp,setServComp] = useState([]);
        
        useEffect(()=>{
            const repateComp = [];
            setListItem(DsaTrackerList)
            listItem.forEach((item,index)=>{
                repateComp.push(<ProgressListComp key={index} title={item.title}  subsection={item.subsections} completed={item.subsections}  />)

           
            })

            setServComp(repateComp)
        },[listItem])



    return(

        <div className="progressApp">
                 <div className="app_heading">
                       <h2>Progress App</h2>
                 </div>

          <div className="progressBarContainer">
        <div className="progressBarItem">
          <div className="progressBar">
            <div className="progressText">
                <h3>Progress : 0%</h3>
            </div>
          <ProgressBar key={1} completed={10} className="prgBar" barContainerClassName="progBarcontainer" completedClassName="progBarCompleted" labelClassName="progBarlabel" />
          </div>  

         <div className="progressData">


            {
                servComp.map((item,index)=>(
                    <div>
                    {item}
                    </div>
                ))
            }

           
             

         </div>

          </div>     
          </div> 
        </div>
    )
}


export default ProgressApp;