import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MicIcon from "@mui/icons-material/Mic";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const MOMENT_OPTIONS = [
  "Memorable Moments",
  "Connection",
  "Happy Moment",
  "Decisions",
  "Challenges",
  "Worries",
  "Friction",
  "Proud Moments",
  "Growth Highlights",
  "Custom Moment",
];

function buildDateOptions() {
  const opts: { label: string; date: Date }[] = [];
  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    let label = "";
    if (i === 0) label = "Today";
    else if (i === 1) label = "Yesterday";
    else label = d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
    opts.push({ label, date: d });
  }
  return opts;
}

const DATE_OPTIONS = buildDateOptions();

const selectSx = {
  borderRadius: "16px",
  fontSize: 15,
  fontWeight: 600,
  color: "#2d2047",
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#d9c8ff" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#6c4dc4" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#6c4dc4" },
  "& .MuiSelect-icon": { color: "#6c4dc4" },
};

export default function MomentEntry() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedMoment, setSelectedMoment] = useState("Custom Moment");
  const [selectedDate, setSelectedDate] = useState("Today");
  const textareaRef = useRef<HTMLInputElement>(null);

  const hasText = text.trim().length > 0;

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleBack = () => { hasText ? setShowCancelModal(true) : navigate(-1); };
  const handleCancel = () => { hasText ? setShowCancelModal(true) : navigate(-1); };
  const handleSave = () => { if (hasText) navigate("/processing"); };
  const handleConfirmYes = () => { setShowCancelModal(false); navigate("/", { state: { draftSaved: true } }); };
  const handleConfirmNo = () => setShowCancelModal(false);

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
        px: 3,
        py: 1.5,
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 1 }}>
        <IconButton onClick={handleBack} size="small" sx={{ color: "#2d2047" }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <Typography
          variant="subtitle1"
          sx={{ flex: 1, textAlign: "center", fontWeight: 700, color: "#2d2047", fontSize: 17 }}
        >
          Capture your child's Moments
        </Typography>
        <Box sx={{ width: 32 }} />
      </Box>

      {/* Dropdowns row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5, gap: 1.5 }}>
        <FormControl size="small" sx={{ flex: 1 }}>
          <Select value={selectedMoment} onChange={(e) => setSelectedMoment(e.target.value)} sx={selectSx}>
            {MOMENT_OPTIONS.map((opt) => (
              <MenuItem key={opt} value={opt} sx={{ fontSize: 14 }}>{opt}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 130 }}>
          <Select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            startAdornment={<CalendarTodayIcon sx={{ fontSize: 16, color: "#6c4dc4", mr: 0.5 }} />}
            sx={selectSx}
          >
            {DATE_OPTIONS.map((opt) => (
              <MenuItem key={opt.label} value={opt.label} sx={{ fontSize: 14 }}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Textarea */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0, mb: 2 }}>
        <TextField
          inputRef={textareaRef}
          multiline
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Jiyu didn't finish dinner, but seemed quieter than normal ..."
          variant="outlined"
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              height: "100%",
              alignItems: "flex-start",
              bgcolor: "white",
              borderRadius: "16px",
            },
            "& .MuiInputBase-inputMultiline": { height: "100% \!important", overflowY: "auto \!important" },
          }}
          InputProps={{ sx: { height: "100%", alignItems: "flex-start" } }}
        />
      </Box>

      {/* Action bar */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
        {/* Record */}
        <Button
          variant="contained"
          startIcon={<MicIcon />}
          sx={{
            bgcolor: hasText ? "rgba(108,77,196,0.5)" : "#6c4dc4",
            color: "white",
            borderRadius: "16px",
            px: 2.5,
            height: "40px",
            boxShadow: "none",
            "&:hover": { bgcolor: hasText ? "rgba(108,77,196,0.6)" : "#5a3db8", boxShadow: "none" },
          }}
        >
          Record
        </Button>

        <Box sx={{ display: "flex", gap: 1 }}>
          {/* Cancel */}
          <Button
            variant="outlined"
            startIcon={<CloseIcon />}
            onClick={handleCancel}
            sx={{
              borderColor: "#b49ae8",
              color: "#2d2047",
              borderRadius: "16px",
              px: 2,
              height: "40px",
              "&:hover": { borderColor: "#6c4dc4", bgcolor: "rgba(108,77,196,0.05)" },
            }}
          >
            Cancel
          </Button>

          {/* Save */}
          <Button
            variant="contained"
            startIcon={<CheckIcon />}
            onClick={handleSave}
            disabled={!hasText}
            sx={{
              bgcolor: hasText ? "#6c4dc4" : "rgba(108,77,196,0.38)",
              color: "white",
              borderRadius: "16px",
              px: 2,
              height: "40px",
              boxShadow: "none",
              "&:hover": { bgcolor: hasText ? "#5a3db8" : "rgba(108,77,196,0.38)", boxShadow: "none" },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>

      {/* Home indicator */}
      <Box sx={{ display: "flex", justifyContent: "center", pb: 1 }}>
        <Box sx={{ width: 134, height: 5, bgcolor: "#b0a3c4", opacity: 0.3, borderRadius: 3 }} />
      </Box>

      {/* Cancel confirmation Dialog */}
      <Dialog open={showCancelModal} onClose={handleConfirmNo} maxWidth="xs" fullWidth>
        <DialogContent sx={{ textAlign: "center", pt: 4, pb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#2d2047" }}>
            Are you sure you want to cancel?
          </Typography>
          <Typography variant="body2" sx={{ color: "#7b6e8f" }}>
            You have unsaved changes, canceling will save them as a draft.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", gap: 2, pb: 3 }}>
          <Button
            variant="outlined"
            startIcon={<CloseIcon />}
            onClick={handleConfirmNo}
            sx={{ borderColor: "#b49ae8", color: "#2d2047", px: 3, borderRadius: 8 }}
          >
            No
          </Button>
          <Button
            variant="contained"
            startIcon={<CheckIcon />}
            onClick={handleConfirmYes}
            sx={{ bgcolor: "#6c4dc4", px: 3, borderRadius: 8, boxShadow: "none" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
