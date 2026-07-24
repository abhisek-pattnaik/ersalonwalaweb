import "./OfferTable.css";
import {
    FiEye,
    FiEdit2,
    FiSlash,
    FiEyeOff,
} from "react-icons/fi";

interface Offer {
    id: number;
    name: string;
    code: string;
    type: string;
    value: string;
    validity: string;
    status: "ACTIVE" | "SCHEDULED" | "EXPIRED";
}

const offers: Offer[] = [
    {
        id: 1,
        name: "Summer Luxe Special",
        code: "SUMMER25",
        type: "Percentage",
        value: "25%",
        validity: "Jun 01 - Aug 31",
        status: "ACTIVE",
    },
    {
        id: 2,
        name: "First Time Engineer",
        code: "TECHFIRST",
        type: "Flat Discount",
        value: "$50",
        validity: "Infinite",
        status: "ACTIVE",
    },
    {
        id: 3,
        name: "Holiday Glow 2023",
        code: "GLOW23",
        type: "BOGO",
        value: "1+1",
        validity: "Expired Dec 31",
        status: "EXPIRED",
    },
    {
        id: 4,
        name: "Wedding Season Pack",
        code: "BRIDE500",
        type: "Flat Discount",
        value: "$500",
        validity: "Sep 15 - Oct 30",
        status: "SCHEDULED",
    },
];

const OfferTable = () => {
    return (
        <div className="offer-table-card">

            <div className="table-wrapper">

                <table className="offer-table">

                    <thead>
                        <tr>
                            <th>Offer Name</th>
                            <th>Code</th>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Validity</th>
                            <th>Status</th>
                            <th className="actions">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {offers.map((offer) => (
                            <tr key={offer.id} className={offer.status === "EXPIRED" ? "row-expired" : ""}>

                                <td>{offer.name}</td>

                                <td>
                                    <span className={offer.status === "EXPIRED" ? "offer-code-expired" : "offer-code"}>
                                        {offer.code}
                                    </span>
                                </td>

                                <td>{offer.type}</td>

                                <td className={offer.status === "EXPIRED" ? "offer-value-expired" : "offer-value"}>
                                    {offer.value}
                                </td>

                                <td>{offer.validity}</td>

                                <td>
                                    <span
                                        className={`status ${offer.status.toLowerCase()}`}
                                    >
                                        {offer.status}
                                    </span>
                                </td>

                                 <td>

                                    <div className="action-buttons">
                                        {offer.status === "EXPIRED" ? (
                                            <>
                                                <button className="btn-disabled">
                                                    <FiEyeOff />
                                                </button>
                                                <button className="btn-disabled">
                                                    <FiSlash />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button>
                                                    <FiEye />
                                                </button>
                                                <button>
                                                    <FiEdit2 />
                                                </button>
                                                <button>
                                                    <FiSlash />
                                                </button>
                                            </>
                                        )}
                                    </div>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            <div className="table-footer">

                <span>
                    Showing 1-10 of 42 active offers
                </span>

                <div className="pagination">

                    <button>Previous</button>

                    <button className="active-page">1</button>

                    <button>2</button>

                    <button>Next</button>

                </div>

            </div>

        </div>
    );
};

export default OfferTable;