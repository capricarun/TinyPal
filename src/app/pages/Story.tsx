import { useState } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

export default function Story() {
  const navigate = useNavigate();
  const [navValue, setNavValue] = useState(1);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 430,
        mx: "auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #f6edf7, #fefaf6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scrollable content */}
      <Box sx={{ flex: 1, overflowY: "auto", pb: 10 }}>
        <Box sx={{ px: 3, pt: 2 }}>
          {/* Header row */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <IconButton onClick={() => navigate("/")} sx={{ color: "#2d2047", ml: -1 }}>
              <ArrowBackIcon />
            </IconButton>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#2d2047" }}>
                Your Child's Story
              </Typography>
            </Box>
            {/* Spacer to balance the back button */}
            <Box sx={{ width: 40 }} />
          </Box>

          {/* Illustration area */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #e8d8f8 0%, #fde8e0 100%)",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              mb: 3,
            }}
          >
            <Typography sx={{ fontSize: 80 }}>🧒</Typography>
          </Box>

          {/* Story growing section */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#2d2047",
              textAlign: "center",
              mb: 3,
              px: 2,
              lineHeight: 1.4,
            }}
          >
            Your Child's Story is growing. Here's what we see
          </Typography>

          {/* CTAs */}
          <Button
            variant="contained"
            fullWidth
            onClick={() => navigate("/moment-entry")}
            sx={{
              bgcolor: "#6c4dc4",
              color: "white",
              fontWeight: 700,
              py: 1.5,
              borderRadius: 36,
              mb: 2,
              boxShadow: "0 4px 16px rgba(108,77,196,0.28)",
              "&:hover": { bgcolor: "#5a3db8" },
            }}
          >
            Add a Moment
          </Button>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              component="span"
              sx={{
                color: "#7b6e8f",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              See all moments
            </Typography>
          </Box>

          {/* Patterns section */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#6c4dc4",
                letterSpacing: 2,
                mb: 1,
              }}
            >
              Patterns
            </Typography>
            <Typography
              component="span"
              onClick={() => navigate("/story/patterns-info")}
              sx={{
                color: "#7b6e8f",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              What's a Pattern?
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Navigation */}
      <BottomNavigation
        showLabels
        value={navValue}
        onChange={(_e, newValue) => {
          setNavValue(newValue);
          if (newValue === 0) navigate("/");
        }}
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 430,
          maxWidth: "100%",
          borderTop: "1px solid rgba(108,77,196,0.12)",
          bgcolor: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(10px)",
          height: 64,
          "& .Mui-selected": { color: "#6c4dc4 !important" },
          "& .MuiBottomNavigationAction-root": { color: "rgba(0,0,0,0.55)", minWidth: 0, px: 0.5 },
          "& .MuiBottomNavigationAction-label": {
            fontSize: "11px !important",
            opacity: "1 !important",
            fontWeight: 500,
          },
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Story" icon={<AutoStoriesIcon />} />
        <BottomNavigationAction label="Ask Tinu" icon={<SmartToyIcon />} />
        <BottomNavigationAction label="Alerts" icon={<NotificationsIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}
