import React from 'react';

const ViewShelter = () => {
    const styles = {
        dashboardContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontFamily: 'Roboto, sans-serif',
        },
        dashboardCard: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
        },
        dashboardTitle: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '20px',
            textTransform: 'uppercase',
        },
        dashboardButton: {
            padding: '15px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease-in-out',
        },
        dashboardButtonHover: {
            backgroundColor: '#45a049',
        },
    };

    return (
        <div style={styles.dashboardContainer}>
            <div style={styles.dashboardCard}>
                <h2 style={styles.dashboardTitle}>Shelter Details</h2>
                <p>Location: XYZ</p>
                <p>Capacity: 100</p>
                <button
                    style={styles.dashboardButton}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = styles.dashboardButtonHover.backgroundColor)}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = styles.dashboardButton.backgroundColor)}
                >
                    View Shelter
                </button>
            </div>
        </div>
    );
};

export default ViewShelter;
