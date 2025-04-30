import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  ListItem,
  List,
} from "@mui/material";
import Trash from "../assests/trash.png";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function SpecialNeeds() {
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
          Special needs
        </Typography>

        {/* Needs List */}
        <List
          sx={{
            width: "420px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {["Bathing", "Walk on morning", "Personal care"].map(
            (item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 0,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#344054",
                      fontFamily: "Onest",
                    }}
                  >
                    • {item}
                  </Typography>
                </Box>
                <Box>
                  <img
                    src={Trash}
                    alt="trash icon"
                    height="16px"
                    width="16px"
                  />
                </Box>
              </ListItem>
            )
          )}
        </List>

        {/* Add New */}
        <Stack
          sx={{
            gap: "16px",
            height: "70px",
            width: "420px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Stack sx={{ width: "360px", gap: "18px" }}>
            <Typography
              sx={{
                fontFamily: "onest",
                fontWeight: 500,
                fontSize: "14px",
                color: "#475467",
              }}
            >
              Add condition
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter condition"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  height: "44px",
                  width: "360px",
                  padding: "0 14px",
                },
              }}
            />
          </Stack>
          <Box
            sx={{
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
            }}
          >
            <AddIcon sx={{ fontSize: 20, color: "#344054" }} />
          </Box>
        </Stack>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              color: "#024FAA",
              borderRadius: "40px",
              height: "52px",
              width: "203px",
            }}
            onClick={() => navigate(-1)}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#024FAA",
                fontFamily: "Onest,sans-serif",
                textTransform: "none",
              }}
            >
              Cancel
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#024FAA",
              borderRadius: "40px",
              height: "52px",
              width: "203px",
            }}
            onClick={() => navigate(-1)}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                fontFamily: "Onest,sans-serif",
                textTransform: "none",
              }}
            >
              Save
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SpecialNeeds;
