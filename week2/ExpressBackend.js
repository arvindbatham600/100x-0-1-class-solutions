const express = require("express");
const app = express();
app.use(express.json());

const user = [
  {
    name: "Arvind",
    isDeveloper: true,
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

// get request to fetch the details of the kidneys like count of total kidneys and count of healthy and unhealthy kidneys

app.get("/", (req, res) => {
  const kidneys = user[0].kidneys;
  const totalKidneys = kidneys.length;
  const healthyKidneys = kidneys.filter((item) => item.healthy == true);
  const totalHealthyKidnyes = healthyKidneys.length;
  const totalUnhealthyKidneys = totalKidneys - totalHealthyKidnyes;

  // send response in json format -->
  res.json({
    totalKidneys,
    totalHealthyKidnyes,
    totalUnhealthyKidneys,
  });
});

// post request to add unhealty kidney
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "post request done !!",
  });
});

// put request to replace all the unhealthy kidneys with healthy kidney

app.put("/", (req, res) => {
  user[0].kidneys.map((item) => {
    if (!item.healthy) {
      item.healthy = true;
    }
  });
  res.json({
    msg: "put request done !!",
  });
});

// delete request to delete all the unhealthy kidneys -->

app.delete("/", (req, res) => {
  const healthyKidnyes = user[0].kidneys.filter((item) => item.healthy == true);
  user[0].kidneys = healthyKidnyes;
  console.log(healthyKidnyes);
  res.json({
    msg: "delete request done !!",
  });
});

app.listen(4000, () => {
  console.log("We are listening on port 4000");
});
