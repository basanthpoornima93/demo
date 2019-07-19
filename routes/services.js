var userData = {};


var services={
    submitData:function (data) {
        userData = data
    },
    sendData:function (data){
        return userData;
    }
}


export default services;