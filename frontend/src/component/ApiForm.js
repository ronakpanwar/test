import React, { useState } from 'react';
import axios from 'axios';

const ApiForm = () => {
    const [Input, setInput] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/bfhl', JSON.parse(Input));
            setResponse(res.data);
        } catch (error) {
            alert('Invalid input or server error');
        }
    };

    return (
        <div>
            <h1>REST API Frontend</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows="5"
                    placeholder='Enter JSON: {"data": ["A", "2", "c"]}'
                    value={Input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div>
                    <h2>Response</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ApiForm;
