import Card from "./Card";
import cardImg1 from "../img/card1.png"; 
import cardImg2 from "../img/card2.png"; 
import cardImg3 from "../img/card3.png"; 

function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card
                            title="Web Development"
                            img={cardImg1}
                            text="We build modern, responsive websites tailored to your business needs. From landing pages to complex web applications, our solutions are fast, secure, and scalable."
                        />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card
                            title="E-Commerce Services"
                            img={cardImg2}
                            text="Grow your online business with our custom e-commerce platforms. We deliver seamless shopping experiences, secure payment integrations, and robust management tools."
                        />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card
                            title="Cyber Security"
                            img={cardImg3}
                            text="Protect your digital assets with our comprehensive cyber security services. We offer risk assessments, threat monitoring, and proactive solutions to keep your data safe."
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
