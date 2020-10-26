import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Pagination from "@material-ui/lab/Pagination";
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

export default function Gallery() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      console.log(page);
      const result = await axios(`http://localhost:9090/browse/${page}/10`);
      console.log(result);
      setData(result.data);
    }
    fetchData();
  }, [page]);

  const classes = useStyles();
  function handleNextPage() {
    setPage(page + 1);
  }
  function handlePrevPage() {
    if (page >= 2) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  }
  // function handlePageChange() {
  //   setPage(page + 1)
  //   console.log(page);
  // };

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((model) => (
              <Grid item key={model.uid} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={"data:image/jpg;base64," + model.image}
                    title={model.filename}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {model.name}
                    </Typography>
                    <Typography>{model.tags}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Refract
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div className={classes.pagination}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              handlePrevPage();
            }}
          >
            {"<- Previous"}
          </Button>
          <Button size="small" color="primary">
            {"-" + page + "-"}
          </Button>

          <Button
            size="small"
            color="primary"
            onClick={() => {
              handleNextPage();
            }}
          >
            {"Next ->"}
          </Button>
        </div>
      </main>
    </React.Fragment>
  );
}
