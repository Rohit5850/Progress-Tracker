import React from "react";

const Subsection = ({subsection,complete})=>{

    function updateList(index){

        console.log("Index ---------   ",index.target.checked)
    }

    return(
        <div className="progItemSubList">
        <ul>
            {
                subsection.map((item, index) => (
                <li key={index}> {index + 1}. {item.subtitle}  <span>  <input type="checkbox" onChange={(index)=>updateList(index)}  />   </span></li>
                ))
            }
        </ul>
    </div> 

    )

}


export default Subsection;