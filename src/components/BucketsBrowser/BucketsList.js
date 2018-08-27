// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { BucketsListItem } from './BucketsListItem';


// COMPONENT

const renderList = items => (
    <div className="list">
        {items.map(item => renderListItem(item))}
    </div>
);

const renderListItem = item => (
    <Fragment key={item.ItemId}>
        <BucketsListItem 
            id={item.ItemId} 
            title={item.ItemTitle} 
            description={item.Description} />
    </Fragment>
);

const BucketsList = (props) => (
    <Fragment>
        <div className="col-sm-12 col-md-6 col-lg-3 pl-3">
            <h5>{props.bucketTitle}</h5>
            {renderList(props.items)}
        </div>
    </Fragment>
);

BucketsList.propTypes = {
    items: PropTypes.array.isRequired,
    bucketTitle: PropTypes.string.isRequired
};

export { BucketsList };