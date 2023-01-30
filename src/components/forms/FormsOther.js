import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../../utils/services";
import "./Forms.css";
import FormsOtherFirst from "./FormsOtherFirst";
import FormsOtherSecond from "./FormsOtherSecond";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FormsOther({
  data,
  error,
  handleChange,
  setData,
  province,
  allCity,
  searchCity,
  token,
  setActive,
  loading,
  setLoading,
  setActiveStep
}) {
  const [next, setNext] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault();
    // setData({ ...data, other: true });
    // axios
    //   .post(`${baseUrl}/api/v1/toor`, data, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json", 
    //       Accept: "application/json",
    //     },
    //   })
    //   .then((resp) => {
    //     toast.success(resp.data.message);
    //     setActive((prev) => prev + 1);
    //   })
    //   .catch((error) => {
    //     toast.error(error.response.data.message);
    //   });
  };

  const componentLists = [
    <FormsOtherFirst
        data={data}
        handleChange={handleChange}
        error={error}
        MenuProps={MenuProps}
        setData={setData}
        setNext={setNext}
        setActiveStep={setActiveStep}
      />,

      <FormsOtherSecond 
        data={data}
        handleChange={handleChange}
        error={error}
        MenuProps={MenuProps}
        setData={setData}
        searchCity={searchCity}
        allCity={allCity}
        province={province}
        loading={loading}
        setNext={setNext}
        setActiveStep={setActiveStep}
        setActive={setActive}
      />
  ]

  return (
    <>
      {componentLists[next]}
    </>
  );
}
