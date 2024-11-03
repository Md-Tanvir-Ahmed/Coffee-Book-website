/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link, useLocation } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";


const Card = ({ coffee, handleRemove }) => {
    const { pathname } = useLocation()
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {};
    console.log(coffee)
    return (
        <div className="flex relative">
            <Link to={`/coffee/${id}`}
                className="transition hover:scale-105 rounded-xl overflow-hidden">
                <figure className="w-full h-48 overflow-hidden">
                    <img src={image} alt="" />
                </figure>
                <div className="p-4">
                    <h1 className="text-xl">Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>

            {
                pathname == '/dashboard' && <div onClick={() => handleRemove(id)}
                    className="absolute p-3 bg-warning rounded-full cursore-pointer -top-5 -right-5 ">
                    <FaTrashCan size={20} />
                </div>
            }

        </div>
    );
};

export default Card;