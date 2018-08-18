var Appointment = require('../models/appointment');

module.exports.Create = (date,cust_name,email,cb) => {
    var newAppointment = new Appointment({
        date: date,
        cust_name : cust_name,
        email: email
    });

    newAppointment.save((err,appt)=>{
        if(err){
            return cb(err.errors);
        }
        return cb(null,appt);
    });
}

module.exports.GetAppointments = async (cb) => {
    try 
    {
        let appts = await Appointment.find({}).exec();
        return cb(null,appts);
    }
    catch (err)
    {
        return cb(err);
    };
};

module.exports.FindOne = async (id,cb) => {
    try{
        let appt = await Appointment.findById(id).exec();
        return cb(null,appt);
    }
    catch (error){
        return cb(error);
    }


};

module.exports.Update = async (id,newAppointment,cb)=>{
    await Appointment.findByIdAndUpdate(id,newAppointment,(err,appt)=>{
        if(err)
            return cb(err);
        return cb(null,appt); 
    });     
};

module.exports.Remove = async (id,cd)=>{
    await Appointment.findByIdAndRemove(id,(err,appt)=>{
        if(err)
            return cb(err);
        return cb(null,appt); 
    });  
}