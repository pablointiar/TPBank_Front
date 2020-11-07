import React, { Component } from 'react';

class ServicesCard extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Right Image Style */}
                <div className="services-area ptb-70">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h2>Freelancers, emprendedores tenemos planes para ustedes</h2>
                                    <div className="bar"></div>
                                    <p>¿Vas a comenzar tu negocio? Bueno, tenemos varios planes preparados para acompañarte</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Sin mantenimiento   
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Cuidamos tus datos personales
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                100% costos transparentes
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Sin comisión
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Gastos Real-Time
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Tarjeta MasterCard Debito
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/1.png")} alt="image" />
                                    <div className="circle-img">
                                        <img src={require("../../images/circle.png")} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left Image Style */}
                {/* <div className="services-area ptb-70 bg-f7fafd">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/2.png")} alt="image" />
                                    <div className="circle-img">
                                        <img src={require("../../images/circle.png")} alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="content">
                                    <h2>Small to medium-sized businesses</h2>
                                    <div className="bar"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Easy transfers
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Deposit checks instantly
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                A powerful open API
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Coverage around the world
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Business without borders
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Affiliates and partnerships
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Right Image Style */}
                {/* <div className="services-area ptb-70">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h2>Large or enterprise level businesses</h2>
                                    <div className="bar"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Corporate Cards
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                International Payments
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Automated accounting
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Request Features
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Premium Support
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Direct Debit
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/3.png")} alt="image" />
                                    <div className="circle-img">
                                        <img src={require("../../images/circle.png")} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </React.Fragment>
        );
    }
}

export default ServicesCard;