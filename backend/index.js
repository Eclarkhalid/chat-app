const express = require("express");
const cors = require("cors");
const axios = require('axios');


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "369b267d-58e0-4d3d-917e-eae263e50c8d";
const CHAT_ENGINE_PRIVATE_KEY = "c2fbab06-7bd7-4f3d-93c9-c7655ae1da17";


app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "c2fbab06-7bd7-4f3d-93c9-c7655ae1da17" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);