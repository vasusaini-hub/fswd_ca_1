import React from "react";

const TestimonialCard = ({title , description}) => {
    return(
        <div style={styles.card}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

const styles= {
    card:{
        border:"6px solid black",
        borderRadius:"20px",
        padding:"16px",
        margin:"16px",
        backgroundColor:"orange",
        boxShadow:"0 2px 4px rgba(0, 0, 0, 0, 1)"
    }
};

export default TestimonialCard;