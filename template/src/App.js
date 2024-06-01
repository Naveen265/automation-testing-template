import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);
  const [hobbies, setHobbies] = useState({
    reading: false,
    traveling: false,
    cooking: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!gender) newErrors.gender = "Please select a gender";
    if (!terms) newErrors.terms = "You must accept the terms and conditions";
    if (!Object.values(hobbies).some(Boolean)) {
      newErrors.hobbies = "Please select at least one hobby";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSuccess(true);
    }
  };

  const handleHobbyChange = (event) => {
    const { name, checked } = event.target;
    setHobbies((prevHobbies) => ({
      ...prevHobbies,
      [name]: checked,
    }));
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>
        <div>
          <label>Hobbies:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="reading"
                checked={hobbies.reading}
                onChange={handleHobbyChange}
              />{" "}
              Reading
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="traveling"
                checked={hobbies.traveling}
                onChange={handleHobbyChange}
              />{" "}
              Traveling
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="cooking"
                checked={hobbies.cooking}
                onChange={handleHobbyChange}
              />{" "}
              Cooking
            </label>
          </div>
          {errors.hobbies && <p style={{ color: "red" }}>{errors.hobbies}</p>}
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div>
          <h3>Do you accept the Terms</h3>
        </div>
        <a style={{ display:"block", marginBottom: "10px" }} href="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXJzanZ0d2p1cXFyamdqY2JxOXhpbXc1MGcxMjU2N3ZxbGtncXEyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RM5Qvo5I4SYMtXzRpI/giphy.webp">Teams&Conditions</a>
          <label>
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            I accept the terms and conditions
          </label>
          {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {success && (
        <div style={{ color: "green" }}>
          <p>Form submitted successfully!</p>
        </div>
      )}
    </div>
  );
}

export default App;
