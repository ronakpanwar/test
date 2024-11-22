import React, { useState } from 'react';
import axios from 'axios';

const ApiForm = () => {
    const [input, setInput] = useState({
        data:'',
        file_b64:""
    }); 

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        setResponse(null);

       

        try {
          
            const parsedInput = JSON.parse(input);
            formData.append('data', JSON.stringify(parsedInput));
            
          
            const res = await axios.post('https://test-ecru-three-32.vercel.app/bfhl', {input}, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResponse(res.data);
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid input or server error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#333' }}>REST API Frontend</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <textarea
                    rows="5"
                    placeholder='Enter JSON: {"data": ["A", "2", "c"]}'
                    name='data'
                    value={input.data}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        marginBottom: '10px',
                    }}
                />
                
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#48CFCB',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {response && (
                <div>
                    <h2>Response</h2>
                    <pre
                        style={{
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            overflowX: 'auto',
                        }}
                    >
                        {JSON.stringify(response, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default ApiForm;
