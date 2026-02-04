import React, { useState } from "react";
import "./Services.css";

function Services() {

  // Dummy land data (UNCHANGED)
  const landData = {
    Anantapur: {
      "566": {
        village: "Rudrampeta",
        owner: "Ramesh Kumar",
        area: "2.5 Acres",
        type: "Agricultural",
        status: "Verified",
        history: [
          { year: 2010, owner: "Suresh Reddy" },
          { year: 2016, owner: "Mahesh Kumar" },
          { year: 2022, owner: "Ramesh Kumar" }
        ]
      },
      "301": {
        village: "Kakkalapalli",
        owner: "Anil Reddy",
        area: "1.8 Acres",
        type: "Residential",
        status: "Under Dispute",
        history: [
          { year: 2014, owner: "Prakash" },
          { year: 2020, owner: "Anil Reddy" }
        ]
      }
    },
    Tadipatri: {
      "401": {
        village: "Yadiki",
        owner: "Lakshmi Devi",
        area: "3.0 Acres",
        type: "Agricultural",
        status: "Verified",
        history: [
          { year: 2008, owner: "Narayana" },
          { year: 2019, owner: "Lakshmi Devi" }
        ]
      }
    }
  };

  // States (existing)
  const [mandal, setMandal] = useState("");
  const [surveyNo, setSurveyNo] = useState("");
  const [record, setRecord] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // 🔹 NEW STATE (Activity Log ONLY)
  const [activityLog, setActivityLog] = useState([]);

  // Submit handler (LOGIC UNCHANGED + log added)
  const handleSubmit = () => {
    const cleanSurvey = surveyNo.trim();
    const data = landData[mandal]?.[cleanSurvey];

    if (data) {
      setRecord(data);
      setNotFound(false);

      // 🔹 ADD ACTIVITY LOG (NEW FEATURE)
      const today = new Date().toLocaleDateString("en-GB");
      setActivityLog(prev => [
        `You searched land record on ${today} (Mandal: ${mandal}, Survey: ${cleanSurvey})`,
        ...prev
      ]);
    } else {
      setRecord(null);
      setNotFound(true);
    }
  };

  return (
    <div className="services-page">

      <h1>Land Record Services – Anantapuram District</h1>

      {/* Search Section (UNCHANGED) */}
      <div className="location-box">
        <h2>Search Land Record</h2>

        <select
          value={mandal}
          onChange={(e) => {
            setMandal(e.target.value);
            setSurveyNo("");
            setRecord(null);
            setNotFound(false);
          }}
        >
          <option value="">Select Mandal</option>
          <option value="Anantapur">Anantapur</option>
          <option value="Tadipatri">Tadipatri</option>
        </select>

        <input
          type="text"
          placeholder="Enter Survey Number"
          value={surveyNo}
          disabled={!mandal}
          onChange={(e) => {
            const value = e.target.value.trim();
            if (/^\d{0,5}$/.test(value)) {
              setSurveyNo(value);
            }
          }}
        />

        <button
          disabled={!mandal || !surveyNo}
          onClick={handleSubmit}
        >
          View Record
        </button>
      </div>

      {/* No Record */}
      {notFound && (
        <p className="not-found">
          ❌ No land record found
        </p>
      )}

      {/* Record Details (UNCHANGED) */}
      {record && (
        <div className="record-box">
          <h2>Land Record Details</h2>

          <p><strong>Mandal:</strong> {mandal}</p>
          <p><strong>Village:</strong> {record.village}</p>
          <p><strong>Survey Number:</strong> {surveyNo}</p>
          <p><strong>Owner:</strong> {record.owner}</p>
          <p><strong>Land Area:</strong> {record.area}</p>
          <p><strong>Land Type:</strong> {record.type}</p>

          <p>
            <strong>Status:</strong>{" "}
            <span className={`status ${record.status.replace(" ", "-")}`}>
              {record.status}
            </span>
          </p>

          <h3>Ownership History</h3>
          <ul className="history">
            {record.history.map((h, index) => (
              <li key={index}>
                {h.year} – {h.owner}
              </li>
            ))}
          </ul>

          <button onClick={() => window.print()}>
            Download PDF
          </button>
        </div>
      )}

      {/* 🔹 Activity Log (NEW – DOES NOT AFFECT ANYTHING) */}
      {activityLog.length > 0 && (
        <div className="activity-box">
          <h3>Activity Log</h3>
          <ul>
            {activityLog.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default Services;
