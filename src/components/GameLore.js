import React from 'react';

const GameLore = () => {
    return (
        <div className="row mb-5 text-white">
            <div className="col ">
                <h1>DLC INFO:</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>

            <div className="col ">
                <h1>FUN FACT OF THE DAY:</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>

            <div className="col ">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="1200" height="720" src="https://www.youtube.com/embed/DYDs_Inzkz4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>

            </div>

        </div>
    );
};

export default GameLore;
