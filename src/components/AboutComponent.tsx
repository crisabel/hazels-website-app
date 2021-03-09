import React from 'react';
import hazel from "../hazel-profile-pic.jpg";

export default function AboutComponent() {
    return (
        <div>
            <main>
                <section className="glass">
                    <div className="dashboard">
                        <div>
                            <img src={hazel} alt="hazel" className="profile-pic" />
                            <h3>Hazel Wolf</h3>
                            <p>Here's a quick recap if you forget what you read on the home page. I'm Hazel, and I am a shih tzu cockapoo mix. I am seven years old but get mistaken for a puppy all the time. I love people (especially my mom and dad) and food.</p>
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
        </div>
    )
}
