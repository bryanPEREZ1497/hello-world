import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';

const Card = (me) => {
    return (
        <div className='container'>
            <div className="card">
                <div className="image">
                    <img src={me.image} alt={me.name} />
                </div>
                <h2 className="title"> {me.name}</h2>
                <p className="description">
                    {me.description}
                </p>
                <p className="description">
                    Telefóno de contacto: {me.phone}
                </p>

            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

Card.defaultProps = {
    name: 'Nombre',
    description: 'Descripción',
    image: 'https://via.placeholder.com/150',
    phone: '000000000'
}

// Card.defaul
export default Card