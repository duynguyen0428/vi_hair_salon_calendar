var express = require('express');
var router = express.Router();

router.use('/api/v1/appointment',require('./api/appointmentRoutes'));

// router.use((err,req,res,cb)=>{
//   if(err.name === 'ValidatorError'){
//     return res.status(422).json({
//       errors : Object.keys(err.errors).reduce((errors,key)=>{
//         errors[key] = err.errors[key].message;
//         return errors;
//       },{})
//     });
//   }
//   return cb(err);
// });

module.exports = router;
