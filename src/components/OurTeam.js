import Card from "./Card";
import dominicImg from "../img/Dominic Zambrano.jpeg"; 
import jordanImg from "../img/Jordan Rinehart.jpeg"; 
import carlosImg from "../img/Carlos Salcedo.jpeg"; 

function OurTeam() {
  return (
    <div className="container ourteam">
        <h2 className="main-title text-center">OUR TEAM</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card
                            title="Carlos Salcedo"
                            img={carlosImg}
                            text="Chief Executive Officer and visionary leader of 710TECH LI. Carlos drives the company’s mission and strategy, fostering innovation and growth. His commitment to excellence and client success inspires the entire team."
                        />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card
                            title="Dominic Zambrano"
                            img={dominicImg}
                            text="Senior Software Engineer with expertise in full-stack development, cloud solutions, and automation. Dominic leads our technical team, ensuring every project is delivered with precision and innovation."
                        />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card
                            title="Jordan Rinehart"
                            img={jordanImg}
                            text="Project Manager dedicated to driving successful outcomes for our clients. Jordan excels at coordinating teams, managing timelines, and delivering solutions that exceed expectations with professionalism and energy."
                        />
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  );
}
export default OurTeam;
