const express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var xoauth2 = require("xoauth2");
const mongoconnect = require("./database").mongoconnect;
const getdb = require("./database").getdb;
const app = express();
var cors = require("cors");
mongoconnect(client => {
  console.log(client);
});
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

var rest = [];

app.post("/login", async (req, res, next) => {
  console.log("here");
  console.log(req.data);
  console.log(req.body.mailid);
  const db = getdb();
  var rex = null;
  try {
    rex = await db
      .collection("login")
      .find({ mail: req.body.mailid })
      .toArray();
    console.log(rex);
    if (rex.length != 0) rest[0] = rex[0];
    else rest = [];
    console.log("rt");
    console.log(rest);
    if (rest.length != 0) {
      console.log("rest.length!=0");
      if (rest[0].pass === req.body.password) {
        console.log("correct password");
        var obj = {
          id: rest[0]._id,
          fname: rest[0].fname,
          lname: rest[0].lname,
          mail: rest[0].mail,
          pass: rest[0].pass,
          notifications: rest[0].notifications
        };
        console.log(obj);
        res.json(obj);
      } else res.json(false);
    } else {
      console.log("else");
      res.json(false);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/admin/users", async (req, res, next) => {
  console.log("here");
  console.log(req.data);
  console.log(req.body.mailid);
  const db = getdb();
  var rex = null;
  try {
    rex = await db
      .collection("login")
      .find({ mail: req.body.mailid })
      .toArray();
    console.log(rex);
    if (rex.length != 0) rest[0] = rex[0];
    else rest = [];
    console.log(rest);
    if (rest.length) {
      if (rest[0].pass === req.body.password) {
        console.log("correct password");
        if (rest[0].isAdmin) {
          const db1 = getdb();
          const getAllUserAsync = await db1
            .collection("login")
            .find()
            .toArray();
          if (getAllUserAsync.length != 0) rest = getAllUserAsync;
          else rest = [];
          console.log(rest);
          if (rest.length) res.json(rest);
        }
        res.json("Not Admin");
      } else res.json(false);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/signup", async (req, res, next) => {
  const db = getdb();
  var rex = null;
  try {
    rex = await db
      .collection("login")
      .find({ mail: req.body.mail })
      .toArray();
    console.log(rex);
    console.log(rex.length);
    if (rex.length == 0) {
      const result = await db.collection("login").insertOne({
        fname: req.body.fname,
        lname: req.body.lname,
        mail: req.body.mail,
        pass: req.body.pass,
        notifications: []
      });
      console.log(result);
      var obj = {
        fname: req.body.fname,
        lname: req.body.lname,
        mail: req.body.mail,
        pass: req.body.pass,
        notifications: [],
        isAdmin: false
      };
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "sanjayjnayak9@gmail.com",
          clientId:
            "654777836582-28mvnk0qvk3m7at3kbljb80h74evvvk1.apps.googleusercontent.com",
          clientSecret: "GFYNyX-1FIV1TwkRJ1QxrtZ4",
          refreshToken: "1/q9xzkHS65QoPDcgra7tbUWkfx5onVxXZ9D37sfXsVqc",
          accessToken:
            "ya29.GluuBjtrbRC6ZiJNGx-fdylKU8w-mS0IHzXzjELQW_lDgK8qxjUhmeaQCMPs6VVkETgr8w58WxdIqtz-3yf8ZEzt33RdWJYVkdL0egQzNDTyawJGmc-mTTFx4O-e"
        }
      });

      var mailOptions = {
        from: "Sanjay<sanjayjnayak9@gmail.com>",
        to: obj.mail,
        subject: "Signup On Water Portal",
        text: "Welcome to The Groundwater Portal of India!"
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.json(obj);
    } else res.json(false);
  } catch (err) {
    console.log(err);
  }
});

app.listen('/updateone',async(req,res,next)=>{
  const db = getdb();
  var rex = null;
  try{
    db.collection('login').updateOne(
        { "_id" : req.body.id },
        { $set: { "fname" : req.body.fname },
        $set: {"lname":req.body.lname },
        $set:{'mail':req.body.pass}
    }
        )
        res.json(true)
}
catch(err){
  console.log(err)
}

app.listen(3001, () => {
  console.log("now conn");
})
