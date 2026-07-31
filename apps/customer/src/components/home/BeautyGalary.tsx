import "./BeautyGalary.css";

const BeautyGallery = () => {
    return (
        <section className="beauty-gallery">
            <div className="container">
                <div className="section-header">
                    <h2>
                        We are Experienced in making you <br />
                        <span>very Beautiful</span>
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et
                        proin neque.
                    </p>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item large">
                        <img
                            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
                            alt="Facial Treatment"
                        />
                    </div>

                    <div className="gallery-item">
                        <img
                            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
                            alt="Hair Styling"
                        />
                    </div>

                    <div className="gallery-item">
                        <img
                            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
                            alt="Spa"
                        />
                    </div>

                    <div className="gallery-item">
                        <img
                            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800"
                            alt="Massage"
                        />
                    </div>

                    <div className="gallery-item">
                        <img
                            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
                            alt="Face Care"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeautyGallery;