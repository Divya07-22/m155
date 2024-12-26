



import React, { useState } from 'react';

const UpdateTaskStatus = () => {
    const [status, setStatus] = useState('');
    const [taskId, setTaskId] = useState(''); // Store task ID
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/tasks/update/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });

            const data = await response.json();

            if (response.status === 200) {
                setSuccessMessage('Task status updated successfully!');
                setErrorMessage('');
            } else {
                setSuccessMessage('');
                setErrorMessage(data.error || 'Failed to update task status.');
            }
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Error: ' + error.message);
        }
    };

    const styles = {
        dashboardContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontFamily: 'Roboto, sans-serif',
        },
        dashboardFormContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
            transition: 'transform 0.3s ease-in-out',
        },
        dashboardTitle: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '20px',
            textTransform: 'uppercase',
        },
        dashboardTextarea: {
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            fontSize: '16px',
            color: '#333',
            backgroundColor: '#f9f9f9',
            resize: 'vertical',
            transition: 'border-color 0.3s ease-in-out',
        },
        dashboardTextareaFocus: {
            borderColor: '#4CAF50',
            outline: 'none',
        },
        dashboardButton: {
            padding: '15px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%',
            transition: 'background-color 0.3s ease-in-out',
        },
        dashboardButtonHover: {
            backgroundColor: '#45a049',
        },
        successMessage: {
            color: 'green',
            marginTop: '10px',
        },
        errorMessage: {
            color: 'red',
            marginTop: '10px',
        },
    };

    return (
        <div style={styles.dashboardContainer}>
            <div style={styles.dashboardFormContainer}>
                <h2 style={styles.dashboardTitle}>Update Task Status</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Task ID"
                        value={taskId}
                        onChange={(e) => setTaskId(e.target.value)}
                        style={styles.dashboardTextarea}
                    />
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        style={styles.dashboardTextarea}
                    >
                        <option value="">Select Status</option>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <button
                        type="submit"
                        style={styles.dashboardButton}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.dashboardButtonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.dashboardButton.backgroundColor)}
                    >
                        Update Status
                    </button>
                </form>

                {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
                {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default UpdateTaskStatus;
