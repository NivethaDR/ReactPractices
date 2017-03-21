let initialvalue={
   store:[

   ]
}

export default function updatereducer(state=initialvalue,action){
    switch(action.type){
    case "UPDATINGVALUE":{
        return Object.assign({},state,{store:[...state.store,action.payload]})
    }
    default:{
        return state
        }
    }
}