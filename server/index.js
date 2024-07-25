const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { User, Content } = require('./db'); // Adjust the path as necessary
const ds = require("./dataservice");
const dc = require("./content");

// MongoDB connection is already handled in db.js
// App creation
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

// Application-specific middleware
const appMiddleware = (req, res, next) => {
  console.log("application specific middleware");
  next();
};
app.use(appMiddleware);

// Resolving HTTP requests
app.post('/login', (req, res) => {
  ds.login(req.body.username, req.body.password)
    .then(user => {
      if (user) {
        res.status(user.statuscode).json(user);
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.post('/register', (req, res) => {
  ds.register(req.body.name, req.body.gender, req.body.phoneNo, req.body.username, req.body.password)
    .then(user => {
      if (user) {
        res.status(user.statuscode).json(user);
      } else {
        res.status(400).json({ message: "Registration failed" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.post('/content', (req, res) => {
  dc.content(req.body.placename, req.body.imageUrl, req.body.details, req.body.field)
    .then(user => {
      if (user) {
        res.status(user.statuscode).json(user);
      } else {
        res.status(400).json({ message: "Content creation failed" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.get('/admin', (req, res) => {
  dc.contentlist()
    .then(data => {
      res.status(data.statuscode).json(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.delete('/admin/:placename', (req, res) => {
  dc.deletecontent(req.params.placename)
    .then(data => {
      if (data) {
        console.log(data);
        res.status(data.statuscode).json(data);
      } else {
        res.status(404).json({ message: "Content not found" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});