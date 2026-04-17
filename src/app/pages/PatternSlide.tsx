import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import CloseIcon from "@mui/icons-material/Close";

interface PatternSlideProps {
  patternNumber: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  progress: number;
  onClose: () => void;
}

export default function PatternSlide({
  patternNumber,
  title,
  subtitle,
  icon,
  progress,
  onClose,
}: PatternSlideProps) {
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          pt: 2.5,
          pb: 1,
          position: "relative",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, color: "#2d2047", fontSize: 16 }}
        >
          How patterns work
        </Typography>
        <IconButton
          onClick={onClose}
          size="small"
          sx={{ color: "#2d2047", position: "absolute", right: 12 }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Progress bars (animate current slide) */}
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

      {/* Icon card — fixed height 150px */}
      <Box sx={{ display: "flex", justifyContent: "center", px: 4 }}>
        <Box
          sx={{
            width: 200,
            height: 150,
            borderRadius: "28px",
            bgcolor: "#e6e0f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9e9baf",
          }}
        >
          {icon}
        </Box>
      </Box>

      {/* Title & subtitle */}
      <Box sx={{ px: 4, mt: 2.5, textAlign: "center" }}>
        <Typography
          sx={{ fontWeight: 800, color: "#2d2047", mb: 1.5, lineHeight: 1.2, fontSize: 24 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#7b6e8f", lineHeight: 1.65, fontSize: 16, whiteSpace: "pre-line" }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Flex spacer pushes dots to bottom */}
      <Box sx={{ flex: 1 }} />

      {/* Progress dots */}
      <Box sx={{ display: "flex", gap: 1, justifyContent: "center", alignItems: "center", pb: 10 }}>
        {[1, 2, 3, 4].map((n) => {
          const isActive = n === patternNumber;
          const isPast = n < patternNumber;
          return (
            <Box
              key={n}
              sx={{
                height: 8,
                width: isActive ? 28 : 8,
                borderRadius: "100px",
                bgcolor: isActive || isPast ? "#6c4dc4" : "rgba(108,77,196,0.22)",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
