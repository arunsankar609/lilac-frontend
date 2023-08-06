import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const CourseCreation = () => {
  const navigate = useNavigate();
  const [documentFields, setDocumentFields] = useState([{ id: 1, value: "" }]);
  const [specializationFields, setSpecializationFields] = useState([
    { id: 1, value: "" },
  ]);

  const [durationFields, setDurationFields] = useState([{ id: 1, value: "" }]);
  const [formData, setFormData] = useState({
    additionalInfoSelectField: "",
    servicesSelectField: "",
    affiliationFields: [{ id: 1, value: "" }],
    entranceFields: [{ id: 1, value: "" }],
    documentFields: [{ id: 1, value: "" }],
    specializationFields: [{ id: 1, value: "" }],
    intakeSelectField: "",
    durationFields: [{ id: 1, value: "" }],
    courseTagSelectField: "",
    descriptionFields: "",
    courseTagDescription: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    additionalInfoSelectField: "",
    servicesSelectField: "",
    affiliationFields: [],
    entranceFields: [],
    documentFields: [],
    specializationFields: [],
    intakeSelectField: "",
    durationFields: [],
    courseTagSelectField: "",
    courseTagDescription: "",
  });

  const handleSubmit = () => {
    const {
      additionalInfoSelectField,
      servicesSelectField,
      affiliationFields,
      entranceFields,
      documentFields,
      specializationFields,
      intakeSelectField,
      durationFields,
      courseTagSelectField,
      courseTagDescription,
    } = formData;

    setValidationErrors({
      additionalInfoSelectField: "",
      servicesSelectField: "",
      affiliationFields: [],
      entranceFields: [],
      documentFields: [],
      specializationFields: [],
      intakeSelectField: "",
      durationFields: [],
      courseTagSelectField: "",
      courseTagDescription: "",
    });

    let isValid = true;

    if (formData.additionalInfoSelectField === "") {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        additionalInfoSelectField: "This Admission field is required.",
      }));
      isValid = false;
    }
    if (formData.servicesSelectField === "") {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        servicesSelectField: "This Services field is required.",
      }));
      isValid = false;
    }
    if (formData.affiliationFields.value === "") {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        affiliationFields: "Add atleast one Affiliation.",
      }));
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const formValuesString = `
      Additional Info Select Field: ${additionalInfoSelectField}
      Services Select Field: ${servicesSelectField}
      Affiliation Fields: ${JSON.stringify(affiliationFields)}
      Entrance Fields: ${JSON.stringify(entranceFields)}
      Document Fields: ${JSON.stringify(documentFields)}
      Specialization Fields: ${JSON.stringify(specializationFields)}
      Intake Select Field: ${intakeSelectField}
      Duration Fields: ${JSON.stringify(durationFields)}
      Course Tag Select Field: ${courseTagSelectField}
      Course Tag Description: ${courseTagDescription}
    `;
    console.log(formValuesString);
    alert(formValuesString);
    //****if you want get submitted data- axios.get('http://localhost:8080/api/v1/users/getcourses')*****//
    axios
      .post("http://localhost:8080/api/v1/users/courses", formData)
      .then((response) => {
        toast.success("Course Details added to DB successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    setFormData({
      additionalInfoSelectField: "",
      servicesSelectField: "",
      affiliationFields: [{ id: 1, value: "" }],
      entranceFields: [{ id: 1, value: "" }],
      documentFields: [{ id: 1, value: "" }],
      specializationFields: [{ id: 1, value: "" }],
      intakeSelectField: "",
      durationFields: [{ id: 1, value: "" }],
      courseTagSelectField: "",
      courseTagDescription: "",
      descriptionFields: "",
    });
    navigate("/post");
  };

  const [descriptionFields, setDescriptionFields] = useState([""]);

  const handleAddDocumentField = () => {
    setDocumentFields((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, value: "" },
    ]);
  };

  const handleRemoveDocumentField = (id) => {
    setDocumentFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );
  };

  const handleAddSpecializationField = () => {
    setSpecializationFields((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, value: "" },
    ]);
  };

  const handleRemoveSpecializationField = (id) => {
    setSpecializationFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );
  };

  const handleDocumentChange = (id, value) => {
    const updatedFields = documentFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setDocumentFields(updatedFields);

    setFormData((prevFormData) => ({
      ...prevFormData,
      documentFields: updatedFields,
    }));
  };

  const handleSpecializationChange = (id, value) => {
    const updatedFields = specializationFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setSpecializationFields(updatedFields);

    setFormData((prevFormData) => ({
      ...prevFormData,
      specializationFields: updatedFields,
    }));
  };

  const [entranceFields, setEntranceFields] = useState([{ id: 1, value: "" }]);

  const handleAddEntranceField = () => {
    setEntranceFields((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, value: "" },
    ]);
  };

  const handleRemoveEntranceField = (id) => {
    setEntranceFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );
  };

  const handleEntranceChange = (id, value) => {
    const updatedFields = entranceFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setEntranceFields(updatedFields);

    setFormData((prevFormData) => ({
      ...prevFormData,
      entranceFields: updatedFields,
    }));
  };
  const [affiliationFields, setAffiliationFields] = useState([
    { id: 1, value: "" },
  ]);

  const handleAddAffiliationField = () => {
    setAffiliationFields((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, value: "" },
    ]);
  };
  const handleAffiliationChange = (id, value) => {
    const updatedFields = affiliationFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setAffiliationFields(updatedFields);

    setFormData((prevFormData) => ({
      ...prevFormData,
      affiliationFields: updatedFields,
    }));
  };

  const handleRemoveAffiliationField = (id) => {
    setAffiliationFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );
  };

  const handleAddDurationField = () => {
    setDurationFields((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, value: "" },
    ]);
  };

  const handleRemoveDurationField = (id) => {
    setDurationFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );
  };

  const handleDurationChange = (id, value) => {
    const updatedFields = durationFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setDurationFields(updatedFields);

    setFormData((prevFormData) => ({
      ...prevFormData,
      durationFields: updatedFields,
    }));
  };

  const handleCourseTagDescriptionChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      courseTagDescription: value,
    }));
  };

  return (
    <div>
      <div className="flex justify-around border-b p-2 border-gray-300 ">
        <div className="flex mr-48">
          <h2 className="font-semibold text-2xl text-gray-800">
            Course Creation
          </h2>
          <span className="bg-gray-200 text-gray-700 rounded-md mx-4 my-2">
            <span className="m-3">Step 2 of 4</span>
          </span>
        </div>
        <div className="flex">
          <button
            onClick={handleSubmit}
            className="bg-blue-950 text-white rounded-2xl flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
              />
            </svg>
            <span className="m-3">Save as Draft</span>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center m-10 space-x-12  line-through-center">
        <div className="flex items-center justify-center flex-col ">
          <span className="bg-blue-200 rounded-3xl ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="white"
              className="w-10 h-10 m-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </span>
          <span>Basic Information</span>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <span className="bg-blue-200 rounded-3xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="white"
              className="w-10 h-10 m-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </span>

          <span>Additional Information</span>
        </div>
        <div className="flex items-center justify-center flex-col">
          <span className="bg-blue-200 rounded-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 m-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>
          </span>
          <span>Eligibility and Syllabus</span>
        </div>
        <div className="flex items-center justify-center flex-col">
          <span className="bg-blue-200 rounded-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 m-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </span>
          <span>Scholar ship</span>
        </div>
      </div>
      <div className="ml-56">
        <h1 className="font-semibold text-3xl">Additonal information</h1>
      </div>

      <div className="ml-56 grid grid-cols-2 justify-center">
        <div className="flex flex-col mt-3">
          <label>Admissions *</label>
          <Select
            label="Select Option"
            name="additionalInfoSelectField"
            id="additionalInfoSelectField"
            sx={{ width: "80%", height: "40px" }}
            value={formData.additionalInfoSelectField} // Add this line
            onChange={(e) =>
              setFormData({
                ...formData,
                additionalInfoSelectField: e.target.value,
              })
            }
          >
            <MenuItem value="Admissions 1">Admissions 1</MenuItem>
            <MenuItem value="Admissions 2">Admissions 2</MenuItem>
            <MenuItem value="Admissions 3">Admissions 3</MenuItem>
          </Select>

          {validationErrors.additionalInfoSelectField && (
            <span className="text-red-500 mt-1">
              {validationErrors.additionalInfoSelectField}
            </span>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label>Services *</label>
          <Select
            label="Select Option"
            name="additionalInfoSelectField"
            id="additionalInfoSelectField"
            sx={{ width: "80%", height: "40px" }}
            value={formData.servicesSelectField}
            onChange={(e) =>
              setFormData({ ...formData, servicesSelectField: e.target.value })
            }
          >
            <MenuItem value="Services 1">Services 1</MenuItem>
            <MenuItem value="Services 2">Services 2</MenuItem>
            <MenuItem value="Services 3">Services 3</MenuItem>
          </Select>
          {validationErrors.servicesSelectField && (
            <span className="text-red-500 mt-1">
              {validationErrors.servicesSelectField}
            </span>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label>Course Affiliation *</label>
          {affiliationFields.map((field, index) => (
            <div
              key={field.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <input
                className="w-[80%] h-14 border border-gray-300"
                value={field.value}
                onChange={(e) =>
                  handleAffiliationChange(field.id, e.target.value)
                }
              />
              {validationErrors.affiliationFields && (
                <span className="text-red-500 mt-1">
                  {validationErrors.affiliationFields}
                </span>
              )}

              {index === 0 ? (
                <span
                  className="bg-blue-300 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                  onClick={handleAddAffiliationField}
                >
                  +
                </span>
              ) : (
                <span
                  className="bg-red-500 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                  onClick={() => handleRemoveAffiliationField(field.id)}
                >
                  -
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-3">
          <label>Entrance required *</label>
          {entranceFields.map((field, index) => (
            <div
              key={field.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <input
                className="w-[80%] h-14 border border-gray-300"
                value={field.value}
                onChange={(e) => handleEntranceChange(field.id, e.target.value)}
              />
              {index === 0 ? (
                <span
                  className="bg-blue-300 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                  onClick={handleAddEntranceField}
                >
                  +
                </span>
              ) : (
                <span
                  className="bg-red-500 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                  onClick={() => handleRemoveEntranceField(field.id)}
                >
                  -
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-3">
          <label>Documents *</label>
          {documentFields.map((field, index) => (
            <div
              key={field.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <input
                className="w-[80%] h-14 border border-gray-300"
                value={field.value}
                onChange={(e) => handleDocumentChange(field.id, e.target.value)}
              />
              {index === 0 ? (
                <span
                  className="bg-blue-300 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                  onClick={handleAddDocumentField}
                >
                  +
                </span>
              ) : (
                <span
                  className="bg-red-500 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                  onClick={() => handleRemoveDocumentField(field.id)}
                >
                  -
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-3">
          <label>Specialization *</label>
          {specializationFields.map((field, index) => (
            <div
              key={field.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <input
                className="w-[80%] h-14 border border-gray-300"
                value={field.value}
                onChange={(e) =>
                  handleSpecializationChange(field.id, e.target.value)
                }
              />
              {index === 0 ? (
                <span
                  className="bg-blue-300 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                  onClick={handleAddSpecializationField}
                >
                  +
                </span>
              ) : (
                <span
                  className="bg-red-500 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                  onClick={() => handleRemoveSpecializationField(field.id)}
                >
                  -
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold ml-56  mt-5  text-xl">Intakes</h1>
        <div className="ml-56 grid grid-cols-2 m-6 justify-center bg-slate-100">
          <div className="flex flex-col mt-3 mx-2">
            <label>Intake *</label>
            <Select
              label="Select Option"
              name="additionalInfoSelectField"
              id="additionalInfoSelectField"
              value={formData.intakeSelectField}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  intakeSelectField: e.target.value,
                })
              }
              sx={{ width: "80%", height: "40px", marginTop: "10px" }}
            >
              <MenuItem value="Intake1">Intake 1</MenuItem>
              <MenuItem value="Intake2">Intake 2</MenuItem>
              <MenuItem value="Intake3">Intake 3</MenuItem>
            </Select>
          </div>
          <div className="flex flex-col mt-3 mx-4 my-3">
            <label>Duration *</label>
            {durationFields.map((field, index) => (
              <div
                key={field.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <input
                  className="w-[80%] h-14 border border-gray-300 "
                  value={field.value}
                  onChange={(e) =>
                    handleDurationChange(field.id, e.target.value)
                  }
                />
                {index === 0 ? (
                  <span
                    className="bg-blue-300 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                    onClick={handleAddDurationField}
                  >
                    +
                  </span>
                ) : (
                  <span
                    className="bg-red-500 h-14 w-14 flex items-center justify-center text-xl cursor-pointer"
                    onClick={() => handleRemoveDurationField(field.id)}
                  >
                    -
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <span className="bg-blue-200 text-blue-950 font-medium rounded-2xl h-4 w-10 ml-56">
          <span className="m-3 items-center">+Add Row</span>
        </span>
      </div>
      <div className="">
        <h1 className="font-semibold ml-56 mt-5 text-xl">Course Tag</h1>
        <div className="ml-56 grid grid-cols-2 m-6 justify-center bg-slate-100">
          <div className="flex flex-col mt-3 mx-2">
            <label>Tag </label>
            <select
              value={formData.courseTagSelectField}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  courseTagSelectField: e.target.value,
                })
              }
              name="courseSelectionField"
              id="courseSelectionField"
              style={{ width: "80%", height: "40px", marginTop: "10px" }}
            >
              <option value="Tag1">Tag 1</option>
              <option value="Tag2">Tag 2</option>
              <option value="Tag3">Tag 3</option>
            </select>
          </div>
          <div className="flex flex-col mt-3 mx-4 my-3">
            <label>Description </label>
            {descriptionFields.map((field, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <input
                  className="w-[80%] h-14 border border-gray-300"
                  value={formData.courseTagDescription}
                  onChange={handleCourseTagDescriptionChange}
                />
              </div>
            ))}
          </div>
        </div>
        <span className="bg-blue-200 text-blue-950 font-medium rounded-2xl h-4 w-10 ml-56">
          <span className="m-3 items-center">+Add Row</span>
        </span>
      </div>

      <div className="flex justify-end p-4 m-5">
        <button className="border border-gray-600 mx-1 w-24">
          <span className="m-4">Previous</span>
        </button>
        <Link to="/post">
          <button className="bg-blue-900 text-white mx-2 w-24">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCreation;
