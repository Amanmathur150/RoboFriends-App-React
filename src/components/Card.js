import React from "react";

function Card({name , email, id }){
    return (
        <div className="tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}.png?set=set3&size=200x200`} alt="ROBOTS"  />
            <h2>{name}</h2>
            <p>{email}</p> 
        </div>
    );
}

export default Card;