import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const CardComp = ({image, title, rating, price }) => {
  

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <h3 className="card-title">{title}</h3>
       
        <div>
          <p>{rating.rate}</p>
          <h4>${price}</h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComp;
