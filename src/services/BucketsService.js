import Axios from 'axios';


// COMPONENT

const simulateError = false;

export const fetchBuckets = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of buckets');
            } else {
                Axios.get('http://roadmapservice.azurewebsites.net/api/buckets')
                    .then(res => { 
                        console.log(res.data, 'fdfddf');
                        resolve(res.data);
                    });
            }
        }, 1000);
    });
};