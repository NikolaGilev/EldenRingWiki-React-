import {Link} from 'react-router-dom'


const Card = (prop) => {
    return (
        <div className="col mt-4 mb-4">
            <div className="card ">
                <img className="card-img-top" style={{height: '200px'}}
                     src={prop.imgSrc}
                     alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title"> {prop.cardName} </h5>
                    <p className="card-text cut-text">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book</p>

                    {!prop.btnRedirectLink.includes('http') ?
                        <Link to={prop.btnRedirectLink} className=" w-100 btn btn-dark  fw-bold">{prop.btnName}</Link>
                        : <a href={prop.btnRedirectLink} className=" w-100 btn btn-dark  fw-bold">{prop.btnName}</a>}
                </div>
            </div>
        </div>
    );
}

export default Card;
