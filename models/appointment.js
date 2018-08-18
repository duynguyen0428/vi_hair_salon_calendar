var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
    date: {
        type : Date,
        required : true,
        default : Date.now()
    },
    cust_name:{
        type : String,
        required : [true, "customer name can't be blanked"]
    },
    email:{
        type : String,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        lowercase : true,
    }
});

var Appointment = mongoose.model('Appointment',AppointmentSchema);

module.exports = Appointment;