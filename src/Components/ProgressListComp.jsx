import React, { useState } from "react";
import Subsection from "./Subsection";

const ProgressListComp = ({ title , subsection, completed}) => {

    const [openItem,setOpenItem] = useState(false)
    const [itemSubList , setItemSubList] = useState(false)
   
   
   function toggleBtn (){
        setOpenItem(!openItem)
        setItemSubList(!itemSubList)   
    }
    
    return (
        <div className="progressListComp">
            <div className="progListItem">
                <div className="progItemBar">
                    <div className="itemHeading">
                        <h2>{title}</h2>
                    </div>
                    <div className="progress&btn">
                        <p>0%</p>
                        <div className="itemBtn">
                            <button onClick={toggleBtn}> { !openItem ? <span>Open</span> : <span>Close</span>} </button>
                        </div>
                    </div>
                </div>
                {
                    itemSubList == true ?   <Subsection key={1} subsection={subsection} complete={completed} /> : ''
                }


                

            </div>
        </div>

    )
}


export default ProgressListComp;














































