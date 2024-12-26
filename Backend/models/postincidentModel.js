const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
    incidentType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    severity: {
        type: String,
        required: true,
    },
});

const Incident = mongoose.model('Incident', IncidentSchema);

module.exports = Incident;
