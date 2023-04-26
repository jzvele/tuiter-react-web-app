import React, {useEffect} from "react";
import TuitItem from "./tuit-item"
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux"
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitsList = () => {
    const { tuits } = useSelector(state => state.tuits)
    console.log({tuits})
    const loading = false;
    const dispatch = useDispatch();
    useEffect(() => {           // on component load
        dispatch(findTuitsThunk())      // invoke find tuits thunk to fetch tuits and
    }, [])                          // put them in the reducer's store so we can
    return(                               // extract them with useSelector() and render
        <div>
            <h1>Testing: TuitList component loads </h1>
            {/*<ul className="list-group">*/}
            {/*    {*/}
            {/*        loading &&     // if loading flag is true, then show a loading message while data is still coming back from the server*/}
            {/*        <li className="list-group-item">*/}
            {/*            Loading...*/}
            {/*        </li>*/}
            {/*    }*/}
            {/*    {*/}
            {/*        tuits && tuits.length > 0 && tuits.map(post =>*/}
            {/*            <TuitItem*/}
            {/*                key={post._id} post={post}/> )*/}
            {/*    }*/}
            {/*</ul>*/}
                <h4>Tuits Array should render below this</h4>
                <pre>{JSON.stringify(tuits, null, 2)}</pre>
        </div>
    );
};
export default TuitsList;

//The reducer updates the state by setting it to the tuits from the server passed as payload in the action object. The new state is stored in the reducer's store, provided by the Provider, retrieved in TuitList with useSelector() and the component renders the array of tuits from the server.