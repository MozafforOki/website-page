import React from 'react';
// import brandLogo from './Images/Logo.png'


const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        {/* <img src={brandLogo} alt="Logo" /> */}
                        <img src="/pictures/Logo.png" alt="logo"  width="220" height="30"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Product</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact </a>
                        </li>
                        
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;