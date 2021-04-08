import React from "react";

function SearchBox({Search}){
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"  type="search" placeholder="Search Robots" onChange={Search} />
        </div>
    )
}

export default SearchBox;