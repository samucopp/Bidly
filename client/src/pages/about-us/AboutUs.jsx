import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const services = [
        'In-person and online auctions of art, antiques, and collectibles',
        'Professional and certified appraisals',
        'Specialized consulting for collectors',
        'Conservation and restoration services',
        'Private collection management',
        'Specialized international logistics'
    ];

    return (
        <div className="about-container">
            {/* Hero Section */}
            <div className="hero">
                <h1>Welcome to Bidly</h1>
                <p>
                    At Bidly, we take pride in being the meeting point where art, history, and passion converge
                    into unique auction experiences. Since our foundation, we have dedicated ourselves to creating
                    a space where collectors, enthusiasts, and art lovers can discover exceptional pieces that tell
                    extraordinary stories.
                </p>
            </div>

            {/* What Sets Us Apart Section */}
            <div className="section">
                <h2 className="section-title">What Sets Us Apart</h2>
                <div className="grid-3-cols">
                    <div className="about-us-card">
                        <h3 className="card-title">Experience and Professionalism</h3>
                        <p className="text-gray-600">
                            Our team of expert appraisers and specialists brings years of experience in the auction market,
                            ensuring precise evaluations and professional guidance for every piece that passes through our hands.
                        </p>
                    </div>
                    <div className="about-us-card">
                        <h3 className="card-title">Technology and Innovation</h3>
                        <p className="text-gray-600">
                            We combine the tradition of the auction world with the latest digital technologies, offering
                            a modern and accessible platform that allows participation in our auctions from anywhere in the world.
                        </p>
                    </div>
                    <div className="about-us-card">
                        <h3 className="card-title">Guaranteed Authenticity</h3>
                        <p className="text-gray-600">
                            Every item we auction undergoes a rigorous verification and authentication process,
                            ensuring maximum confidence for our buyers and sellers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="section-services">
                <h2 className="section-title-centered-services">Our Services</h2>
                <div className="grid-2-cols">
                    {services.map((service, index) => (
                        <div key={index} className="service-item">
                            <div className="service-dot"></div>
                            <p className="service-text">{service}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Management Team Section */}
            <div className="team-container">
              
                <div className="team-members-container">
                    <div className="team-member">
                        <div className="member-image-container">
                            <img
                                src="/image/worker_men.jpg"
                                alt="Tom Österman"
                                className="member-image"
                            />
                        </div>
                        <h3 className="member-name">Tom Österman</h3>
                        <h4 className="member-role">Senior Account Executive (Sr. CE)</h4>
                        <p className="member-bio">
                        Tom has 18 years of experience in traditional auction houses, starting his career in 1987 at Bukowskis, a prestigious Swedish auction house. He also served as an art expert at Amells, Sweden's leading art gallery.
                        </p>
                    </div>

                    <div className="team-member">
                        <div className="member-image-container">
                            <img
                                src="/image/worker_chica.jpg"
                                alt="Sarah Martinez"
                                className="member-image"
                            />
                        </div>
                        <h3 className="member-name">Sarah Martinez</h3>
                        <h4 className="member-role">Chief Financial Officer (CFO)</h4>
                        <p className="member-bio">
                        Sarah has 15 years of experience in financial management, serving as CFO at Goldman Sachs and leading operations at JP Morgan Chase, with expertise in digital transformation and global markets.
                        </p>
                    </div>

                    <div className="team-member">
                        <div className="member-image-container">
                            <img
                                src="/image/worker_chico.jpg"
                                alt="Albert Ramstedt"
                                className="member-image"
                            />
                        </div>
                        <h3 className="member-name">Albert Ramstedt</h3>
                        <h4 className="member-role">Chief Technology Officer (CTO)</h4>
                        <p className="member-bio">
                        Albert has 17 years of experience in IT, including 13 in the auction industry. As CTO at Bukowskis, he developed their IT system and now leads the team managing Auctionet's advanced auction platform.
                        </p>
                    </div>
                </div>
                {/* Footer Quote */}
                <div className="footer-quote">
                    <p className="footer-text">Connecting Passions, Creating Stories. Bidly © 2025</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;