const express = require("express")
const bodyParser = require("body-parser")
const nodemon = require("nodemon")
const date = require(__dirname + "/date.js")
const app = express()
//in the above code we require the modules for npm packages
const info = []
//here we declare an empty array to store user's input
const worktask = []
app.set('view engine', 'ejs')
//here we set the conditions for ejs
app.use(bodyParser.urlencoded({
  extended: true
}))

//this is used coz we want to use the user's input
app.use(express.static("public"))
app.get("/", (req, res) => {
const thisday = date.Daydata()
  res.render("list", {
    task: thisday,
    useradd: info
  })
  //res.render shows the web page in the browser which is called list here and to store the value of thisday and info array we store in aaj and useradd and pass these variables to webpage

})
app.post("/", (req, res) => {
  const userdata = req.body.userinfo;
  //variable userdata stores the user input

  if(req.body.list === 'Work'){
    worktask.push(userdata)
    res.redirect("/work")
  }else {
    info.push(userdata)
    //pushes the user input to info array
    res.redirect("/")
  //res.redirect redirects the page to app.get
  }

})
app.get("/work", function(req, res) {
  res.render("list", {
    task: "Work List",
    useradd: worktask
  })
})
app.get("/about", (req, res) => {
  res.render("about")
})
app.listen("3000", (req, res) => {
  console.log("server started")
})
