import { ArrowBackOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Welcome.css"

export default function Welcome({ setActive }) {
  return (
    <>
      <Box md={12} className="intro-welcome">
        <Typography sx={{fontSize:"32px", fontWeight:"700", margin: "10px 0 20px"}} fontSize={28}>طرح قافله</Typography>
        <Typography component='p' sx={{fontSize:"16px", lineHeight: '2'}}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
          نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
          جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
          طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
          موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
          نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
          دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </Typography>
      </Box>
      <Button onClick={() => setActive((prev) => prev + 1)} endIcon={<ArrowBackOutlined />}>
        ثبت نام
      </Button>
    </>
  );
}
