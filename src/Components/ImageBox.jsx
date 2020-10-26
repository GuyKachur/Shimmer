import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  pagination: {
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ImageBox() {
  const classes = useStyles();
  let { id } = useParams();
  const [data, setData] = useState({ data: {} });
  useEffect(() => {
    async function fetchData() {
      const result = await axios(`http://localhost:9090/image/${id}`);
      console.log(result);
      setData(result.data);
    }

    fetchData();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  console.log(data);

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={"data:image/jpg;base64," + data.image}
              title={data.filename}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography>{data.tags}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Refract
              </Button>
            </CardActions>
          </Card>
        </Container>
      </main>
    </React.Fragment>
  );
}
