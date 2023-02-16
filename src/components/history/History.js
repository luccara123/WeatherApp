import React from "react";

function History(){
    const pastCities = [
     {
        id: 1,
        name: "toronto"
    },
    {
        id: 2, 
        name: "new york"
    },
    {
        id: 3,
        name: "ottawa",
    },
    {
        id: 4,
        name: "veneza"
    },
    {
        id: 5,
        name: "brasilia"
    },
 ]
 return (<div>
    {pastCities.map((city) => (
        <button key={pastCities.id}>
            {city.name}
        </button>
    ))}
 </div>)

 

}

export default History