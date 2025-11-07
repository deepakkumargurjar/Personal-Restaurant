import React from "react";
import data from "../restApi.json"; 

const Team = () => {
  const team = data.data.team; 

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
           <p>
    At <strong>Deepak Gurjar’s Restaurant</strong>, our team is the heart of everything we do. 
    From skilled chefs to friendly staff, each member is dedicated to serving you the best dining experience. 
    We work together with passion, care, and a shared love for great food to make every meal memorable.
  </p>
        </div>

        <div className="team_container">
          {team.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.name} />
              <h3>{element.name}</h3>
              <h4>{element["mob.no"]}</h4>
              <p>{element.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
