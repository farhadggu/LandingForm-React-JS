import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import success from "../images/checked.png";
import "./SignUpSuccess.css"

export default function SignUpSuccess() {
  return (
    <Box padding="20px">
      <img
        style={{
          height: "100px",
          width: "100px",
          margin: "20px auto",
          display: "block",
        }}
        src={success}
        alt="success"
      />
      <Typography variant="h5" fontWeight="600" textAlign="center">
        ثبت نام شما با موفقیت انجام شد
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={5}
        mt={3}
        className="signup-success-btn"
      >
        <Typography
          component="button"
          onClick={() => window.location.reload()}
          sx={{
            background: "#b83290",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          بازگشت به صفحه اصلی
        </Typography>
        <Typography
          component="button"
          onClick={() => window.location.reload()}
          sx={{
            background: "#b83290",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ثبت نام مجدد
        </Typography>
      </Box>
    </Box>
  );
}
