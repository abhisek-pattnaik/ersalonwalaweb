import "./SalonGallary.css";
import heroStylistImg from '../../assets/hero_stylist.png';
import facialImg from '../../assets/facial_treatment.png';
import masterStylistImg from '../../assets/master_stylist.png';


// const SalonGallery = () => {
//     return (
//         <div className="salon-gallery">
//             <div className="main-image">
//                 <img src={heroStylistImg} alt="Hair Styling" />
//             </div>

//             <div className="bottom-images">
//                 <div className="small-image left">
//                     <img src={facialImg} alt="Spa" />
//                 </div>

//                 <div className="small-image right">
//                     <img src={masterStylistImg} alt="Massage" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SalonGallery;

const SalonGallery = () => {
    return (
        <div className="salon-gallery">
            <div className="main-image">
                <img src={heroStylistImg} alt="Hair Styling" />
                <span className="ring ring-top" />
                <span className="ring ring-bottom" />
                <svg className="squiggle" width="40" height="120" viewBox="0 0 40 120" fill="none">
                    <path
                        d="M20 0 C 40 20, 0 40, 20 60 C 40 80, 0 100, 20 120"
                        stroke="#3654F4"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="bottom-images">
                <div className="small-image left">
                    <img src={facialImg} alt="Spa" />
                </div>

                <div className="small-image right">
                    <img src={masterStylistImg} alt="Massage" />
                </div>
            </div>
        </div>
    );
};

export default SalonGallery;