
let initialcount={result:0}

const countreducer=(state=initialcount,action)=>{
    switch(action.type){
        case 'ADDITION':
        return Object.assign({},state,{result:action.number1+action.number2});
        case 'SUBTRACTION':
        return Object.assign({},state,{result:action.number1-action.number2});
        case 'MULTIPLY':
        return Object.assign({},state,{result:action.number1*action.number2});
        case 'DIVIDE':
        return Object.assign({},state,{result:action.number1/action.number2});
        default:
        return state;
    }
}
export default countreducer;
