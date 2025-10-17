import React, { useEffect, useState } from "react";



function App() {

  const [patients, setPatients] = useState([]);

  const [editId, setEditId] = useState(null);

  const [editFirstname, setEditFirstname] = useState("");



  const fetchPatients = async () => {

    const res = await fetch("http://localhost:5000/patients");

    const data = await res.json();

    setPatients(data);

  };



  useEffect(() => {

    fetchPatients();

  }, []);



  const handleUpdate = async (id) => {

    await fetch(`http://localhost:5000/patients/${id}`, {

      method: "PUT",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ firstname: editFirstname }),

    });

    setEditId(null);

    fetchPatients();

  };



  return (

    <div style={{ fontFamily: "Poppins, sans-serif", padding: "20px" }}>

      <h2 style={{ textAlign: "center" }}>Patient Records </h2>

      <table

        style={{

          borderCollapse: "collapse",

          width: "60%",

          margin: "20px auto",

          textAlign: "center",

          border: "1px solid #ccc",

        }}

      >

        <thead>

          <tr style={{ background: "#4CAF50", color: "white" }}>

            <th>ID</th>

            <th>Firstname</th>

            <th>Lastname</th>

            <th>Gender</th>

            <th>Age</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {patients.map((p) => (

            <tr key={p.id} style={{ borderBottom: "1px solid #ccc" }}>

              <td>{p.id}</td>

              <td>

                {editId === p.id ? (

                  <input

                    type="text"

                    value={editFirstname}

                    onChange={(e) => setEditFirstname(e.target.value)}

                    style={{

                      padding: "5px",

                      borderRadius: "4px",

                      border: "1px solid #aaa",

                      textAlign: "center",

                    }}

                  />

                ) : (

                  p.firstname

                )}

              </td>

              <td>{p.lastname}</td>

              <td>{p.gender}</td>

              <td>{p.age}</td>

              <td>

                {editId === p.id ? (

                  <button

                    onClick={() => handleUpdate(p.id)}

                    style={{

                      background: "#4CAF50",

                      color: "white",

                      border: "none",

                      borderRadius: "5px",

                      padding: "5px 10px",

                    }}

                  >

                    Submit

                  </button>

                ) : (

                  <button

                    onClick={() => {

                      setEditId(p.id);

                      setEditFirstname(p.firstname);

                    }}

                    style={{

                      background: "#2196F3",

                      color: "white",

                      border: "none",

                      borderRadius: "5px",

                      padding: "5px 10px",

                    }}

                  >

                    Change

                  </button>

                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}



export default App;







          
