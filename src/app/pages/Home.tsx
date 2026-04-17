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

export default function Home() {
  const navigate = useNavigate();
  const [activeGoal, setActiveGoal] = useState("All Goals");
  const [navValue, setNavValue] = useState(0);

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
        <Box sx={{ px: 3, pt: 2, pb: 1 }}>
          {/* Header / Logo */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, letterSpacing: -0.5, mb: 3 }}
          >
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
              color: "white",
              mb: 3,
              borderRadius: 4,
              boxShadow: "0 6px 24px rgba(108,77,196,0.28)",
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "white", mb: 1 }}>
                Keep Jiyu's Story Going
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)", mb: 2.5, lineHeight: 1.6 }}>
                Each moment you notice helps Tinu understand Jiyu better
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/moment-entry")}
                sx={{
                  bgcolor: "white",
                  color: "#6c4dc4",
                  fontWeight: 700,
                  mb: 1.5,
                  display: "block",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                  borderRadius: 36,
                  px: 3,
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
                }}
              >
                How patterns work?
              </Typography>
            </Box>
          </Card>

          {/* Goal filter */}
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#2d2047", mb: 1.5 }}>
            Find your parenting goal
          </Typography>
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
                  bgcolor: activeGoal === goal.label ? "#6c4dc4" : "transparent",
                  color: activeGoal === goal.label ? "white" : "#6c4dc4",
                  borderColor: "#d9cbff",
                  fontWeight: 600,
                  "& .MuiChip-icon": {
                    color: activeGoal === goal.label ? "white" : "#6c4dc4",
                  },
                  "&:hover": {
                    bgcolor: activeGoal === goal.label ? "#5a3db8" : "rgba(108,77,196,0.08)",
                  },
                }}
              />
            ))}
          </Box>

          {/* Goal Card 1 */}
          <Card sx={{ mb: 2, overflow: "hidden", borderRadius: 3 }}>
            <Box
              sx={{
                background: "linear-gradient(135deg, #6c4dc4 0%, #4a90d9 100%)",
                px: 2.5,
                py: 2,
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1,
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                EXPERT CURATED
              </Box>
              <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 700 }}>
                Encourage Independent Eating
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                Help Jiyu eat on her own.
              </Typography>
            </Box>
          </Card>

          {/* Goal Card 2 */}
          <Card sx={{ mb: 2, overflow: "hidden", borderRadius: 3 }}>
            <Box
              sx={{
                background: "linear-gradient(135deg, #ff8e6e 0%, #ffd566 100%)",
                px: 2.5,
                py: 2,
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  bgcolor: "rgba(255,255,255,0.3)",
                  color: "white",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1,
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                EXPERT CURATED
              </Box>
              <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 700 }}>
                Change Stubborn Behaviour
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                Turn resistance into understanding
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>

      {/* Bottom Navigation */}
      <BottomNavigation
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
          width: "100%",
          maxWidth: 430,
          borderTop: "1px solid rgba(108,77,196,0.12)",
          bgcolor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          "& .Mui-selected": { color: "#6c4dc4 !important" },
          "& .MuiBottomNavigationAction-root": { color: "rgba(0,0,0,0.54)" },
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Story" icon={<AutoStoriesIcon />} />
        <BottomNavigationAction label="Ask Tinu" icon={<SmartToyIcon />} />
        <BottomNavigationAction label="Notification" icon={<NotificationsIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}
