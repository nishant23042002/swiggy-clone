const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/swiggy", async (req, res) => {
  try {
    const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5", {
      params: {
        lat: "28.6126255",
        lng: "77.04108959999999",
        page_type: "DESKTOP_WEB_LISTING",
      },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/113.0.0.0 Safari/537.36",
        "Accept": "application/json",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Swiggy API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Swiggy" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
