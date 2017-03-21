import $ from 'jquery';


export function loadjson() {
    return function(dispatch){
        $.ajax({
            url:"./indox.json",
            success:function(data){
                dispatch({type:'LOAD',data});
            },
            error:function(e){
                    console.log(e);
            }
        })
    }
}
