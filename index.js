const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { ZingMp3 } = require("zingmp3-api-full-v2");
const app = express();

//setup
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
dotenv.config();
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

//routes
app.get("/api/playlist/:encodeId", (req, res) => {
  try {
    ZingMp3.getDetailPlaylist(req.params.encodeId).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/song/:encodeId", (req, res) => {
  try {
    ZingMp3.getSong(req.params.encodeId).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/home", (req, res) => {
  try {
    ZingMp3.getHome().then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/chart-home", (req, res) => {
  try {
    ZingMp3.getChartHome().then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/getTop100", (req, res) => {
  try {
    ZingMp3.getTop100().then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/getNewReleaseChart", (req, res) => {
  try {
    ZingMp3.getNewReleaseChart().then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/getInfo/:encodeId", (req, res) => {
  try {
    ZingMp3.getInfo(req.params.encodeId).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/getArtist/:encodeId", (req, res) => {
  try {
    ZingMp3.getArtist(req.params.encodeId).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/getLyric/:encodeId", (req, res) => {
  try {
    ZingMp3.getLyric(req.params.encodeId).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/search/:keyword", (req, res) => {
  try {
    ZingMp3.search(req.params.keyword).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/listMV/:id/:page/:count", (req, res) => {
  try {
    ZingMp3.getListMV(req.params.id, req.params.page, req.params.count).then(
      (data) => {
        res.status(200).json(data);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/categoryMV/:id", (req, res) => {
  try {
    ZingMp3.getCategoryMV(req.params.id).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/getMV/:encodeId", (req, res) => {
  try {
    ZingMp3.getVideo(req.params.encodeId).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/searchAll/:q/:page/:count", (req, res) => {
  try {
    ZingMp3.searchAll(req.params.q, req.params.page, req.params.count).then(
      (data) => {
        res.status(200).json(data);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/searchAllPlaylist/:q/:page/:count", (req, res) => {
  try {
    ZingMp3.searchAllPlaylist(
      req.params.q,
      req.params.page,
      req.params.count
    ).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/searchAllVideo/:q/:page/:count", (req, res) => {
  try {
    ZingMp3.searchAllVideo(
      req.params.q,
      req.params.page,
      req.params.count
    ).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/recommend-keyword", (req, res) => {
  try {
    ZingMp3.Suggest().then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//run server
app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000");
});
