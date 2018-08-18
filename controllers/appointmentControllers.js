var AppointmentService = require('../services/appointmentService');
var Appointment = require('../models/appointment');
module.exports.Create = (req,res) => {
    var date = req.body.date;
    var cust_name = req.body.cust_name;
    var email = req.body.email;

    AppointmentService.Create(date,cust_name,email,(err,result)=>{
        if(err){
            Object.keys(err).forEach((e)=>{
                if(err[e].name === 'ValidatorError'){
                    
                    return res.status(422).json({'error':err[e].message});
                }
            })

            return res.status(400).json(err.message);
        }
        return res.status(201).json({result});
    })
};

module.exports.Get = (req,res) => {
    AppointmentService.GetAppointments((err,appts)=>{
        if(err)
            return res.status(400).json(err.message);

        return res.status(200).json(appts);
    })
};

module.exports.FindOne = (req,res) => {
    var id = req.params.id;
    AppointmentService.FindOne(id,(err,appt)=>{
        if(err != null)
            return res.status(400).json(err.message);
        if(appt === null)
            return res.status(404).json({'error':'Not Found'});
        return res.status(200).json(appt); 
    });
   
};

module.exports.Update = async (req,res) => {
    var id = req.params.id;

    await AppointmentService.Update(id,req.body,(err,appt)=>{    
        if(err)
            return res.status(400).json(err.error);

        return res.status(200).json(appt);
    });
};

module.exports.Remove = async (req,res) => {
    var id = req.params.id;

    await AppointmentService.Remove(id,(err,appt)=>{    
        if(err)
            return res.status(400).json(err.error);

        return res.status(200).json(appt);
    });
};