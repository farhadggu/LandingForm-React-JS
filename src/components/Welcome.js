import { ArrowBackOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Welcome.css";

export default function Welcome({ setActive }) {
  return (
    <>
      <Box md={12} className="intro-welcome">
        <Typography
          sx={{ fontSize: "32px", fontWeight: "700", margin: "10px 0 20px" }}
          fontSize={28}
        >
          طرح قافله
        </Typography>
        <Typography component="p" sx={{ fontSize: "16px", lineHeight: "2" }}>
          شکرگزار خداوندیم که نهال گشت وسیله ای شد برای عزیزانی که کمتر امیدی به
          این سفر داشته اند دوستانی که به هر دلیلی استطاعت مالی برای مسافرت
          ندارند یا فقط توانایی پرداخت بخشی از هزینه را دارند می توانند در این
          طرح ثبت نام کنند.
        </Typography>
      </Box>
      <Button
        onClick={() => setActive((prev) => prev + 1)}
        endIcon={<ArrowBackOutlined />}
      >
        ثبت نام
      </Button>
    </>
  );
}
