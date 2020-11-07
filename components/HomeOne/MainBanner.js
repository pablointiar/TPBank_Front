import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <h1>Vos soña tu proyecto, nosotros te acompañamos</h1>
                                {/* <p>Abri tu cuenta en Haiper por que: </p> */}
                                <h1>#ElFuturoEstaAca</h1>
                                <Link href="#">
                                    <a className="btn btn-primary">¡Comencemos!</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;