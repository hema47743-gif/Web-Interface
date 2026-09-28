import React, { useState } from "react";
import "./FormValidation.css";

function FormValidation() {

  const [formData, setFormData] = useState({
    username: "",
    aadharName: "",
    aadharNumber: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    fatherName: "",
    course: "",
    collegeName: ""
  });

  const [photo, setPhoto] = useState(null);

  const [errors, setErrors] = useState({});


  /* ==========================================
     HANDLE INPUT CHANGE
  ========================================== */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  /* ==========================================
     HANDLE PHOTO
  ========================================== */

  const handlePhoto = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setPhoto(imageUrl);

    }
  };


  /* ==========================================
     RESET PHOTO
  ========================================== */

  const resetPhoto = () => {

    setPhoto(null);

  };


  /* ==========================================
     VALIDATE FORM
  ========================================== */

  const validateForm = () => {

    let newErrors = {};


    // Username
    if (!formData.username.trim()) {
      newErrors.username = true;
    }


    // Aadhaar Name
    if (!formData.aadharName.trim()) {
      newErrors.aadharName = true;
    }


    // Aadhaar Number
    if (!/^[0-9]{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = true;
    }


    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = true;
    }


    // Phone
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = true;
    }


    // Date of Birth
    if (!formData.dob) {
      newErrors.dob = true;
    }


    // Gender
    if (!formData.gender) {
      newErrors.gender = true;
    }


    // Address
    if (!formData.address.trim()) {
      newErrors.address = true;
    }


    // City
    if (!formData.city.trim()) {
      newErrors.city = true;
    }


    // State
    if (!formData.state) {
      newErrors.state = true;
    }


    // Pincode
    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = true;
    }


    // Photo
    if (!photo) {
      newErrors.photo = true;
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };


  /* ==========================================
     HANDLE SUBMIT
  ========================================== */

  const handleSubmit = (e) => {

    e.preventDefault();


    const isValid = validateForm();


    if (!isValid) {

      alert("Please fill all required fields correctly.");

      return;

    }


    alert("Form submitted successfully!");

    console.log("Form Data:", formData);

    console.log("Photo:", photo);

  };


  return (

    <div className="container">

      <h1>Registration Form</h1>


      <form onSubmit={handleSubmit}>


        {/* Username */}

        <label>
          Username <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.username ? "invalid" : ""}`}>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />

          <span className="required">*</span>

        </div>


        {/* Aadhaar Name */}

        <label>
          Aadhaar Name <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.aadharName ? "invalid" : ""}`}>

          <input
            type="text"
            name="aadharName"
            value={formData.aadharName}
            onChange={handleChange}
            placeholder="Enter Aadhaar name"
          />

          <span className="required">*</span>

        </div>


        {/* Aadhaar Number */}

        <label>
          Aadhaar Number <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.aadharNumber ? "invalid" : ""}`}>

          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            placeholder="Enter 12 digit Aadhaar number"
            maxLength="12"
          />

          <span className="required">*</span>

        </div>


        {/* Email */}

        <label>
          Email <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.email ? "invalid" : ""}`}>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />

          <span className="required">*</span>

        </div>


        {/* Phone */}

        <label>
          Phone Number <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.phone ? "invalid" : ""}`}>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter 10 digit phone number"
            maxLength="10"
          />

          <span className="required">*</span>

        </div>


        {/* Date of Birth */}

        <label>
          Date of Birth <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.dob ? "invalid" : ""}`}>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <span className="required">*</span>

        </div>


        {/* Gender */}

        <label>
          Gender <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.gender ? "invalid" : ""}`}>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >

            <option value="">Select Gender</option>

            <option value="Female">Female</option>

            <option value="Male">Male</option>

            <option value="Other">Other</option>

          </select>

          <span className="required">*</span>

        </div>


        {/* Address */}

        <label>
          Address <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.address ? "invalid" : ""}`}>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
          ></textarea>

          <span className="required">*</span>

        </div>


        {/* City */}

        <label>
          City <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.city ? "invalid" : ""}`}>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
          />

          <span className="required">*</span>

        </div>


        {/* State */}

        <label>
          State <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.state ? "invalid" : ""}`}>

          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >

            <option value="">Select State</option>

            <option value="Tamil Nadu">Tamil Nadu</option>

            <option value="Kerala">Kerala</option>

            <option value="Karnataka">Karnataka</option>

            <option value="Andhra Pradesh">
              Andhra Pradesh
            </option>

            <option value="Telangana">Telangana</option>

          </select>

          <span className="required">*</span>

        </div>


        {/* Pincode */}

        <label>
          Pincode <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.pincode ? "invalid" : ""}`}>

          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Enter 6 digit pincode"
            maxLength="6"
          />

          <span className="required">*</span>

        </div>


        {/* Photo */}

        <label>
          Photo <span className="required">*</span>
        </label>

        <div className={`input-box ${errors.photo ? "invalid" : ""}`}>

          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto}
          />

          <span className="required">*</span>

        </div>


        <p className="photo-hint">
          Maximum: 500 × 500 pixels
        </p>


        {/* Photo Preview */}

        {photo && (

          <div className="photo-container">

            <img
              src={photo}
              alt="Preview"
              className="preview"
            />

            <button
              type="button"
              className="reset"
              onClick={resetPhoto}
            >
              Reset Photo
            </button>

          </div>

        )}


        {/* Father Name */}

        <label>
          Father Name
        </label>

        <div className="input-box">

          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter father name"
          />
        </div>
        {/* Course */}
        <label>
          Course
        </label>
        <div className="input-box">
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course"
          />
        </div>
        {/* College Name */}
        <label>
          College Name
        </label>
        <div className="input-box">
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            placeholder="Enter college name"
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default FormValidation;