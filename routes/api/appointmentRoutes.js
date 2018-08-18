var router = require('express').Router();
var AppointmentController = require('../../controllers/appointmentControllers');

router.get('/',AppointmentController.Get)
        .get('/:id',AppointmentController.FindOne)
        .put('/:id',AppointmentController.Update)
        .delete('/:id',AppointmentController.Remove)
        .post('/',AppointmentController.Create);

module.exports = router;