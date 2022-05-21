import React from 'react';

const Vagabond = () => {
    return (
            <div className="row">
                <div className="col">
                    <h4 className="text-white "><u>VAGABOND STARTING EQUIPMENT:</u></h4>
                    <h5 className="text-white">This class starts with the following equipment:</h5>
                    <ul>
                        <li className="text-white">Longsword</li>
                        <li className="text-white">Halberd</li>
                        <li className="text-white">Heater Shield</li>
                    </ul>
                    <ul>
                        <li className="text-white">Vagabond Knight Helm</li>
                        <li className="text-white">Vagabond Knight Armor</li>
                        <li className="text-white">Vagabond Knight Gauntlets</li>
                        <li className="text-white">Vagabond Knight Greaves</li>
                    </ul>

                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="400" height="225" src="https://www.youtube.com/embed/tz_a1vL7CXA"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>


                </div>

                <div className="col">
                    <h4 className="text-white"><u>VAGABOND STARTING ITEMS:</u></h4>
                    <h5 className="text-white">This class starts with the following items:</h5>

                    <ul>
                        <li className="text-white">Memory of Grace</li>
                        <li className="text-white">Player choice of Keepsake</li>
                    </ul>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="400" height="225" src="https://www.youtube.com/embed/a0cB_SoLzAE"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>

                </div>

                <div className="mx-auto card w-25 bg-transparent">
                    <img className="card-img-top"
                         src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/vagabond_class_elden_ring_wiki_guide_270px.png"
                         alt="Card image cap"
                         style={{display: 'block',WebkitUserSelect: 'none',margin: 'auto',transition: 'background-color 300ms'}}/>
                        <div className="card-body">
                            <table className="card-table table table-striped table-dark text-white ">
                                <thead>
                                <tr>
                                    <th scope="col">Soul Lvl</th>
                                    <th scope="col"/>
                                    <th scope="col">9</th>
                                    <th/>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Vigor</td>
                                    <td>15</td>
                                    <td>Dexterity</td>
                                    <td>13</td>
                                </tr>
                                <tr>
                                    <td>Mind</td>
                                    <td>10</td>
                                    <td>Intelligence</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Endurance</td>
                                    <td>11</td>
                                    <td>Faith</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Strength</td>
                                    <td>14</td>
                                    <td>Arcane</td>
                                    <td>7</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                </div>

            <div className="row">
                <div className="col">
                    <h4 className="text-white"><u>Guides:</u></h4>
                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book....Lorem Ipsum is
                        simply
                        dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-white"> Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an
                        unknown
                        printer took a galley of type and scrambled it to make a type specimen book </p>
                </div>


            </div>

        </div>
);
}

export default Vagabond;