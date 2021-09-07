import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets  () {

   const newsArticle = (heading, subtitle) =>{
       <div className="widgets__articles">
           <div className="widgets__articleLeft">
         <FiberManualRecordIcon />
           </div>
           <div className="widgets__articleRight">
               <h4>{heading}</h4>
               <p>{subtitle}</p>
           </div>
       </div>
   }

    return (
        <div className="widgets">
             <div className="widgets__header">
                 <h2>LinkedIn News</h2>
                 <InfoIcon />
             </div>
             {newsArticle("welcome to LinkedIn", "share Your resume and exciting jobs")}
             {newsArticle("Apply the top Most companies like wipro, Cognizant etc")}
             {newsArticle("freelancer, selflearner, positive attitude, TCS jobs")}
             {newsArticle("Bitcoin breaks $22k","Crypto-8000 reader")}
             {newsArticle("Read carefully the instructions", "when you are applyed for job")}
             {newsArticle("Frontend Devloper jobs, Full stack hiring process, BE-cse hiring")}
             
        </div>
         
    )
}

export default Widgets
