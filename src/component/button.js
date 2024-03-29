import React from "react";


export default ({className = "btn" ,value = "Add Value to component", type="submit"}) => {
    return (
        <button className={className} type={type}>{value}</button>
    )
};