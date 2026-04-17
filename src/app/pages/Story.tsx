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

function BookIllustration() {
  return (
    <svg viewBox="0 0 320 190" width="300" height="178" xmlns="http://www.w3.org/2000/svg">

      {/* ── Left plant cluster ── */}
      {/* Large leaf bottom-left */}
      <ellipse cx="42" cy="152" rx="28" ry="13" fill="#4caf50" transform="rotate(-35 42 152)" />
      {/* Medium leaf top-left */}
      <ellipse cx="30" cy="120" rx="22" ry="10" fill="#66bb6a" transform="rotate(-50 30 120)" />
      {/* Thin tall stem left */}
      <path d="M 55 160 Q 48 130 52 105" fill="none" stroke="#388e3c" strokeWidth="3" strokeLinecap="round" />
      {/* Small round leaf on stem */}
      <ellipse cx="52" cy="105" rx="12" ry="8" fill="#81c784" transform="rotate(-20 52 105)" />
      {/* Berry dots */}
      <circle cx="38" cy="110" r="4" fill="#ef5350" />
      <circle cx="46" cy="104" r="3" fill="#ef9a9a" />
      {/* Tiny orange house/building top-left */}
      <rect x="22" y="78" width="22" height="18" rx="2" fill="#ff7043" />
      <polygon points="22,78 33,65 44,78" fill="#e64a19" />
      <rect x="29" y="88" width="8" height="8" rx="1" fill="#fff9c4" />

      {/* ── Right plant cluster ── */}
      {/* Large leaf bottom-right */}
      <ellipse cx="278" cy="152" rx="28" ry="13" fill="#43a047" transform="rotate(35 278 152)" />
      {/* Medium leaf top-right */}
      <ellipse cx="292" cy="118" rx="22" ry="10" fill="#66bb6a" transform="rotate(50 292 118)" />
      {/* Thin tall stem right */}
      <path d="M 265 160 Q 272 128 268 102" fill="none" stroke="#388e3c" strokeWidth="3" strokeLinecap="round" />
      {/* Small round leaf on right stem */}
      <ellipse cx="270" cy="102" rx="12" ry="8" fill="#a5d6a7" transform="rotate(20 270 102)" />
      {/* Berry dots right */}
      <circle cx="284" cy="108" r="4" fill="#ef5350" />
      <circle cx="276" cy="103" r="3" fill="#ffb74d" />
      {/* Star/sparkle top-right */}
      <polygon points="296,72 299,82 309,82 301,88 304,98 296,92 288,98 291,88 283,82 293,82" fill="#fdd835" />

      {/* ── Open book ── */}
      {/* Book cover (bottom strip) */}
      <rect x="82" y="148" width="156" height="14" rx="4" fill="#c8a97e" />
      {/* Left page */}
      <path d="M 90 72 Q 88 148 90 148 L 160 148 L 160 72 Q 125 68 90 72 Z" fill="#ffffff" stroke="#e0d5c5" strokeWidth="1" />
      {/* Right page */}
      <path d="M 160 72 L 160 148 L 230 148 Q 232 148 230 72 Q 195 68 160 72 Z" fill="#f9f7f4" stroke="#e0d5c5" strokeWidth="1" />
      {/* Spine shadow center */}
      <rect x="157" y="72" width="6" height="76" rx="2" fill="#d4c4a8" />
      {/* Left page lines */}
      <line x1="100" y1="95"  x2="152" y2="95"  stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="105" x2="152" y2="105" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="115" x2="152" y2="115" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="125" x2="152" y2="125" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="135" x2="140" y2="135" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      {/* Right page lines */}
      <line x1="168" y1="95"  x2="220" y2="95"  stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="168" y1="105" x2="220" y2="105" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="168" y1="115" x2="220" y2="115" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="168" y1="125" x2="220" y2="125" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="168" y1="135" x2="208" y2="135" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" />
      {/* Red bookmark ribbon */}
      <path d="M 172 62 L 172 90 L 178 85 L 184 90 L 184 62 Z" fill="#e53935" />

      {/* ── Small scattered accents ── */}
      <circle cx="140" cy="60" r="4" fill="#ce93d8" />
      <circle cx="185" cy="58" r="3" fill="#80cbc4" />
      <polygon points="70,65 73,72 80,72 74,77 76,84 70,79 64,84 66,77 60,72 67,72" fill="#ffcc02" />
    </svg>
  );
}

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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              mb: 3,
            }}
          >
            <BookIllustration />
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
              borderRadius: "16px",
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
          <Box sx={{ mb: 2, textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#6c4dc4",
                letterSpacing: 2,
                mb: 1,
                fontSize: 32,
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
                display: "block",
                textAlign: "center",
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
