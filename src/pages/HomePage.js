import { useState } from "react";
import RegisterCode from "../components/RegisterCode";
import RegisterPhone from "../components/RegisterPhone";
import TourSelect from "../components/TourSelect";
import Welcome from "../components/Welcome";
import { validateInput } from "../utils/validateForms";
import karbala from "../images/karbala.jpg";
import "./HomePage.css";
import { Container } from "@mui/material";
import SignUpSuccess from "../components/SignUpSuccess";
import StepperForm from "../components/StepperForm";
import Forms from "../components/forms";
import FileDescription from "../components/FileDescription";
import AcceptRulesData from "../components/AcceptRulesData";
import { Box } from "@mui/system";

export default function HomePage() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [token, setToken] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [toggle, setToggle] = useState("forMe");
  const [allProvinceCityData, setAllProvinceCityData] = useState();
  const [images, setImages] = useState([]);
  const [data, setData] = useState({
    phone: "",
    name: "",
    lastname: "",
    gender: "",
    passengers_count: 1,
    passengers_relationship: "",
    passport: "",
    province_id: "",
    city_id: "",
    village: "",
    preparation_for_travel: null,
    travel_preparation_time: "",
    ability_to_pay: "",
    description: "",
    other: false,
    other_name: "",
    other_phone: "",
    other_socialـposition: "",
    other_city: "",
    other_relationship: "",
    files_url: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(validateInput({ name, value }));
    setData({ ...data, [name]: value });
  };

  const componentLists = [
    <Welcome setActive={setActive} />,
    <RegisterPhone
      setActive={setActive}
      handleChange={handleChange}
      data={data}
      loading={loading}
      setLoading={setLoading}
      error={error}
    />,
    <RegisterCode
      setActive={setActive}
      handleChange={handleChange}
      data={data}
      loading={loading}
      setLoading={setLoading}
      error={error}
      setToken={setToken}
      setActiveStep={setActiveStep}
    />,
    <TourSelect
      setActive={setActive}
      handleChange={handleChange}
      data={data}
      setData={setData}
      error={error}
      token={token}
      setLoading={setLoading}
      loading={loading}
      toggle={toggle}
      setToggle={setToggle}
      setActiveStep={setActiveStep}
    />,
    <Forms
      active={active}
      setActive={setActive}
      data={data}
      setData={setData}
      error={error}
      token={token}
      handleChange={handleChange}
      setLoading={setLoading}
      loading={loading}
      toggle={toggle}
      setActiveStep={setActiveStep}
      allProvinceCityData={allProvinceCityData}
      setAllProvinceCityData={setAllProvinceCityData}
    />,
    <FileDescription
      data={data}
      toggle={toggle}
      handleChange={handleChange}
      setActive={setActive}
      setActiveStep={setActiveStep}
      allProvinceCityData={allProvinceCityData}
      token={token}
      setData={setData}
      images={images}
      setImages={setImages}
    />,
    <AcceptRulesData
      data={data}
      toggle={toggle}
      setActive={setActive}
      setActiveStep={setActiveStep}
      allProvinceCityData={allProvinceCityData}
      images={images}
      setImages={setImages}
      setData={setData}
      token={token}
    />,
    <SignUpSuccess setActive={setActive} />,
  ];

  return (
    <Container maxWidth="lg" className="home-box">
      <img src={karbala} alt="karbala" />
      <Container className="welcome-box" style={{maxWidth: "calc(100% - 100px)"}}>
        <Box className="welcome-page-stepper">
          {active > 0 && <StepperForm activeStep={activeStep} toggle={toggle} />}
        </Box>
        <Box className="welcome-page">
          {componentLists[active]}
        </Box>
      </Container>
    </Container>
  );
}
