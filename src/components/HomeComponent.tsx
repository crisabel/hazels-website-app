import React from 'react';
import hazel from "../hazel-profile-pic.jpg";

const HomeComponent: React.FC = () => {
    return (
        <main>
            <section className="glass">
                <div className="dashboard">
                    <div className="profile">
                        <img src={hazel} alt="hazel" className="profile-pic" />
                        <h3>Hazel Wolf</h3>
                        <p>
                            I'm Hazel, and I am a shih tzu cockapoo mix. I am seven years old but get mistaken for a puppy all the time.
                            I love people (especially my mom and dad) and food. If you want to hear more about either of these, you can head
                            over to either my About Me or Diet page.
                        </p>
                        <p>
                            So why do I have my own website? My mom built this forme to work on her web development skills.
                            My personal website was made using typescript and React and was styled with CSS.
                        </p>
                    </div>
                    <div>
                        <button className="btn">
                            More About Me
                        </button>
                        <button className="btn">
                            <span>
                                <i className="fas fa-utensils fa-3x"></i>
                            </span>
                        </button>
                        <button className="btn">

                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomeComponent;
