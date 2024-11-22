import React, { useState } from 'react';
import axios from 'axios';

function ApiForm() {
  const [jsonInput, setJsonInput] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const response = await axios.post('https://test-ecru-three-32.vercel.app/bfhl', parsedInput);
      setResponseData(response.data);
    } catch (error) {
      alert('Invalid JSON or API error');
    }
  };

  const renderFilteredData = () => {
    if (!responseData) return null;
    return selectedFilters.map((filter) => (
      <div key={filter}>
        <strong>{filter}:</strong> {responseData[filter]?.join(', ') || 'N/A'}
      </div>
    ));
  };

  return (
    <div>
      <h1>Fullstack Challenge</h1>
      <textarea
        rows="5"
        cols="50"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter JSON input here'
      />
      <button onClick={handleSubmit}>Submit</button>

      {responseData && (
        <>
          <h2>Select Filters</h2>
          <select multiple onChange={(e) => setSelectedFilters([...e.target.selectedOptions].map(o => o.value))}>
            {Object.keys(responseData).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
          <h3>Filtered Response</h3>
          {renderFilteredData()}
        </>
      )}
    </div>
  );
}

export default ApiForm;