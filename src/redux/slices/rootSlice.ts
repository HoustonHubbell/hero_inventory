import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Superman',
        backstory: "Illegal alien immigrated to america",
        first_name: "Clark",
        last_name: 'Kent',
        powers: 'Strength, Flight, Lazer Vision, Speed',
        weaknesses: 'Kryptonite',
        foes: 'Zahd',
        lives_saved: '100000',
        spouse: 'Louis Lane',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseBackstory: (state, action) => { state.backstory = action.payload},
        chooseFirst: (state, action) => { state.first_name = action.payload},
        chooseLast: (state, action) => { state.last_name = action.payload},
        choosePowers: (state, action) => { state.powers = action.payload},
        chooseWeaknesses: (state, action) => { state.weaknesses = action.payload},
        chooseFoes: (state, action) => { state.foes = action.payload},
        chooseSaves: (state, action) => { state.lives_saved = action.payload},
        chooseSpouse: (state, action) => { state.spouse = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseBackstory, chooseFirst, chooseLast, choosePowers, chooseWeaknesses, chooseFoes, chooseSaves, chooseSpouse } = rootSlice.actions
