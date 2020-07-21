import React from 'react'

 function ActionLink() {
     function handleClick(e){
         e.preventDefault();
         alert("Im an alert");
     }
    return (
 <a href="/" onClick={handleClick}>
click me
 </a>
        );
}
export default ActionLink;