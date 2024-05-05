require("../config/dataBase");

let mongoose = require("mongoose");
let AdminSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    block_list : {type : Array, default : []},
    login_attempt : {type : Number, default : 0},
    attempt_fail : {type : Boolean, default : false},
    basic_info : [ { device : {type : String, default : ""}, login : {type : String, default : ""}, logout : {type : String, default : ""} } ],
    dob : {type : Date, default : ""},
    state : {type : String, default : ""},
    city : {type : String, default : ""},
    status : {type : Number, default : 1},
    address : {type : String, default : ""},
    contact : {type : String, default : ""},
    otp : {type : String, default : ""},
}, { collection : "admindata" })


module.exports = mongoose.model("admindata", AdminSchema);
