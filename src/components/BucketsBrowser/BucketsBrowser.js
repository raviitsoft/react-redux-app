// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchBuckets } from '../state/actions/BucketsActions';
import { BucketsList } from './BucketsList';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';


// COMPONENT

class BucketsBrowser extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBuckets();
    }

    render() {
        return (
            <div className="d-flex flex-row custom-flex">
                {
                    this.props.fetched && this.props.buckets.map((data) => {
                        return <BucketsList 
                            key={data.BucketId}
                            bucketTitle={data.Description}
                            items={data.Items}  />;
                    })
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of buckets" />
                }
            </div>
        );
    }
}

BucketsBrowser.propTypes = {
    fetchBuckets: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    buckets: PropTypes.array.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, buckets } = state.buckets;

    return { fetching, fetched, failed, buckets };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchBuckets }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(BucketsBrowser);


// EXPORT COMPONENT

export { hoc as BucketsBrowser };