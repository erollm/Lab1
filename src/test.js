import React, { useState, useEffect } from "react";
import axios from "axios";

const test = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newRecord, setNewRecord] = useState({ name: "", age: "", email: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/records"); // Replace with your Laravel API endpoint
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createRecord = async () => {
    try {
      const response = await axios.post("/api/records", newRecord); // Replace with your Laravel API endpoint
      setData([...data, response.data]);
      setNewRecord({ name: "", age: "", email: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRecord = async (id) => {
    try {
      await axios.delete(`/api/records/${id}`); // Replace with your Laravel API endpoint
      setData(data.filter((record) => record.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateRecord = async (id, updatedRecord) => {
    try {
      const response = await axios.put(`/api/records/${id}`, updatedRecord); // Replace with your Laravel API endpoint
      setData(
        data.map((record) => (record.id === id ? response.data : record))
      );
      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const editRecord = (id) => {
    setEditingId(id);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id}>
              {editingId === record.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={record.name}
                      onChange={(e) => handleRecordInputChange(record.id, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="age"
                      value={record.age}
                      onChange={(e) => handleRecordInputChange(record.id, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={record.email}
                      onChange={(e) => handleRecordInputChange(record.id, e)}
                    />
                  </td>
                  <td>
                    <button onClick={() => updateRecord(record.id, record)}>
                      Save
                    </button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{record.name}</td>
                  <td>{record.age}</td>
                  <td>{record.email}</td>
                  <td>
                    <button onClick={() => editRecord(record.id)}>Edit</button>
                    <button onClick={() => deleteRecord(record.id)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newRecord.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newRecord.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newRecord.email}
          onChange={handleInputChange}
        />
        <button onClick={createRecord}>Create</button>
      </div>
    </div>
  );
};

export default test;
