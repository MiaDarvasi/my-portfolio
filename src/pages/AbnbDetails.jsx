export function AbnbDetails() {
    return <>
        <img className="project-main-img" src="./src/assets/imgs/projects/Abnb/abnbhome1.jpg" />
        <section className="project-details">
            <h1>ABNB</h1>
            <h2>Airbnb clone app</h2>
            <p>A fully responsive, end-to-end Airbnb clone developed with React, Node.js, and MongoDB. The application features a dynamic and intuitive user interface, allowing users to browse listings, manage bookings, and interact with real-time data. A significant amount of data is efficiently managed in MongoDB, ensuring scalability and flexibility in handling user information, listings, and transactions. The app utilizes RESTful APIs for seamless communication between the front-end and back-end, while WebSockets provide real-time updates, ensuring users always have the latest information. Built collaboratively, this project demonstrates expertise in full-stack development, with a focus on performance, user experience, and real-time functionality.</p>
            <a href="https://github.com/avivdb/Abnb-frontend" target="blank" title="Frontend"><img src="./src/assets/imgs/icons/git.svg" /></a>
            <a href="https://github.com/AdiSabban10/Abnb-backend" target="blank" title="Backend"><img src="./src/assets/imgs/icons/git.svg" /></a>
            <ul className="gallery">
                <li className="gallery-item">
                    <h3>Responsive Homepage</h3>
                    <section className="gallery-item-imgs">
                        <img src="./src/assets/imgs/projects/Abnb/abnbhome1.jpg" />
                        <img src="./src/assets/imgs/projects/Abnb/abnbhome2.jpg" />
                        <img src="./src/assets/imgs/projects/Abnb/abnbresponsive.jpg" />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Detailed Property</h3>
                    <section className="gallery-item-imgs">
                        <img src="./src/assets/imgs/projects/Abnb/abnbdetails.jpg" />
                        <img src="./src/assets/imgs/projects/Abnb/abnbdetails2.jpg" />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Add Property Option</h3>
                    <section className="gallery-item-imgs">
                        <img src="./src/assets/imgs/projects/Abnb/abnbadd.jpg" />
                        <img src="./src/assets/imgs/projects/Abnb/abnbadd2.jpg" />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Reservation Process</h3>
                    <section className="gallery-item-imgs">
                        <img src="./src/assets/imgs/projects/Abnb/abnbreserve1.jpg" />
                        <img src="./src/assets/imgs/projects/Abnb/abnbreserve2.jpg" />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Incoming Orders Page & User's Trips Page</h3>
                    <section className="gallery-item-imgs">
                        <img src="./src/assets/imgs/projects/Abnb/abnborders.jpg" />
                        <img src="./src/assets/imgs/projects/Abnb/abnbtrips.jpg" />
                    </section>
                </li>
            </ul>
        </section>
    </>
}
