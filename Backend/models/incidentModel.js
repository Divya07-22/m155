const incidents = [];

const createIncident = (incidentData) => {
  const newIncident = { id: incidents.length + 1, ...incidentData };
  incidents.push(newIncident);
  return newIncident;
};

module.exports = { createIncident };
