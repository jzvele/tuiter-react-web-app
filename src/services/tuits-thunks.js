import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"  // import all exported functions as service

export const findTuitsThunk = createAsyncThunk(         // create thunk for findTuits
    'tuits/findTuits', async () =>  // give unique name, thunk invokes
    {
        console.log("FindTuitsThunk")
        await service.findTuits()
    }                           // service function. Returned data goes in
)                                                           // redux action's payload

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
async (tuit) => {
    const newTuit = await service.createTuit(tuit)
    return newTuit
})

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

