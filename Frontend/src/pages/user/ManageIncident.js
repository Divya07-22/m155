import React, { useState } from 'react';
import axios from 'axios';

const ManageIncident = () => {
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/incidents', {
        incidentType,
        description,
        priority,
      });
      if (response.status === 201) {
        setSuccessMessage('Incident submitted successfully!');
        setIncidentType('');
        setDescription('');
        setPriority('');
      }
    } catch (error) {
      console.error('Error submitting incident:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Manage Incident</h2>
        {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Incident Type:</label>
            <input
              type="text"
              value={incidentType}
              onChange={(e) => setIncidentType(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Priority Level:</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              style={styles.select}
              required
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit Incident
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    marginBottom: '10px',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    marginBottom: '10px',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
    minHeight: '100px',
  },
  select: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    marginBottom: '10px',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
  },
  submitButton: {
    padding: '14px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease-in-out',
  },
  successMessage: {
    color: 'green',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
};

export default ManageIncident;
