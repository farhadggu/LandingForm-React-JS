import axios from "axios";
import { useEffect, useState } from "react";
import "./Forms.css";
import FormsMe from "./FormsMe";
import FormsOther from "./FormsOther";


export default function Forms({
  toggle,
  data,
  handleChange,
  error,
  setData,
  token,
  setActive,
  loading,
  setLoading,
  setActiveStep,
  allProvinceCityData,
  setAllProvinceCityData,
  active
}) {
  const [province, setProvince] = useState();
  const [allCity, setAllCity] = useState();

  const searchCity = () => {
    return allProvinceCityData
      ?.filter((item) => item.id === data.province_id)
      .map((item) => setAllCity(item.cities));
  };

  useEffect(() => {
    searchCity()
  }, [data.province_id])
  
  if (toggle === "forMe") {
    return (
      <FormsMe
        error={error}
        data={data}
        handleChange={handleChange}
        setData={setData}
        searchCity={searchCity}
        province={province}
        allCity={allCity}
        token={token}
        setActive={setActive}
        setLoading={setLoading}
        loading={loading}
        setActiveStep={setActiveStep}
      />
    );
  } else if (toggle === "forOthers") {
    return (
      <FormsOther
        error={error}
        data={data}
        handleChange={handleChange}
        setData={setData}
        searchCity={searchCity}
        province={province}
        allCity={allCity}
        token={token}
        setActive={setActive}
        setLoading={setLoading}
        loading={loading}
        setActiveStep={setActiveStep}
      />
    );
  }
}
