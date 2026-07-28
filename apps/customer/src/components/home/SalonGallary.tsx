import "./SalonGallary.css";
import heroStylistImg from '../../assets/hero_stylist.png';
import facialImg from '../../assets/facial_treatment.png';
import masterStylistImg from '../../assets/master_stylist.png';


const SalonGallery = () => {
    return (
        <div className="salon-gallery">
            <div className="main-image">
                <img src={heroStylistImg} alt="Hair Styling" />
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