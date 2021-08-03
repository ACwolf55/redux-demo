
//STate

const intialState = {
    reduxName: ''

}

    //action constant
 const SET_NAME ='SET_NAME'


 //action creator

 export const nameInput=(reduxName)=>{
     return{
         type: SET_NAME,
         payload: reduxName
     }
 }

 //reducer
 export default function reducer(state = intialState, action) {
    switch (action.type) {
        case SET_NAME:
            return {...state}

        default:
            return state
    }



}

