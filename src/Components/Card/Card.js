import React, {useCallback} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./Card.scss";

const StandardCard = (props) => {
  const navigate  = useNavigate();
  const handleOnClick = useCallback(() => navigate (props.goTo, {replace: false}), [navigate, props.goTo]);
  const openNewWindow = () => { window.open(props.goTo) }

  return (
    <>
    <Card className="card" onClick={props.isLink === "false" ? handleOnClick : openNewWindow}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={props.imageLink}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}

export default StandardCard;