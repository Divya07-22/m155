import React, { useState, useEffect } from 'react';

const ViewDisaster = () => {
    const [disasters, setDisasters] = useState([]);

    useEffect(() => {
        // Simulate fetching disaster data (you can replace it with an API call)
        setDisasters([
            { id: 1, name: 'Flood', location: 'City A', severity: 'High' },
            { id: 2, name: 'Earthquake', location: 'City B', severity: 'Medium' },
        ]);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.disasterContainer}>
                <h2 style={styles.title}>View Disasters</h2>
                <ul style={styles.disasterList}>
                    {disasters.map((disaster) => (
                        <li key={disaster.id} style={styles.disasterItem}>
                            <h3 style={styles.disasterName}>{disaster.name}</h3>
                            <p style={styles.disasterDetails}>
                                Location: {disaster.location}<br />
                                Severity: {disaster.severity}
                            </p>
                        </li>
                    ))}
                </ul>
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
    disasterContainer: {
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
    disasterList: {
        listStyleType: 'none',
        padding: 0,
    },
    disasterItem: {
        backgroundColor: '#f9f9f9',
        padding: '15px',
        marginBottom: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    disasterName: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
    disasterDetails: {
        fontSize: '14px',
        color: '#666',
    },
};

export default ViewDisaster;
