// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT

const BucketsListItem = ({id, title, description}) => (
    <div className="item-card" key={id}>
        <div className="item-card card">
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">ddd</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{description}</p>
            </div>
        </div>
    </div>
);

BucketsListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export { BucketsListItem };