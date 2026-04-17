import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";
import CloseIcon from "@mui/icons-material/Close";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

interface PatternSlideProps {
  patternNumber: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  insight: string;
  progress: number;
  onClose: () => void;
}

const GRADIENT_COLORS: Record<number, string> = {
  1: "linear-gradient(135deg, #6c4dc4 0%, #b49ae8 100%)",
  2: "linear-gradient(135deg, #ff8e6e 0%, #ffd566 100%)",
  3: "linear-gradient(135deg, #5ec28b 0%, #4ecdc4 100%)",
  4: "linear-gradient(135deg, #2d2047 0%, #6c4dc4 100%)",
};

export default function PatternSlide({ patternNumber, title, description, insight, progress, onClose }: PatternSlideProps) {
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
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 3, pt: 2, pb: 1 }}>
        <Chip
          label={`Pattern ${patternNumber} of 4`}
          sx={{
            bgcolor: "rgba(108,77,196,0.1)",
            color: "#6c4dc4",
            fontWeight: 700,
            fontSize: 13,
            borderRadius: 2,
          }}
        />
        <IconButton onClick={onClose} sx={{ color: "#2d2047" }} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Step progress indicators — current bar animates via `progress` prop */}
      <Box sx={{ display: "flex", gap: 1, px: 3, mb: 2 }}>
        {[1, 2, 3, 4].map((n) => (
          <LinearProgress
            key={n}
            variant="determinate"
            value={n < patternNumber ? 100 : n === patternNumber ? progress : 0}
            sx={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              bgcolor: "#d8ccfa",
              "& .MuiLinearProgress-bar": {
                bgcolor: "#6c4dc4",
                transition: n === patternNumber ? "transform 0.15s linear" : "none",
              },
            }}
          />
        ))}
      </Box>

      {/* Main content */}
      <Box sx={{ flex: 1, px: 3, display: "flex", flexDirection: "column", gap: 2.5, overflowY: "auto" }}>
        {/* Pattern header card */}
        <Card
          sx={{
            background: GRADIENT_COLORS[patternNumber],
            borderRadius: "16px",
            boxShadow: "0 6px 24px rgba(108,77,196,0.25)",
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="overline"
              sx={{ color: "rgba(255,255,255,0.8)", letterSpacing: 2, fontWeight: 700, display: "block", mb: 0.5 }}
            >
              PATTERN FOUND
            </Typography>
            <Typography variant="h5" sx={{ color: "white", fontWeight: 800, lineHeight: 1.3 }}>
              {title}
            </Typography>
          </CardContent>
        </Card>

        {/* Description */}
        <Card sx={{ borderRadius: "16px", border: "1px solid #d9cbff", boxShadow: "none" }}>
          <CardContent sx={{ p: 2.5 }}>
            <Typography variant="body1" sx={{ color: "#2d2047", lineHeight: 1.7, fontSize: 15 }}>
              {description}
            </Typography>
          </CardContent>
        </Card>

        {/* Insight */}
        <Card sx={{ borderRadius: "16px", bgcolor: "rgba(108,77,196,0.06)", border: "1px solid rgba(108,77,196,0.15)", boxShadow: "none" }}>
          <CardContent sx={{ p: 2.5 }}>
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
              <LightbulbOutlinedIcon sx={{ color: "#6c4dc4", mt: 0.3, flexShrink: 0 }} />
              <Box>
                <Typography variant="overline" sx={{ color: "#6c4dc4", fontWeight: 700, letterSpacing: 1, display: "block", mb: 0.5 }}>
                  TINU'S INSIGHT
                </Typography>
                <Typography variant="body2" sx={{ color: "#2d2047", lineHeight: 1.65, fontSize: 14 }}>
                  {insight}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", py: 1.5 }}>
        <Box sx={{ width: 134, height: 5, bgcolor: "#b0a3c4", opacity: 0.3, borderRadius: 3 }} />
      </Box>
    </Box>
  );
}
