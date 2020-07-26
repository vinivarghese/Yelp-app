import React from "react";
import "./BusinessCard.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

interface IBusinessCardProps {
  IconUrl: string | undefined;
  Description: string | undefined;
  Location: string | undefined;
  Phone: string | undefined;
  // Rating: string | undefined;
  // Rating: number | undefined;
}

function BusinessCard(props: IBusinessCardProps) {
  return (
    <div>
      <Card className="BusinessCardContainer">
        <CardActionArea>
          <CardMedia className="BusinessCardImage" image={props.IconUrl} />
          <CardContent>
            <Typography component="p" className="BuinessCardDetails">
              {props.Description}
            </Typography>
            <Typography component="p" className="BuinessCardDetails">
              {props.Location}
            </Typography>
            <Typography component="p" className="BuinessCardDetails">
              {props.Phone}
            </Typography>
            {/* <Typography component="p" className="BuinessCardDetails">
              {props.Rating}
            </Typography> */}
            {/* <Typography component="p" className="BuinessCardDetails">
              {props.Rating}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default BusinessCard;
