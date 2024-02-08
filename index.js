import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/add-post", (req, res) => {
    //const postContent = req.body.postContent;
    //res.redirect('/');
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
