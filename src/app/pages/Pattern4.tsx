import { useNavigate } from "react-router";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PatternSlide from "./PatternSlide";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";

export default function Pattern4() {
  const navigate = useNavigate();
  const [showCta] = useState(true);

  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      <PatternSlide
        patternNumber={4}
        title="Personalised goals"
        subtitle={"Capture more moments,\nuncover your child's unique patterns."}
        icon={<OutlinedFlagIcon sx={{ fontSize: 80 }} />}
        progress={100}
        onClose={() => navigate("/")}
      />

      {showCta && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 430,
            px: 3,
            pb: 3,
            pt: 2,
            background: "linear-gradient(to top, #fefaf6 70%, transparent)",
            zIndex: 10,
          }}
        >
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              bgcolor: "#6c4dc4",
              borderRadius: "16px",
              fontSize: 17,
              fontWeight: 700,
              boxShadow: "0 4px 20px rgba(108,77,196,0.32)",
              "&:hover": { bgcolor: "#5a3db8" },
            }}
          >
            Start Adding Moments
          </Button>
        </Box>
      )}
    </Box>
  );
}
