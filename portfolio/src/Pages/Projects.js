import React from 'react';

const Portfolio = () => {
    return (
        <body>
            <section className="row" style={{ "margin-top": "5%", "margin-left": "5%", "margin-right": "5%", "margin-bottom": "10%" }} >
                <div className="col mb-2">
                    <div className="card">
                        <img src="images/TrailWeatherTracker.png" className="card-img-top" alt="The Trail Weather Tracke" />
                        <div className="card-body">
                            <h5 className="card-title">The Trail Weather Tracker</h5>
                            <p>A website designed to search for Hiking trail in your area and see current information and weather based on the selected trails.</p>
                            <p><a href="https://randylofgren.github.io/trail-weather-tracker/">Trail Weather Tracker</a></p>
                            <a href="https://github.com/RandyLofgren/trail-weather-tracker">Github Repo</a>
                        </div>

                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card">
                        <img src="images/Screenshot.png" className="card-img-top" alt="Employee Directory" />
                        <div className="card-body">
                            <h5 className="card-title">Employee Directory</h5>
                            <p>A website created with React that displays information about Employees of a company. The App uses a random person API to create 30 users and displays their information dynamically. The search bar filters through employees by name in real time.</p>
                            <p><a href=" https://mitchmathias.github.io/EmployeeDirectory/">Employee Directory</a></p>
                            <a href="https://github.com/mitchmathias/EmployeeDirectory/">Github Repo</a>
                        </div>

                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card">
                        <img src="images/signup.png" className="card-img-top" alt="Secret Government Agency" />
                        <div className="card-body">
                            <h5 className="card-title">Secret Government Agency</h5>
                            <p>We set out to create a database driven application in which we could showcase a system of security clearance allowing access to different data from the database. We did so utilizing a node and express server with a handlebars template and mysql/sequelize database and orm.</p>
                            <p><a href="https://calm-river-70620.herokuapp.com/">Secret Government Agency</a></p>
                            <a href="https://github.com/mitchmathias/SecretGovermentAgency">Github Repo</a>
                        </div>
                    </div>
                </div>


            </section>

            <section className="row" style={{ "margin-top": "5%", "margin-left": "5%", "margin-right": "5%", "margin-bottom": "10%" }}>
                <div className="col mb-2">
                    <div className="card">
                        <img src="images/WeatherDashboard.png" className="card-img-top" alt="Weather Dashboard" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p>A website that displays todays forecast as well as the next five days for any city searched. It shows the date as well as Temperature, Humidity, and a forecasst icon with the conditions. This app uses <a href="https://openweathermap.org/api">Open Weather Map</a> API's for all weather data.</p>
                            <p><a href="https://mitchmathias.github.io/WeatherDashboard/">Weather Dashboard</a></p>
                            <a href="https://github.com/mitchmathias/WeatherDashboard">Github Repo</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card">
                        <img src="images/DayPlanner.png" className="card-img-top" alt="Day Planner" />
                        <div className="card-body">
                            <h5 className="card-title">Day Planner</h5>
                            <p>A 8 hour list of todo items for the current day. Users can add, save, and delete items for each block. Usues local time to signal if the hour has passed, is the current hour, or has not passed yet.</p>
                            <p><a href="https://mitchmathias.github.io/DayPlanner/">Day Planner</a></p>
                            <a href="https://github.com/mitchmathias/DayPlanner">Github Repo</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card">
                        <img src="images/PasswordGenerator.png" className="card-img-top" alt="Password Generator" />
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <p>A website that creates secure passwords using random number, letter, and symbol generators</p>
                            <p><a href="https://mitchmathias.github.io/passwordCreator/">Password Generator</a></p>
                            <a href="https://github.com/mitchmathias/passwordCreator">Github Repo</a>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}

export default Portfolio 