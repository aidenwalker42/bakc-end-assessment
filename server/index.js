const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A web app will tell you that you suck.",
    "You suck."
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/TLW/:count", function(req, res){
  const tlw = ["of", "to", "in", "it", "is", "be", 'as', 'at', 'so', 'we', 'he', 'by', 'or', 'on', 'do', 'if', 'me', 'my', 'up', 'an', 'go', 'no', 'us', 'am'];
  let sentwords = [];
  let str = "";
  let randomIndex = Math.floor(Math.random() * tlw.length);
  for(let i=0; i<req.params.count; i++)
  {
    randomIndex = Math.floor(Math.random() * tlw.length);;
    sentwords.push(tlw[randomIndex]);
  }
  for(let j=0; j<sentwords.length; j++)
  {
    str += sentwords[j] + " ";
  }
  res.status(200).send(str);
})

app.listen(4000, () => console.log("Server running on 4000"));
