
import React from 'react';

const ViewVolunteers = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h2 style={styles.header}>View Volunteers</h2>
                <p style={styles.paragraph}>Here you can view all the volunteers and their details.</p>
                {/* Display volunteer data here */}
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
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    content: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '800px',
    },
    header: {
        textAlign: 'center',
        fontSize: '28px',
        marginBottom: '20px',
        color: '#333',
    },
    paragraph: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#555',
    },
};

export default ViewVolunteers;
