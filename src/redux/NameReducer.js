
//State

const intialState = {
    reduxName: ''

}

    //action constant
    //We are setting a string to this variable
 const SET_NAME ='SET_NAME'


 //action creator

 export function nameInput(nameState){
     return{
         type: SET_NAME,
         payload: nameState
     }
 }

 //reducer
 export default function reducer(state = intialState, action) {
    switch (action.type) {
        case SET_NAME:
            return {...state, reduxName:action.payload}

        default:
            return state
    }



}

