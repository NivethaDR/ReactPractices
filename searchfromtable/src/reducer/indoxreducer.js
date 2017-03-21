let initialvalue={
    data:[

    ]
}

export default function indoxreducer(state=initialvalue,action){
    switch(action.type){        
        case 'LOAD':{
            return Object.assign({},state,{data:action.data});
        }  
        default:{
            return state;            
        }
    }
}

