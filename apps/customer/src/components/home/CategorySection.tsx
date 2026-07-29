import { useState } from "react";
import {
    Scissors,
    Hand,
    Sparkles,
    HeartHandshake,
    Flower2,
    Brush,
} from "lucide-react";
import "./CategorySection.css";

const categories = [
    {
        id: 1,
        title: "Hair",
        icon: <Scissors size={20} />,
        color: "#93D1FF",
    },
    {
        id: 2,
        title: "Nails",
        icon: <Brush size={20} />,
        color: "#E8E7FF",
    },
    {
        id: 3,
        title: "Spa",
        icon: <Flower2 size={20} />,
        color: "#FFD9A4",
    },
    {
        id: 4,
        title: "Massage",
        icon: <Hand size={20} />,
        color: "#C9E8FF",
    },
    {
        id: 5,
        title: "Skin Care",
        icon: <Sparkles size={20} />,
        color: "#F2F3F8",
    },
    {
        id: 6,
        title: "Bridal",
        icon: <HeartHandshake size={20} />,
        color: "#93D1FF",
    },
];

const CategorySection = () => {
    const [selected, setSelected] = useState(4);

    return (
        <section className="category-section">
            <div className="container">

                <h2>Curated Experiences</h2>

                <p>
                    From precision hair engineering to therapeutic spa rituals,
                    select a category to begin your transformation.
                </p>

                <div className="category-wrapper">
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelected(item.id)}
                            className={`category-card ${selected === item.id ? "active" : ""
                                }`}
                        >
                            <div
                                className="icon-circle"
                                style={{ background: item.color }}
                            >
                                {item.icon}
                            </div>

                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>

                <div className="bottom-line"></div>

            </div>
        </section>
    );
};

export default CategorySection;