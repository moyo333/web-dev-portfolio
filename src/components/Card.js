 import React from 'react';
 import Avatar from './Avatar';
 import Detail from './Detail';


 
 function Card(props) {
   return (
     <div>
      
<div className="card">
<div className="top">
<h2>{props.name}</h2>
<Avatar img={props.img} 
 /> 
 <div className="bottom">
 <Detail detailInfo={props.tel} />
 <Detail detailInfo={props.email} />
 </div>
 </div>
 </div>
</div>
   )
 }
 
 export default Card;
 
