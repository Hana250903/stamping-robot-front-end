"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
  Slider,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import HurricaneIcon from "@mui/icons-material/Tsunami";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function WeatherCard() {
  const [expand, setExpand] = useState(false);
  const [time, setTime] = useState(0);

  const labels = ["SU", "MO", "TU", "WED", "TH", "FR", "SA"];

  const forecast = [
    { day: "Tuesday", icon: <WbSunnyIcon />, temp: "24°/12°" },
    { day: "Wednesday", icon: <WbSunnyIcon />, temp: "22°/14°" },
    { day: "Thursday", icon: <CloudIcon />, temp: "25°/15°" },
  ];

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", p: 2 }} elevation={0}>
      <CardHeader
        title="Florida"
        subheader={
          <Typography variant="body2" color="error" display="flex" alignItems="center">
            <WarningIcon fontSize="small" sx={{ mr: 1 }} />
            Extreme Weather Alert
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="h3">64°F</Typography>
        <IconButton color="error">
          <HurricaneIcon fontSize="large" />
        </IconButton>
      </CardContent>

      <CardContent sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
        <Typography variant="body2" display="flex" alignItems="center">
          <AirIcon sx={{ mr: 1 }} />
          123 km/h
        </Typography>
        <Typography variant="body2" display="flex" alignItems="center">
          <WaterDropIcon sx={{ mr: 1 }} />
          48%
        </Typography>
      </CardContent>

      {expand && (
        <>
          <Slider
            value={time}
            onChange={(_, newValue) => setTime(newValue as number)}
            step={1}
            marks={labels.map((label, index) => ({ value: index, label }))}
            min={0}
            max={6}
            sx={{ mx: 2 }}
          />
          <List>
            {forecast.map((item) => (
              <ListItem key={item.day}>
                <ListItemText primary={item.day} secondary={item.temp} />
                {item.icon}
              </ListItem>
            ))}
          </List>
        </>
      )}

      <Divider />

      <CardActions>
        <IconButton onClick={() => setExpand(!expand)}>
          {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        <Typography sx={{ cursor: "pointer" }} onClick={() => setExpand(!expand)}>
          {expand ? "Hide Report" : "Full Report"}
        </Typography>
      </CardActions>
    </Card>
  );
}
