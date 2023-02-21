import React from 'react';
import './Main.css'


const Main = () => {
    return (
        <div>
            <div class="container overflow-hidden text-center">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="w-50">
                        <div class="p-3 border bg-light" className='banner'>
                            <img src="/pictures/Group 33092.png" alt="banner-img " />
                        </div>
                    </div>
                    <div class="w-50">
                        <div class="p-5">
                            <h1 class="text-start fs-1 fw-bold text-warning">Nike React <br></br><span class="text-primary">Infinity Run 2</span></h1>
                            <p class="lh-base text-start text-black-50 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, non.
                            consectetur adipisicing elit</p>
                            <div class="d-flex flex-start">
                            <button type="button" class="btn btn-primary btn-lg">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;