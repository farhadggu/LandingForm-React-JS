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
  setLoading
}) {
  const [tour, setTour] = useState("");
  const [toggle, setToggle] = useState("");

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
    >
      <Typography
        margin="30px 0"
        fontSize={24}
        fontWeight="bold"
        sx={{ color: "#b7328f" }}
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
                fontSize={24}
                fontWeight="bold"
                sx={{ color: "#b7328f" }}
              >
                تور را برای چه کسی می خواهید؟
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <Typography
                onClick={() => setToggle("forMe")}
                className={`for-me ${toggle === "forMe" ? "active" : ""}`}
              >
                برای خودم
              </Typography>
              <Typography
                onClick={() => setToggle("forOthers")}
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
      {tour && (
        <Forms
          data={data}
          handleChange={handleChange}
          toggle={toggle}
          error={error}
          setData={setData}
          token={token}
          setActive={setActive}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </Box>
  );
}
