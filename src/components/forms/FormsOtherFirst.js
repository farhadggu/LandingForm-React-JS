import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

export default function FormsOtherFirst({
  data,
  handleChange,
  error,
  MenuProps,
  setData,
  setNext,
  setActiveStep
}) {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="forms-page"
    >
      <Typography component="h1">اطلاعات فرد معرفی کننده</Typography>
      <Grid
        container
        rowGap="30px"
        padding="0 10px 30px 30px"
        component="form"
        className="forms-box"
      >
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            required
            label="نام و نام خانوادگی فرد معرفی کننده"
            placeholder="نام و نام خانوادگی فرد معرفی کننده"
            type="text"
            name="other_name"
            value={data.other_name}
            onChange={handleChange}
            className="input-phone"
            helperText={`${error.hasError ? error.error : ""}`}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <TextField
            required
            label="تلفن همراه"
            placeholder="تلفن همراه"
            type="number"
            name="other_phone"
            value={data.other_phone}
            onChange={handleChange}
            className="input-phone"
            helperText={`${error.hasError ? error.error : ""}`}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <TextField
            required
            label="شهر معرفی کننده"
            placeholder="شهر معرفی کننده"
            type="text"
            name="other_city"
            value={data.other_city}
            onChange={handleChange}
            className="input-phone"
            helperText={`${error.hasError ? error.error : ""}`}
          />
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <FormControl sx={{ width: "87%" }}>
            <InputLabel id="demo-simple-select-label">
              جایگاه موقعیت اجتماعی
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.other_socialـposition}
              label="جایگاه موقعیت اجتماعی"
              name="other_socialـposition"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              MenuProps={MenuProps}
            >
              <MenuItem value="عادی">عادی</MenuItem>
              <MenuItem value="مسئول خیریه">مسئول خیریه</MenuItem>
              <MenuItem value="امام جماعت">امام جماعت</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <FormControl sx={{ width: "87%" }}>
            <InputLabel id="demo-simple-select-label">
              نسبت شما با فردی که معرفی می کنید
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.other_relationship}
              label="نسبت شما با فردی که معرفی می کنید"
              name="other_relationship"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              MenuProps={MenuProps}
            >
              <MenuItem value="همکار">همکار</MenuItem>
              <MenuItem value="همسایه">همسایه</MenuItem>
              <MenuItem value="هم محلی">هم محلی</MenuItem>
              <MenuItem value="خویشاوند">خویشاوند</MenuItem>
              <MenuItem value="سایر">سایر</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Button
          onClick={() => {
            setNext((prev) => prev + 1)
            setActiveStep((prev) => prev + 1)
          }}
          variant="contained"
          sx={{
            background: "#b83290",
            padding: "10px 30px",
            margin: "20px auto",
          }}
          type="submit"
          // disabled={error.hasError || !data.phone}
        >
          {error.hasError ? "صبر کنید..." : "ثبت نام"}
        </Button>
      </Grid>
    </Box>
  )
}
