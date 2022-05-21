import React from 'react';

const Map = (prop) => {
    return (
        <div className="col-3">
            <div className="card bg-transparent">
                <h5 className="text-center"><u>{prop.mapName}</u></h5>
                <img className="card-img-top" style={{height: '200px'}}
                     src={prop.imgSrc}
                     alt="Card image cap"/>
            </div>

        </div>
    );
};

export default Map;
