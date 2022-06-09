import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Card.scss";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "100px auto 0",  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="/assets/images/Lawdepot/LawDepot-Homepage.jpg"
          alt="LawDepot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            LawDepot
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Online legal document service provider
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
