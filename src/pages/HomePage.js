import { useState } from "react";
import RegisterCode from "../components/RegisterCode";
import RegisterPhone from "../components/RegisterPhone";
import TourSelect from "../components/TourSelect";
import Welcome from "../components/Welcome";
import { validateInput } from "../utils/validateForms";
import karbala from "../images/karbala.jpg"
import "./HomePage.css"
import { Container } from "@mui/material";
import SignUpSuccess from "../components/SignUpSuccess";

export default function HomePage() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({})
  const [token, setToken] = useState('')
  const [data, setData] = useState({
    phone: "",
    name: "",
    lastname: "",
    gender: "",
    passengers_count: 1,
    passengers_relationship: "",
    passport: "",
    province_id: 0,
    city_id: 0,
    village: "",
    preparation_for_travel: null,
    travel_preparation_time: "",
    ability_to_pay: "",
    description: "",
    other: false,
    other_name:"",
    other_phone: "",
    other_socialـposition: "",
    other_city: "",
    other_relationship: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(validateInput({name, value}))
    setData({ ...data, [name]: value });
  };

  const componentLists = [
    <Welcome
      setActive={setActive}
    />,
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
    />,
    <SignUpSuccess 
      setActive={setActive}
    />
  ];

  return (
    <Container maxWidth="lg"  className="home-box">
      <img src={karbala} alt='karbala' />
      <Container className="welcome-page" maxWidth="md">
        {componentLists[active]}
      </Container>
    </Container>
  )
}
