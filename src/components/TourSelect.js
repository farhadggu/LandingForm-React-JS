import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import "./TourSelect.css";

export default function TourSelect({
  setActive,
  toggle,
  setToggle,
  setActiveStep,
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
            <MenuItem value="اروپا">اروپا</MenuItem>
          </Select>
        </FormControl>

        {tour === "اروپا" && (
          <Typography mt={4} fontSize={18}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
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
                  setActiveStep((prev) => prev + 1);
                }}
                className={`for-me ${toggle === "forMe" ? "active" : ""}`}
              >
                برای خودم
              </Typography>
              <Typography
                onClick={() => {
                  setActive((prev) => prev + 1);
                  setToggle("forOthers");
                  setActiveStep((prev) => prev + 1);
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
