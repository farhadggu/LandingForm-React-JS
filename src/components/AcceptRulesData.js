import { Box } from "@mui/system";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import close from "../images/close.png";
import axios from "axios";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AcceptRulesData({
  data,
  toggle,
  setActive,
  allProvinceCityData,
  setActiveStep,
  images,
  setData,
  token
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  // useEffect(() => {
  //   allProvinceCityData.filter((items) => {
  //     if (items.id === data.province_id) {
  //       setProvince(items.province_name_fa);
  //       items.cities.map((item) => {
  //         if (item.id === data.city_id) {
  //           setCity(item.name_fa);
  //         }
  //       });
  //     }
  //   });
  // }, [data.city_id, data.province_id, allProvinceCityData]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    toast.success("ثبت نام انجام شد");
    setActive((prev) => prev + 1);
    setActiveStep(((prev) => prev + 1))
  }

  return (
    <>
      <Box p={3}>
        <Typography fontSize={18} fontWeight="600" mb={2}>
          تایید اطلاعات وارد شده به معنای پذیرش قوانین و مقررات سایت است.
        </Typography>

        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </Typography>

        <Button
          sx={{ margin: "0 auto", width: "100%", mt: "20px" }}
          onClick={() => setOpenInfo(true)}
        >
          مشاهده و تایید اطلاعات وارد شده
        </Button>
      </Box>
      <Dialog
        open={openInfo}
        onClose={() => setOpenInfo(false)}
        TransitionComponent={Transition}
        keepMounted
      >
        {toggle === "forOthers" && (
          <>
            <DialogTitle sx={{ borderBottom: "1px solid #ccc" }}>
              {"مشاهده اطلاعات معرفی کننده"}
            </DialogTitle>
            <DialogContent sx={{ marginTop: "20px" }}>
              <Grid container rowGap={4}>
                <Grid
                  md={6}
                  sm={6}
                  item
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Typography fontWeight="700"> نام و نام خانوادگی:</Typography>
                  <Typography>{data.other_name}</Typography>
                </Grid>

                <Grid
                  md={6}
                  sm={6}
                  item
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Typography fontWeight="700"> شماره تماس:</Typography>
                  <Typography>{data.other_phone}</Typography>
                </Grid>

                <Grid
                  md={6}
                  sm={6}
                  item
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Typography fontWeight="700"> شهر :</Typography>
                  <Typography>{data.other_city}</Typography>
                </Grid>

                <Grid
                  md={6}
                  sm={6}
                  item
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Typography fontWeight="700"> موقعیت اجتماعی :</Typography>
                  <Typography>{data.other_socialـposition}</Typography>
                </Grid>

                <Grid
                  md={6}
                  sm={6}
                  item
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Typography fontWeight="700"> نسبت:</Typography>
                  <Typography>{data.other_relationship}</Typography>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
        <DialogTitle sx={{ borderBottom: "1px solid #ccc" }}>
          {"مشاهده اطلاعات مسافر"}
        </DialogTitle>
        <DialogContent sx={{ marginTop: "20px" }}>
          <Grid container rowGap={4}>
            <Grid
              md={6}
              sm={6}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700">نام و نام خانوادگی:</Typography>
              <Typography>
                {data.name} {data.lastname}
              </Typography>
            </Grid>

            <Grid
              md={6}
              sm={6}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700">جنسیت:</Typography>
              <Typography>{data.gender}</Typography>
            </Grid>

            <Grid
              md={6}
              sm={6}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700">تلفن همراه:</Typography>
              <Typography>{data.phone}</Typography>
            </Grid>

            <Grid
              md={6}
              sm={6}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700">تعداد نفرات همراه:</Typography>
              <Typography>{data.passengers_count}</Typography>
            </Grid>

            <Grid
              md={6}
              sm={6}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700">نسبت نفرات همراه:</Typography>
              <Typography>{data.passengers_relationship}</Typography>
            </Grid>

            <Grid
              md={6}
              sm={12}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700">پاسپورت:</Typography>
              <Typography>{data.passport ? "دارم" : "ندارم"}</Typography>
            </Grid>

            <Grid
              md={4}
              sm={6}
              xs={12}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700">استان:</Typography>
              <Typography>{province}</Typography>
            </Grid>

            <Grid
              md={4}
              sm={6}
              xs={12}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700">شهر:</Typography>
              <Typography>{city}</Typography>
            </Grid>

            <Grid
              md={4}
              sm={6}
              xs={12}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700">روستا:</Typography>
              <Typography>{data.village}</Typography>
            </Grid>

            <Grid
              md={6}
              sm={6}
              item
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              gap="10px"
            >
              <Typography fontWeight="700"> در هر زمان آمادگی سفر:</Typography>
              <Typography component={'span'}>
                {data.preparation_for_travel ? "دارم" : "ندارم"}
              </Typography>
              {!data.preparation_for_travel && (
                <Typography
                  sx={{ display: "flex", gap: "8px" }}
                  fontWeight="700"
                  component={'span'}
                >
                  زمان مناسب شما:{" "}
                  <Typography component={'span'}>{data.travel_preparation_time}</Typography>
                </Typography>
              )}
            </Grid>

            <Grid
              md={12}
              sm={12}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              {data.ability_to_pay == 0 ? (
                <Typography
                  fontWeight="700"
                  sx={{ display: "flex", gap: "10px" }}
                  component={'span'}
                >
                  توانایی پرداخت <Typography component={'span'}>ندارم</Typography>
                </Typography>
              ) : (
                <Typography
                  fontWeight="700"
                  sx={{ display: "flex", gap: "10px" }}
                  component={'span'}
                >
                  فقط توانایی پرداخت{" "}
                  <Typography component={'span'}>{data.ability_to_pay}</Typography> تومان از هزینه
                  سفر را دارم
                </Typography>
              )}
            </Grid>

            <Grid
              md={12}
              sm={12}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography component={'span'}>مدارک انتخابی:</Typography>
              <Box display="flex">
                {images.map((item) => (
                  <Box>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={item.image}
                      alt="documents"
                    />
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid
              md={12}
              sm={12}
              item
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Typography component={'span'} fontWeight="700">توضیحات:</Typography>
              {data.description ? (
                <Typography component={'span'}>{data.description}</Typography>
              ) : (
                <Typography component={'span'}>بدون توضیحات</Typography>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            borderTop: "1px solid #ccc",
          }}
        >
          {isLoading ? (
            <LoadingButton
              loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              صبور باشید...
            </LoadingButton>
          ) : (
            <Button onClick={(e) => {
              handleSubmit(e)
            }}>
              تایید و آپلود مدارک
            </Button>
          )}

          <Button
            onClick={() => {
              setOpenInfo(false);
              setActive((prev) => prev - 2);
              setActiveStep((prev) => prev - `${toggle === "forMe" ? 2 : 3}`);
            }}
          >
            ویرایش اطلاعات
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
