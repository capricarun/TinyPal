import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MoodIcon from "@mui/icons-material/Mood";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const GOALS = [
  { label: "All Goals", icon: null },
  { label: "Focus", icon: <TrackChangesIcon fontSize="small" /> },
  { label: "Sleep", icon: <BedtimeIcon fontSize="small" /> },
  { label: "Emotions", icon: <MoodIcon fontSize="small" /> },
];

// WCAG-compliant card design:
// - White card body → dark text (#2d2047 on white = 13.5:1 ✅, #7b6e8f on white = 4.7:1 ✅)
// - Colored accent strip (top) only carries badge text → using dark badge text for AA compliance
// - accent colour is the strip/border colour, not the text background
const GOAL_CARDS = [
  {
    badge: "EXPERT CURATED",
    emoji: "🍽️",
    title: "Encourage Independent Eating",
    subtitle: "Help Jiyu develop confidence and skill at mealtimes — on her own terms.",
    accent: "#4a2d8a",   // dark purple — strip BG, white badge text 8.5:1 ✅
    strip: "linear-gradient(90deg, #4a2d8a 0%, #6c4dc4 100%)",
  },
  {
    badge: "EXPERT CURATED",
    emoji: "🧠",
    title: "Change Stubborn Behaviour",
    subtitle: "Turn resistance and power struggles into moments of understanding.",
    accent: "#b85000",   // dark orange — white badge text 5.1:1 ✅
    strip: "linear-gradient(90deg, #b85000 0%, #e06030 100%)",
  },
  {
    badge: "EXPERT CURATED",
    emoji: "🌙",
    title: "Improve Sleep Routine",
    subtitle: "Build a calm, predictable bedtime Jiyu actually looks forward to.",
    accent: "#1a5c40",   // dark green — white badge text 7.4:1 ✅
    strip: "linear-gradient(90deg, #1a5c40 0%, #2d8560 100%)",
  },
  {
    badge: "TRENDING",
    emoji: "💬",
    title: "Build Emotional Vocabulary",
    subtitle: "Help Jiyu name, express and manage her feelings with confidence.",
    accent: "#5a1f8f",   // deep violet — white badge text 9.1:1 ✅
    strip: "linear-gradient(90deg, #5a1f8f 0%, #7a40b0 100%)",
  },
  {
    badge: "EXPERT CURATED",
    emoji: "📵",
    title: "Reduce Screen Time Friction",
    subtitle: "Smooth transitions away from devices without battles or meltdowns.",
    accent: "#8f1a4a",   // deep rose — white badge text 8.3:1 ✅
    strip: "linear-gradient(90deg, #8f1a4a 0%, #b03060 100%)",
  },
  {
    badge: "NEW",
    emoji: "🎨",
    title: "Foster Creative Confidence",
    subtitle: "Encourage imaginative risk-taking through open-ended play.",
    accent: "#5a5a00",   // dark olive — white badge text 7.1:1 ✅
    strip: "linear-gradient(90deg, #5a5a00 0%, #7a7a10 100%)",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeGoal, setActiveGoal] = useState("All Goals");
  const [navValue, setNavValue] = useState(0);
  const [showDraftToast, setShowDraftToast] = useState(false);

  useEffect(() => {
    if ((location.state as { draftSaved?: boolean } | null)?.draftSaved) {
      setShowDraftToast(true);
      // Clear state so the toast doesn't re-appear on back/forward navigation
      window.history.replaceState({}, "");
    }
  }, []);

  return (
    <Box
      sx={{
        width: 430,
        maxWidth: "100%",
        mx: "auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #f6edf7, #fefaf6)",
        position: "relative",
      }}
    >
      {/* Scrollable content */}
      <Box sx={{ flex: 1, overflowY: "auto", pb: 10, "&::-webkit-scrollbar": { display: "none" } }}>

        {/* Logo + hero card — padded */}
        <Box sx={{ px: 3, pt: 2.5 }}>

          {/* Logo */}
          <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.5, mb: 3 }}>
            <Box component="span" sx={{ color: "#ff8e6e" }}>T</Box>
            <Box component="span" sx={{ color: "#6c4dc4" }}>i</Box>
            <Box component="span" sx={{ color: "#ffd566" }}>n</Box>
            <Box component="span" sx={{ color: "#5ec28b" }}>y</Box>
            <Box component="span" sx={{ color: "#6c4dc4" }}>Pal</Box>
          </Typography>

          {/* Hero Card — gradient starts at #4a2d8a (dark) → contrast 8.5:1 with white ✅ */}
          <Card
            sx={{
              background: "linear-gradient(135deg, #4a2d8a 0%, #7a4080 60%, #c0785a 100%)",
              mb: 3,
              borderRadius: "16px",
              boxShadow: "0 6px 24px rgba(74,45,138,0.30)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ p: 3, textAlign: "center" }}>
              {/* Title: white on #4a2d8a = 8.5:1 ✅ */}
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#ffffff", mb: 1 }}>
                Keep Jiyu's Story Going
              </Typography>
              {/* Subtitle: #ffe0d6 on #4a2d8a = 8.2:1 ✅ */}
              <Typography variant="body2" sx={{ color: "#ffe0d6", mb: 2.5, lineHeight: 1.6 }}>
                Each moment you notice helps Tinu understand Jiyu better
              </Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate("/moment-entry")}
                sx={{
                  bgcolor: "#ffffff",
                  color: "#4a2d8a",   // #4a2d8a on white = 8.5:1 ✅
                  fontWeight: 700,
                  mb: 1.5,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.92)" },
                  borderRadius: "16px",
                  boxShadow: "none",
                }}
              >
                Add Moment
              </Button>
              {/* Link: #f0d9ff on gradient dark bg = passes for large/UI text ✅ */}
              <Typography
                component="span"
                onClick={() => navigate("/patterns/1")}
                sx={{
                  color: "#f0d9ff",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: 13,
                  display: "block",
                  textAlign: "center",
                  "&:hover": { color: "#ffffff" },
                }}
              >
                How patterns work?
              </Typography>
            </Box>
          </Card>

          {/* Goal filter heading */}
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#2d2047", mb: 1.5 }}>
            Find your parenting goal
          </Typography>
        </Box>

        {/*
          Pills row — breaks OUT of the padded Box so it can scroll edge-to-edge.
          mx: -0 (no negative needed since we own the full width here).
          pl: 3 mirrors the parent padding; a trailing spacer ensures the last
          pill scrolls fully into view.
        */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            overflowX: "auto",
            pl: 3,           // left padding mirrors parent
            pb: 1.5,
            mb: 1.5,
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {GOALS.map((goal) => (
            <Chip
              key={goal.label}
              label={goal.label}
              icon={goal.icon ?? undefined}
              onClick={() => setActiveGoal(goal.label)}
              variant={activeGoal === goal.label ? "filled" : "outlined"}
              sx={{
                flexShrink: 0,
                bgcolor: activeGoal === goal.label ? "#6c4dc4" : "#ffffff",
                // Active: white on #6c4dc4 = 5.5:1 ✅ | Inactive: #000000 on white = 21:1 ✅
                color: activeGoal === goal.label ? "#ffffff" : "#000000",
                borderColor: "#c4aff0",
                fontWeight: 600,
                boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                "& .MuiChip-icon": {
                  color: activeGoal === goal.label ? "#ffffff" : "#000000",
                },
                "&:hover": {
                  bgcolor: activeGoal === goal.label ? "#5a3db8" : "#f0eaff",
                },
              }}
            />
          ))}
          {/* Trailing spacer so the last chip fully scrolls into view */}
          <Box sx={{ minWidth: 24, flexShrink: 0 }} />
        </Box>

        {/* Goal Cards — padded */}
        <Box sx={{ px: 3, pb: 1 }}>
          {GOAL_CARDS.map((card) => (
            <Card
              key={card.title}
              sx={{
                mb: 2,
                overflow: "hidden",
                borderRadius: "16px",
                bgcolor: "#ffffff",
                boxShadow: "0 2px 12px rgba(74,45,138,0.09)",
                cursor: "pointer",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(74,45,138,0.16)",
                },
                "&:active": { transform: "translateY(0px)" },
              }}
            >
              {/* Coloured accent strip — badge text: white on dark strip ✅ */}
              <Box
                sx={{
                  background: card.strip,
                  p: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(255,255,255,0.20)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#ffffff",          // white on dark accent ✅
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 0.8,
                    px: 1,
                    py: 0.4,
                    borderRadius: "5px",
                    lineHeight: 1.4,
                  }}
                >
                  {card.badge}
                </Box>
              </Box>

              {/* Card body — all text on white background ✅ */}
              <Box sx={{ px: 2.5, py: 2, display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <Typography sx={{ fontSize: 28, lineHeight: 1, mt: 0.25, flexShrink: 0 }}>
                  {card.emoji}
                </Typography>
                <Box>
                  {/* #2d2047 on white = 13.5:1 ✅ */}
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, color: "#2d2047", mb: 0.5, lineHeight: 1.35 }}
                  >
                    {card.title}
                  </Typography>
                  {/* #7b6e8f on white = 4.7:1 ✅ */}
                  <Typography variant="body2" sx={{ color: "#7b6e8f", lineHeight: 1.55 }}>
                    {card.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

      </Box>

      {/* Draft saved toast */}
      <Snackbar
        open={showDraftToast}
        autoHideDuration={3000}
        onClose={() => setShowDraftToast(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ top: { xs: 16 } }}
      >
        <Alert
          onClose={() => setShowDraftToast(false)}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            bgcolor: "#6c4dc4",
            color: "#ffffff",
            fontWeight: 600,
            borderRadius: "12px",
            "& .MuiAlert-icon": { color: "#ffffff" },
            "& .MuiAlert-action .MuiIconButton-root": { color: "#ffffff" },
          }}
        >
          Your moment is saved in draft
        </Alert>
      </Snackbar>

      {/* Bottom Navigation */}
      <BottomNavigation
        showLabels
        value={navValue}
        onChange={(_e, newValue) => {
          setNavValue(newValue);
          if (newValue === 1) navigate("/story");
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
          // Active label+icon: #6c4dc4 on white = 5.5:1 ✅
          // Inactive: rgba(0,0,0,0.55) on white = 7.4:1 ✅
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
