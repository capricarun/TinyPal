import { useState } from "react";
import { useNavigate } from "react-router";
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

const GOALS = [
  { label: "All Goals", icon: null },
  { label: "Focus", icon: <TrackChangesIcon fontSize="small" /> },
  { label: "Sleep", icon: <BedtimeIcon fontSize="small" /> },
  { label: "Emotions", icon: <MoodIcon fontSize="small" /> },
];

const GOAL_CARDS = [
  {
    badge: "EXPERT CURATED",
    title: "Encourage Independent Eating",
    subtitle: "Help Jiyu eat on her own.",
    gradient: "linear-gradient(135deg, #6c4dc4 0%, #4a90d9 100%)",
  },
  {
    badge: "EXPERT CURATED",
    title: "Change Stubborn Behaviour",
    subtitle: "Turn resistance into understanding.",
    gradient: "linear-gradient(135deg, #ff8e6e 0%, #ffd566 100%)",
  },
  {
    badge: "EXPERT CURATED",
    title: "Improve Sleep Routine",
    subtitle: "Build a calm, consistent bedtime.",
    gradient: "linear-gradient(135deg, #5ec28b 0%, #4ecdc4 100%)",
  },
  {
    badge: "TRENDING",
    title: "Build Emotional Vocabulary",
    subtitle: "Help Jiyu name and express feelings.",
    gradient: "linear-gradient(135deg, #b49ae8 0%, #6c4dc4 100%)",
  },
  {
    badge: "EXPERT CURATED",
    title: "Reduce Screen Time Friction",
    subtitle: "Smooth transitions away from devices.",
    gradient: "linear-gradient(135deg, #ff6b9d 0%, #ff8e6e 100%)",
  },
  {
    badge: "NEW",
    title: "Foster Creative Confidence",
    subtitle: "Encourage risk-taking through play.",
    gradient: "linear-gradient(135deg, #ffd566 0%, #5ec28b 100%)",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [activeGoal, setActiveGoal] = useState("All Goals");
  const [navValue, setNavValue] = useState(0);

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
        <Box sx={{ px: 3, pt: 2.5, pb: 1 }}>

          {/* Logo */}
          <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.5, mb: 3 }}>
            <Box component="span" sx={{ color: "#ff8e6e" }}>T</Box>
            <Box component="span" sx={{ color: "#6c4dc4" }}>i</Box>
            <Box component="span" sx={{ color: "#ffd566" }}>n</Box>
            <Box component="span" sx={{ color: "#5ec28b" }}>y</Box>
            <Box component="span" sx={{ color: "#6c4dc4" }}>Pal</Box>
          </Typography>

          {/* Hero Card */}
          <Card
            sx={{
              background: "linear-gradient(135deg, #6c4dc4 0%, #f4a98a 100%)",
              mb: 3,
              borderRadius: "16px",
              boxShadow: "0 6px 24px rgba(108,77,196,0.28)",
              overflow: "visible",
            }}
          >
            <Box sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "white", mb: 1 }}>
                Keep Jiyu's Story Going
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)", mb: 2.5, lineHeight: 1.6 }}>
                Each moment you notice helps Tinu understand Jiyu better
              </Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate("/moment-entry")}
                sx={{
                  bgcolor: "white",
                  color: "#6c4dc4",
                  fontWeight: 700,
                  mb: 1.5,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                  borderRadius: "36px",
                  boxShadow: "none",
                }}
              >
                Add Moment
              </Button>
              <Typography
                component="span"
                onClick={() => navigate("/patterns/1")}
                sx={{
                  color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: 13,
                  opacity: 0.9,
                  display: "block",
                  textAlign: "center",
                  "&:hover": { opacity: 1 },
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

          {/* Filter pills */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              overflowX: "auto",
              pb: 1,
              mb: 2.5,
              "&::-webkit-scrollbar": { display: "none" },
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
                  color: activeGoal === goal.label ? "white" : "#6c4dc4",
                  borderColor: "#d9cbff",
                  fontWeight: 600,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  "& .MuiChip-icon": {
                    color: activeGoal === goal.label ? "white" : "#6c4dc4",
                  },
                  "&:hover": {
                    bgcolor: activeGoal === goal.label ? "#5a3db8" : "rgba(255,255,255,0.85)",
                  },
                }}
              />
            ))}
          </Box>

          {/* Goal Cards */}
          {GOAL_CARDS.map((card) => (
            <Card
              key={card.title}
              sx={{
                mb: 2,
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: "0 2px 12px rgba(108,77,196,0.10)",
                cursor: "pointer",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(108,77,196,0.18)",
                },
                "&:active": { transform: "translateY(0px)" },
              }}
            >
              <Box sx={{ background: card.gradient, px: 2.5, py: 2.5 }}>
                <Box
                  sx={{
                    display: "inline-block",
                    bgcolor: "rgba(255,255,255,0.25)",
                    color: "white",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1,
                    px: 1,
                    py: 0.5,
                    borderRadius: "6px",
                    mb: 1.5,
                  }}
                >
                  {card.badge}
                </Box>
                <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 700, mb: 0.5 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.5 }}>
                  {card.subtitle}
                </Typography>
              </Box>
            </Card>
          ))}

        </Box>
      </Box>

      {/* Bottom Navigation — always shows icon + label */}
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
          "& .Mui-selected": { color: "#6c4dc4 !important" },
          "& .MuiBottomNavigationAction-root": {
            color: "rgba(0,0,0,0.45)",
            minWidth: 0,
            px: 0.5,
          },
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
