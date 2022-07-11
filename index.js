const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());

const port = 4000

const patientModel = require('./model');

mongoose.connect('mongodb://localhost:27017/navadhiti');

app.post('/form', async (req, res) => {
    const { name, date_of_birth, age, sex, height, weight, bmi } = req.body;
    const  patientData = new patientModel({ name, date_of_birth, age, sex, height, weight, bmi });
    
    await patientData.save();

    res.json({ status: 200, message: 'Patient data saved successfully', data: patientData, error: {} });

});
app.get('/list', async (req, res ) => {
    const listPatients = await patientModel.find({},{ name: 1, date_of_birth: 1, sex: 1, height: 1, weight: 1, bmi: 1 });
    res.json({  data: listPatients })
});

app.listen(4000,() => {
    console.log(`server running on ${port}`)
});


