const express = require("express");
const cors = require("cors");
const axios = require('axios');


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "de5df909-3ad8-47cf-aa5d-34776f670903";
const CHAT_ENGINE_PRIVATE_KEY = "f5993af1-b5a9-4cf0-8d7d-0ea77973af93";


app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "f5993af1-b5a9-4cf0-8d7d-0ea77973af93" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);