import { useState } from "react";
import RegisterCode from "../components/RegisterCode";
import RegisterPhone from "../components/RegisterPhone";
import TourSelect from "../components/TourSelect";
import Welcome from "../components/Welcome";
import { validateInput } from "../utils/validateForms";

export default function HomePage() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({})
  const [data, setData] = useState({
    phone: "",
    code: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(validateInput(name, value))
    setData({ ...name, [name]: value });
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
    />,
    <TourSelect
      setActive={setActive}
      handleChange={handleChange}
      data={data}
    />,
  ];

  return <div>{componentLists[active]}</div>;
}
