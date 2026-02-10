import React, { useState } from "react";
import "./MainBody.css";

function MainBody() {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    college: "",
    course: "",
    gender: "",
    mentorName: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <main className="main-body">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rollNumber">Roll Number:</label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="college">College:</label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="AWS">AWS</option>
              <option value="Web Dev">Web Development</option>
              <option value="Cyber">Cyber Security</option>
              <option value="Software">Software Engineering</option>
            </select>
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChange}
                />{" "}
                Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mentorName">Mentor Name:</label>
            <input
              type="text"
              id="mentorName"
              name="mentorName"
              value={formData.mentorName}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default MainBody;