import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Forms from "./forms/index";
import { useState } from "react";
import "./TourSelect.css";

export default function TourSelect({
  data,
  handleChange,
  error,
  setData,
  token,
  setActive,
  loading,
  setLoading,
  toggle,
  setToggle,
  setActiveStep
}) {
  const [tour, setTour] = useState("");

  const handleChangeTour = (event) => {
    setTour(event.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      padding="10px 40px"
    >
      <Typography
        margin="30px 0"
        fontSize={20}
        fontWeight="bold"
        sx={{ color: "#000" }}
      >
        تور خود را انتخاب کنید
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
      >
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">انتخاب تور</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tour}
            label="انتخاب تور"
            onChange={handleChangeTour}
          >
            <MenuItem value="کربلا">کربلا</MenuItem>
          </Select>
        </FormControl>

        {tour === "کربلا" && (
          <Typography mt={4} fontSize={18}>
            از آنجا که زیارت آداب مشخصی دارد مبنای ما بر صحت اطلاعات وارد شده
            توسط شما صداقت شماست ولی طبیعی است افرادی که واجد شرایط بودن خود را
            بتوانند احراز کنند در اولویت قرار خواهند داشت.
          </Typography>
        )}

        {tour && (
          <Box
            margin="30px 0"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            gap={5}
            // width="100%"
          >
            <Box>
              <Typography
                fontSize={20}
                fontWeight="bold"
                sx={{ color: "#000" }}
              >
                تور را برای چه کسی می خواهید؟
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <Typography
                onClick={() => {
                  setActive((prev) => prev + 1);
                  setToggle("forMe");
                  setActiveStep((prev) => prev + 1)
                }}
                className={`for-me ${toggle === "forMe" ? "active" : ""}`}
              >
                برای خودم
              </Typography>
              <Typography
                onClick={() => {
                  setActive((prev) => prev + 1);
                  setToggle("forOthers");
                  setActiveStep((prev) => prev + 1)
                }}
                className={`for-others ${
                  toggle === "forOthers" ? "active" : ""
                }`}
              >
                برای دیگری
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
