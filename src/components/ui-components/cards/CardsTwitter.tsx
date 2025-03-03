"use client";

import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function TwitterCard() {
  return (
    <Card sx={{ maxWidth: 450, mx: "auto", backgroundColor: "#26c6da", color: "#fff" }} elevation={0}>
      <CardHeader
        avatar={<TwitterIcon fontSize="large" />}
        title="Twitter"
        titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
      />
      <CardContent>
        <Typography variant="h5">
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as
          well."
        </Typography>
      </CardContent>
      <CardActions>
        <Avatar
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          sx={{ bgcolor: "grey.700" }}
        />
        <div style={{ flexGrow: 1, paddingLeft: "10px" }}>
          <Typography variant="body1" fontWeight="bold">
            Evan You
          </Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            Vue Creator
          </Typography>
        </div>
        <IconButton sx={{ color: "#fff" }}>
          <FavoriteIcon />
          <Typography variant="body2" sx={{ marginLeft: "5px" }}>
            256
          </Typography>
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <ShareIcon />
          <Typography variant="body2" sx={{ marginLeft: "5px" }}>
            45
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
