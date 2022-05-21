import React from 'react';
import {Link} from "react-router-dom";

const CharCard = (prop) => {
    return (
        <div className="col-3 ">
            <div className="card bg-transparent">
                <img className="card-img-top"
                     src={prop.imgSrc}
                     alt="Card image cap"
                     style={{display: 'block', WebkitUserSelect: 'none', margin: 'auto', transition: 'background-color 300ms'}}/>
                    <div className="card-body">
                        <table  className="card-table table table-striped table-dark text-white ">
                            <thead>
                            <tr>
                                <th scope="col">Soul Lvl</th>
                                <th scope="col"/>
                                <th scope="col">{prop.soulLvl}</th>
                                <th/>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Vigor</td>
                                <td>{prop.vigor}</td>
                                <td>Dexterity</td>
                                <td>{prop.dex}</td>
                            </tr>
                            <tr>
                                <td>Mind</td>
                                <td>{prop.mind}</td>
                                <td>Intelligence</td>
                                <td>{prop.int}</td>
                            </tr>
                            <tr>
                                <td>Endurance</td>
                                <td>{prop.end}</td>
                                <td>Faith</td>
                                <td>{prop.faith}</td>
                            </tr>
                            <tr>
                                <td>Strength</td>
                                <td>{prop.str}</td>
                                <td>Arcane</td>
                                <td>{prop.arcane}</td>
                            </tr>
                            </tbody>
                        </table>
                        <Link to={prop.btnRedirectLink} className=" w-100 btn btn-dark  fw-bold">Guide me</Link>
                    </div>
            </div>

        </div>
);
};

export default CharCard;
