import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../utils/services";
import "./Forms.css";

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
  setLoading
}) {

  const submitHandler = (e) => {
    e.preventDefault();
    setData({...data, other: true})
    axios
      .post(`${baseUrl}/api/v1/toor`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((resp) => {
        toast.success(resp.data.message)
        setActive((prev) => prev + 1)
      })
      .catch((error) => {
        toast.error(error.response.data.message)
      });
  };
  
  return (
    <>
      <Box sx={{borderBottom: "1px solid #ccc", width: "100%"}}></Box>

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
          className="forms-box"
          rowGap="30px"
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

        </Grid>
      </Box>

      <Box sx={{borderBottom: "1px solid #ccc", width: "100%", marginTop: "50px"}}></Box>

      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="forms-page"
      >
        <Typography component="h1">اطلاعات مسافر</Typography>
        <Grid
          container
          rowGap="30px"
          padding="0 10px 30px 30px"
          component="form"
        >
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              required
              label="نام"
              placeholder="نام"
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="input-phone"
              helperText={`${
                error.nameError === "name" && error.hasError ? error.error : ""
              }`}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              required
              label="نام خانوادگی"
              placeholder="نام خانوادگی"
              type="text"
              name="lastname"
              value={data.lastname}
              onChange={handleChange}
              className="input-phone"
              helperText={`${
                error.nameError === "lastname" && error.hasError
                  ? error.error
                  : ""
              }`}
            />
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <TextField
              required
              label="تلفن همراه"
              placeholder="تلفن همراه"
              type="number"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className="input-phone"
              helperText={`${
                error.nameError === "phone" && error.hasError ? error.error : ""
              }`}
            />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <FormLabel id="demo-row-radio-buttons-group-label">جنسیت</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                name="gender"
                onClick={(e) => setData({ ...data, [e.target.name]: "مرد" })}
                value="female"
                control={<Radio />}
                label="مرد"
              />
              <FormControlLabel
                name="gender"
                onClick={(e) => setData({ ...data, [e.target.name]: "زن" })}
                value="male"
                control={<Radio />}
                label="زن"
              />
            </RadioGroup>
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              پاسپورت
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="passport"
            >
              <FormControlLabel
                name="passport"
                onClick={(e) => setData({ ...data, [e.target.name]: true })}
                value={true}
                control={<Radio />}
                label="دارم"
              />
              <FormControlLabel
                name="passport"
                onClick={(e) => setData({ ...data, [e.target.name]: false })}
                value={false}
                control={<Radio />}
                label="ندارم"
              />
            </RadioGroup>
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <TextField
              required
              label="تعداد نفرات همراه"
              placeholder="تعداد نفرات همراه"
              type="number"
              name="passengers_count"
              value={data.passengers_count}
              onChange={handleChange}
              className="input-phone"
              helperText={`${
                error.nameError === "passengers_count" && error.hasError
                  ? error.error
                  : ""
              }`}
            />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <TextField
              required
              label="نسبت نفرات همراه"
              placeholder="فامیل و دوست و همکار و ..."
              type="text"
              name="passengers_relationship"
              value={data.passengers_relationship}
              onChange={handleChange}
              className="input-phone"
              helperText={`${
                error.nameError === "passengers_relationship" && error.hasError
                  ? error.error
                  : ""
              }`}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <FormControl sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">استان</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.province_id}
                label="استان"
                name="province_id"
                onChange={(e) => searchCity(e)}
                MenuProps={MenuProps}
              >
                {province?.map((item, index) => (
                  <MenuItem key={index} value={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <FormControl sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">شهر</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.city_id}
                name="city_id"
                label="شهر"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                MenuProps={MenuProps}
              >
                {allCity?.map((item, index) => (
                  <MenuItem key={index} value={index}>
                    {item.name_fa}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <TextField
              label="روستا"
              placeholder="روستا"
              type="text"
              name="village"
              value={data.village}
              onChange={handleChange}
              className="input-phone"
            />
          </Grid>

          <Grid item md={12} sm={12} xs={12} display="flex" flexDirection='column' gap={5}>
          <Box>
            <FormLabel id="demo-row-radio-buttons-group-label">
              در هر زمان آمادگی سفر دارم؟
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="preparation_for_travel"
            >
              <FormControlLabel
                name="preparation_for_travel"
                onClick={(e) => setData({ ...data, [e.target.name]: true })}
                value={true}
                control={<Radio />}
                label="دارم"
              />
              <FormControlLabel
                name="preparation_for_travel"
                onClick={(e) => setData({ ...data, [e.target.name]: "0" })}
                value={false}
                control={<Radio />}
                label="ندارم"
              />
            </RadioGroup>
          </Box>
          {data.preparation_for_travel === "0" && (
            <TextField
              required
              label="زمان مناسب را تایپ کنید: تاریخ - زمان"
              placeholder="زمان مناسب را تایپ کنید: تاریخ - زمان"
              type="text"
              name="travel_preparation_time"
              value={data.travel_preparation_time}
              onChange={handleChange}
              disabled={
                data.preparation_for_travel === true ||
                data.preparation_for_travel === null
              }
              className="input-phone responsive-field"
              sx={{ width: "30%" }}
              helperText={`${
                error.nameError === "travel_preparation_time" && error.hasError
                  ? error.error
                  : ""
              }`}
            />
          )}
        </Grid>

          <Grid item md={12} sm={12} xs={12} display="flex" flexDirection='column' gap={5}>
          <Box>
            <FormLabel id="demo-row-radio-buttons-group-label">
              آیا توانایی پرداخت دارید؟
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                name="ability_to_pay"
                onClick={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                value={1000}
                control={<Radio />}
                label="دارم"
              />
              <FormControlLabel
                name="ability_to_pay"
                onClick={(e) => setData({ ...data, [e.target.name]: "0" })}
                value=""
                control={<Radio />}
                label="ندارم"
              />
            </RadioGroup>
          </Box>

          {data.ability_to_pay !== "" && (
            <TextField
              disabled={
                data.ability_to_pay === false || data.ability_to_pay === null
              }
              label="مبلغ قابل پرداخت خود را وارد کنید (به تومان):"
              placeholder="مبلغ قابل پرداخت خود را وارد کنید (به تومان):"
              type="text"
              name="ability_to_pay"
              value={data.ability_to_pay}
              onChange={handleChange}
              className="input-phone responsive-field"
              sx={{ width: "30%" }}
              helperText={`${
                error.nameError === "ability_to_pay" && error.hasError
                  ? error.error
                  : ""
              }`}
            />
          )}
        </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              توضیحات در مورد اینکه چرا خود را واجد شرایط استفاده از این کمک
              خیریه می دانید:
            </FormLabel>
            <TextField
              multiline
              rows={5}
              required
              placeholder="توضیحات در مورد اینکه چرا خود را واجد شرایط استفاده از این کمک خیریه می دانید"
              type="number"
              name="description"
              value={data.description}
              onChange={handleChange}
              className="input-phone"
              sx={{ width: "95%" }}
            />
          </Grid>

          <Button
            onClick={submitHandler}
            variant="contained"
            sx={{ background: "#b83290", padding: "10px 30px", margin: "20px auto" }}
            type="submit"
            disabled={error.hasError || !data.phone || loading}
          >
            {loading ? "صبر کنید..." : "ثبت نام"}
          </Button>

        </Grid>
      </Box>
    </>
  );
}
