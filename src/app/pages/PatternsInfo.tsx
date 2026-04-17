import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import InsightsIcon from "@mui/icons-material/Insights";

const HOW_IT_WORKS = [
  { step: 1, icon: <EditNoteIcon />, title: "You log a moment", desc: "Capture anything — a meltdown, a milestone, a quiet win. No judgement." },
  { step: 2, icon: <HubOutlinedIcon />, title: "Tinu finds connections", desc: "Our AI looks across all your moments for recurring themes and triggers." },
  { step: 3, icon: <InsightsIcon />, title: "You see insights", desc: "Tinu surfaces patterns that help you understand and support Jiyu better." },
];

export default function PatternsInfo() {
  const navigate = useNavigate();

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
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2, pb: 1, gap: 1 }}>
        <IconButton onClick={() => navigate(-1)} sx={{ color: "#2d2047" }} size="small">
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#2d2047", flex: 1, textAlign: "center" }}>
          What's a Pattern?
        </Typography>
        <Box sx={{ width: 36 }} />
      </Box>

      {/* Scrollable content */}
      <Box sx={{ flex: 1, overflowY: "auto", px: 3, pb: 12 }}>
        {/* Hero */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Box sx={{ fontSize: 64, lineHeight: 1, mb: 2 }}>
            <PsychologyOutlinedIcon sx={{ fontSize: 72, color: "#6c4dc4" }} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: "#2d2047", mb: 1.5 }}>
            A pattern is a recurring behaviour
          </Typography>
          <Typography variant="body1" sx={{ color: "#7b6e8f", lineHeight: 1.7 }}>
            Every child has unique patterns — moments that repeat in ways that reveal what's really happening beneath the surface. Tinu helps you see them.
          </Typography>
        </Box>

        {/* How it works */}
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#2d2047", mb: 1.5 }}>
          How it works
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {HOW_IT_WORKS.map(({ step, icon, title, desc }) => (
            <Card key={step} sx={{ borderRadius: "16px", border: "1px solid #d9cbff", boxShadow: "none" }}>
              <CardContent sx={{ p: 2.5, display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Avatar sx={{ bgcolor: "#6c4dc4", width: 40, height: 40, flexShrink: 0 }}>
                  {icon}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#2d2047", mb: 0.5 }}>
                    {step}. {title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#7b6e8f", lineHeight: 1.6 }}>
                    {desc}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Example */}
        <Card sx={{ mt: 2.5, borderRadius: "16px", bgcolor: "rgba(108,77,196,0.06)", border: "1px solid rgba(108,77,196,0.15)", boxShadow: "none" }}>
          <CardContent sx={{ p: 2.5 }}>
            <Typography variant="overline" sx={{ color: "#6c4dc4", fontWeight: 700, letterSpacing: 1, display: "block", mb: 1 }}>
              EXAMPLE PATTERN
            </Typography>
            <Typography variant="body2" sx={{ color: "#2d2047", lineHeight: 1.65 }}>
              "Jiyu has a meltdown almost every time we transition from screen time to dinner. Tinu noticed this happens 4 out of 5 evenings — and suggested a 5-minute wind-down ritual."
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Fixed bottom CTA */}
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
        }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate(-1)}
          sx={{
            bgcolor: "#6c4dc4",
            borderRadius: "16px",
            fontSize: 16,
            fontWeight: 700,
            boxShadow: "0 4px 16px rgba(108,77,196,0.28)",
            "&:hover": { bgcolor: "#5a3db8" },
          }}
        >
          Got it
        </Button>
      </Box>
    </Box>
  );
}
