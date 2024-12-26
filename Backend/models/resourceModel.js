const resources = [];

const createResource = (data) => {
  const newResource = { id: resources.length + 1, ...data };
  resources.push(newResource);
  return newResource;
};

module.exports = { createResource };
