import "./EngineerSection.css";
import { Scissors } from "lucide-react";
import masterStylist from "../../assets/master_stylist.png";
import heroStylist from "../../assets/hero_stylist.png";
import facialTreatment from "../../assets/facial_treatment.png";

interface Engineer {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
}

const engineers: Engineer[] = [
    {
        id: 1,
        name: "Alex Rivers",
        role: "CREATIVE DIRECTOR",
        description: "Master of geometric cuts and technical styling.",
        image: masterStylist,
    },
    {
        id: 2,
        name: "Alex Rivers",
        role: "CREATIVE DIRECTOR",
        description: "Master of geometric cuts and technical styling.",
        image: heroStylist,
    },
    {
        id: 3,
        name: "Alex Rivers",
        role: "CREATIVE DIRECTOR",
        description: "Master of geometric cuts and technical styling.",
        image: facialTreatment,
    },
];

export default function EngineerSection() {
    return (
        <section className="engineer-section">

            {/* Decorative Scissors */}
            <div className="scissor-icon s1"><Scissors size={18} /></div>
            <div className="scissor-icon s2"><Scissors size={16} /></div>
            <div className="scissor-icon s3"><Scissors size={20} /></div>
            <div className="scissor-icon s4"><Scissors size={16} /></div>
            <div className="scissor-icon s5"><Scissors size={18} /></div>

            <div className="section-title">

                <h2>Meet the Engineers</h2>

                <p>
                    Precision artists dedicated to your personal style architecture.
                </p>

            </div>

            <div className="ellipse"></div>

            <div className="engineer-grid">
                {engineers.map((item) => (
                    <div className="engineer-card" key={item.id}>
                        <div className="team-image">
                            <img src={item.image} alt={item.name} />
                        </div>

                        <div className="card-content">
                            <h3>{item.name}</h3>

                            <span className="designation">{item.role}</span>

                            <p>{item.description}</p>

                            <button>View All</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cta">

                <h2>
                    Ready for Your Next
                    <br />
                    Transformation?
                </h2>

                <button>Book Your Session Now →</button>

                <small>
                    Join thousands who discover their signature salon looks.
                </small>

            </div>

            <div className="bottom-line"></div>

        </section>
    );
}