"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Card, CardContent, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";

import proimg1 from "@/public/images/blog/blog-img1.jpg";

export default function Messages() {
  const [messages] = useState([
    { from: "You", message: `Sure, I'll see you later.`, time: "10:42am", color: "primary" as "primary" },
    { from: "John Doe", message: "Yeah, sure. Does 1:00pm work?", time: "10:37am", color: "secondary" as "secondary" },
    { from: "You", message: "Did you still want to grab lunch today?", time: "9:47am", color: "success" as "success" },
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        {/* Ảnh nền */}
        <Box sx={{ position: "relative", height: 200 }}>
          <Image src={proimg1} alt="Background" layout="fill" objectFit="cover" />
          <AppBar position="absolute" sx={{ background: "rgba(0, 0, 0, 0.5)" }} elevation={0}>
            <Toolbar>
              <IconButton edge="start" color="inherit">
                <MenuIcon />
              </IconButton>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                Messages
              </Typography>
              <IconButton color="inherit">
                <MoreVertIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>

        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Today
          </Typography>

          {/* Timeline */}
          <Timeline sx={{ p: 0 }}>
            {messages.map((msg, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color={msg.color} />
                  {index !== messages.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body2">
                    <strong>{msg.from}</strong> @{msg.time}
                  </Typography>
                  <Typography variant="body2">{msg.message}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </Box>
  );
}
