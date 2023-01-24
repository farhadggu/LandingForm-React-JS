import axios from "axios";
import { useEffect, useState } from "react";
import "./Forms.css";
import FormsMe from "./FormsMe";
import FormsOther from "./FormsOther";
import { baseUrl } from "../../utils/services";


export default function Forms({
  toggle,
  data,
  handleChange,
  error,
  setData,
  token,
  setActive,
  loading,
  setLoading
}) {
  const [allData, setAllData] = useState();
  const [province, setProvince] = useState();
  const [allCity, setAllCity] = useState();

  useEffect(() => {
    axios({
      url: `${baseUrl}/api/v1/province`,
      method: "get",
      data: null,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => {
        setAllData(resp.data.data);
        setProvince(resp.data.data.map((item) => item.province_name_fa));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const searchCity = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    allData
      ?.filter((item) => item.id === e.target.value + 1)
      ?.map((item) => setAllCity(item.cities));
  };


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
      />
    );
  }
}
