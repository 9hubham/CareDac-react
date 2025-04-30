import {
  Typography,
  Box,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import Check from "../assests/check-circle 1.png";
import Trash from "../assests/trash.png";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function MyCondition() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F9F9",
      }}
    >
      <Stack
        spacing={3}
        sx={{
          padding: "24px",
          width: "500px",
          bgcolor: "#fff",
          borderRadius: "16px",
          boxShadow: 3,
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#101828",
            fontFamily: "onest",
          }}
        >
          My condition
        </Typography>

        {/* Conditions List */}
        <Stack spacing={2}>
          <Box sx={conditionItemStyle}>
            <Box sx={labelStyle}>
              <img src={Check} alt="check" height="16px" width="16px" />
              <Typography sx={conditionText}>
                Improvement of Health Fitness
              </Typography>
            </Box>
            <img src={Trash} alt="trash icon" height="16px" width="16px" />
          </Box>

          <Box sx={conditionItemStyle}>
            <Box sx={labelStyle}>
              <img src={Check} alt="check" height="16px" width="16px" />
              <Typography sx={conditionText}>Covid 19 recovery</Typography>
            </Box>
            <img src={Trash} alt="trash icon" height="16px" width="16px" />
          </Box>
        </Stack>

        {/* Add Condition */}
        <Stack sx={inputContainerStyle}>
          <Stack sx={{ width: "360px", gap: "18px" }}>
            <Typography sx={labelTypography}>Add condition</Typography>
            <TextField
              variant="outlined"
              placeholder="Enter condition"
              sx={inputStyle}
            />
          </Stack>
          <Box sx={addButtonStyle}>
            <AddIcon sx={{ fontSize: 20, color: "#344054" }} />
          </Box>
        </Stack>

        {/* Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="outlined" sx={outlinedBtnStyle} onClick={() => navigate(-1)}>
            <Typography sx={cancelTextStyle}>Cancel</Typography>
          </Button>
          <Button variant="contained" sx={containedBtnStyle} onClick={() => navigate(-1)}>
            <Typography sx={saveTextStyle}>Save</Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}


// === Shared Styles ===
const labelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const conditionItemStyle = {
  height: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const conditionText = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#344054",
  fontFamily: "Onest",
};

const inputContainerStyle = {
  gap: "16px",
  height: "70px",
  width: "420px",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    height: "44px",
    width: "360px",
    padding: "0 14px",
  },
};

const addButtonStyle = {
  height: "44px",
  width: "44px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #F2F4F7",
  boxShadow: "2px 2px 15px 0px #0000000D",
  borderRadius: "12px",
  cursor: "pointer",
  marginTop: "24px",
};

const labelTypography = {
  fontFamily: "onest",
  fontWeight: 500,
  fontSize: "14px",
  color: "#475467",
};

const outlinedBtnStyle = {
  color: "#024FAA",
  borderRadius: "40px",
  height: "52px",
  width: "203px",
};

const containedBtnStyle = {
  backgroundColor: "#024FAA",
  borderRadius: "40px",
  height: "52px",
  width: "203px",
};

const cancelTextStyle = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#024FAA",
  fontFamily: "Onest,sans-serif",
  textTransform: "none",
};

const saveTextStyle = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#FFFFFF",
  fontFamily: "Onest,sans-serif",
  textTransform: "none",
};

export default MyCondition;