import axios from 'axios';
// const TUITS_API = 'http://localhost:4000/api/tuits';    // location of HTTP services
// const TUITS_API = 'https://tuiter-node-server-app-cs1234-sp23.onrender.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;    // Determine whether the local server or external one is used based on environment
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits = async () => {      // async tags this function as asynchronous
    const response = await axios.get(TUITS_API);    // send HTTP GET request to TUITS_API
    const tuits = response.data;            // extract JSON array from response from server
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}


//In previous assignments, reducers were used to keep track of the tuits, initialized from JSON files imported from within the reducers, but now we want to use data from the server instead. Previous implementations used reducer functions to update the state of the tuits array by adding new tuits to the state, deleting tuits, and modifying tuits in a redux store. Now we need to replace this implementation with the HTTP services we implemented in the Node.js server in the previous section. The reducers we've already implemented that create, delete, and update tuits, are all synchronous, manipulating data local to the React.js application, but we need to instead interact asynchronously with an HTTP server, while still maintaining a state with Redux.