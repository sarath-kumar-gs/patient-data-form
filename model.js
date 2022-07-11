const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PatientSchema = new Schema({
    name: { required: true, type: String, isReadonly: false },
    date_of_birth : { required: true, isReadonly: false, type: String },
    age: { required: true, isReadonly: true, type: Number },
    sex: { required: true, enum: [ 'male', 'female'], isReadonly: false, type: String },
    height: { required: true, isReadonly: false, type: String },
    weight: { required: true, isReadonly: false, type: String },
    bmi: { isReadonly: true, type: String }
});

module.exports = Patient = mongoose.model("patient", PatientSchema );
