import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        // Simulate fetching user data (you can replace it with an API call)
        setUserData({
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Profile:', userData);
        // Here, you can send the updated user data to the server
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>User Profile</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={userData.phone}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <button type="submit" style={styles.submitButton}>Update Profile</button>
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
};

export default UserProfile;
