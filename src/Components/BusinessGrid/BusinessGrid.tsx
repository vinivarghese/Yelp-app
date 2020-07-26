import React, { useState, useEffect } from "react";
import BusinessCard from "../BusinessCard/BusinessCard";
import { Grid } from "@material-ui/core";
import "./BusinessGrid.css";

var client_secret = process.env.REACT_APP_API_KEY;

interface IState {
  image: any[];
  description: any[];
  location: any[];
  phone: any[];
}

interface IBusinessGridProps {
  SearchQuery: string | null;
}

function BusinessGrid(props: IBusinessGridProps) {
  const [ItemArray, setItemArray] = useState<IState[]>([
    { image: [], description: [], location: [], phone: [] },
  ]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
        props.SearchQuery,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${client_secret}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItemArray(data.businesses);
      })
      .catch(() => console.log("Please check your search query"));
  }, [props.SearchQuery]);

  var Cards: JSX.Element[] = [];
  ItemArray.forEach((el: IState, i: Number) => {
    if (!el) {
      return;
    }
    Cards.push(
      <Grid
        key={"card_" + i}
        item
        sm={6}
        md={4}
        lg={3}
        className="BusinessGridCard"
      >
        <BusinessCard
          IconUrl={el["image_url"]}
          Description={el["name"]}
          Location={el["location"]["display_address"]}
          Phone={el["display_phone"]}
          // Rating={el["rating"]}
        />
      </Grid>
    );
  });

  // useEffect(
  //   () => {
  //     fetch("https://api.chucknorris.io/jokes/random")
  //       //fetch('https://images-api.nasa.gov/search?media_type=image&q=' + props.SearchQuery )//+ '&year_start=' + props.StartDate?.getFullYear() + '&year_end=' + props.EndDate?.getFullYear())
  //       .then((response) => response.json())
  //       .then((response) => {
  //         //console.log(response);
  //         //console.log(1);
  //         setItemArray(response);
  //       })
  //       .catch((error) => console.log(error));
  //   },
  //   [props.SearchQuery] //, props.EndDate, props.StartDate]
  // );

  // useEffect(
  //   () => {
  //     fetch(
  //       //"https://data.ivanstanojevic.me/api/tle" //+
  //       "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&page=2&api_key=Wb6bbMU9a2h49UHezwkfgIAtLr5zqaq3Qcw3ri6K"
  //       // props.SearchQuery +
  //       // "&year_start=" +
  //       // props.StartDate?.getFullYear() +
  //       // "&year_end=" +
  //       // props.EndDate?.getFullYear()
  //     )
  //       .then((response) => response.json())
  //       .then((response) => {
  //         // setItemArray(response.member);
  //         setItemArray(response.photos);
  //       })
  //       .catch(() => console.log("It didn't work"));
  //   } //,
  //   //[props.SearchQuery] //, props.StartDate, props.EndDate]
  // );

  // var Cards: JSX.Element[] = [];
  // ItemArray.forEach((el: IState, i: Number) => {
  //   if (el.image === undefined) {
  //   } else if (!el || !el.image[0] || !el.description) {
  //     return;
  //   } else {
  //     Cards.push(
  //       <Grid
  //         key={"card_" + i}
  //         item
  //         sm={6}
  //         md={4}
  //         lg={3}
  //         className="BusinessGridCard"
  //       >
  //         <BusinessCard
  //           IconUrl={el["image"]["img_src"]}
  //           Description={el["description"]["earth_date"]}
  //         />
  //       </Grid>
  //     );
  //   }
  // });

  // var Cards: JSX.Element[] = [];
  // ItemArray.forEach((el: IState, i: Number) => {
  //   if (!el || !el.image || !el.description) {
  //     return;
  //   }
  //   Cards.push(
  //     <Grid
  //       key={"card_" + i}
  //       item
  //       sm={6}
  //       md={4}
  //       lg={3}
  //       className="BusinessGridCard"
  //     >
  //       <BusinessCard
  //         IconUrl={el["image"]["img_src"]}
  //         Description={el["description"]["earth_date"]}
  //       />
  //     </Grid>
  //   );
  // });

  return (
    <div>
      <Grid container spacing={3} className="BusinessGridContainer">
        {Cards}
      </Grid>
    </div>
  );
}

export default BusinessGrid;
