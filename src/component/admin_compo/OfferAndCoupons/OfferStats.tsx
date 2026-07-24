import "./OfferStats.css";
import {
    FiCheckCircle,
    FiRotateCcw,
    FiBarChart2,
    FiDatabase,
    FiPlus,
} from "react-icons/fi";

const stats = [
    {
        title: "ACTIVE OFFERS",
        value: "42",
        icon: <FiCheckCircle />,
        type: "active",
    },
    {
        title: "EXPIRED OFFERS",
        value: "128",
        icon: <FiRotateCcw />,
        type: "expired",
    },
    {
        title: "CITY-WISE COVERAGE",
        value: "08",
        icon: <FiBarChart2 />,
        type: "coverage",
    },
    {
        title: "OUTLET-WISE IMPACT",
        value: "24",
        icon: <FiDatabase />,
        type: "impact",
    },
];

const OfferStats = () => {
    return (
        <div className="offer-top">

            <div className="offer-cards">
                {stats.map((item, index) => (
                    <div className="offer-card" key={index}>

                        <div className="offer-info">
                            <p>{item.title}</p>
                            <h2>{item.value}</h2>
                        </div>

                        <div className={`offer-icon icon-${item.type}`}>
                            {item.icon}
                        </div>

                    </div>
                ))}
            </div>

            <button className="offer-btn">
                <FiPlus size={16} />
                Create New Offer
            </button>

        </div>
    );
};

export default OfferStats;