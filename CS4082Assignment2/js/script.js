var software;
var past;
var javascript;
var keepGoing = false;
var count = 0;

const delay = ms => new Promise(res => setTimeout(res, ms));
// source https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line

function setCookie(cname, cvalue, exDays) { // changed to exMins
    var d = new Date();
    d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function checkCookies() {
    var user = getCookie("name");
    var org = getCookie("organization");
    if (user != "" && age != "") {
      alert("Welcome back " + user);
      alert("You are a part of " + org);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 1); 
      }
      age = prompt("Please enter your organization:", "");
      if (age != "" && age != null) {
        setCookie("age", age, 1); 
      }
    }
  }

  function rollOver(choice) {
    var div1;
    var div2;
    var paragraph;
    if(choice == 1) {
      console.log("Choice 1");
      div1 = "past";
      div2 = "javascript"
      paragraph = "<br>"
      paragraph += "This was a semester long group assingment compeleted during the Fall semester 2021. The task was to create an internship "
      paragraph += "program to be used by South Carolina computing assignments. We had to plan our project, divide up the work, and "
      paragraph += "use SCRUM and Github to keep track of the whole project. I included this because it was the biggest assignment I have "
      paragraph += "ever completed and I am very proud of work done. "
    } else if (choice == 2) {
      console.log("Choice 2");
      div1 = "javascript";
      div2 = "software";
      paragraph = "<br>"
      paragraph += "This was the first digital portfolio I made when I was in high school. I thought it would be appropriate to use it ";
      paragraph += "to see how far I have come sense then. There were many things about my past portfolio that I liked, and I am sure you ";
      paragraph += "can see the influence in this one (same font, generally format, etc). However, I added JavaScript to this one, which "
      paragraph += "the past one did not have. I also changed the buttons and added cookies.  "
    } else if (choice == 3) {
      console.log("Choice 3");
      div1 = "past";
      div2 = "software"
      paragraph = "<br><br>";
      paragraph += "I chose to show this assignment because it was one of my favorites from this class. I think it is really fun to mess with "
      paragraph += "and also shows off complex JavaScript. As someone with past HTML/CSS experience, the JavaScript aspect of this class was "
      paragraph += "one of the main reasons I decided to take it (as JavaScript was the area I was lacking in."
    } else {
      console.log("Invalid choice");
    }

    document.getElementById(div1).innerHTML = paragraph;
    document.getElementById(div2).innerHTML = "";
  }
  
  function save() {
    software = document.getElementById("software").innerHTML;
    past = document.getElementById("past").innerHTML;
    javascript = document.getElementById("javascript").innerHTML;
}

  function mouseOut() {
    document.getElementById("software").innerHTML = software;
    document.getElementById("past").innerHTML = past;
    document.getElementById("javascript").innerHTML = javascript;

  }

  async function supriseMe(){
    if(count % 2 ==0) {
      count++;
      console.log("suprise starting");
      document.getElementById("suprise").innerHTML = "Stop!";
      keepGoing = true;
      var choice;
      var source;
      while(keepGoing) {
        choice = Math.floor(Math.random()*4) + 1;
        switch(choice) {
          case 1:
            console.log("about me was selected");
            source = "aboutme.html";
            break;
          case 2: 
            console.log("course was selected");
            source = "course.html";
            break;
          case 3: 
            console.log("employement was selected");
            source = "employment.html";
            break;
          case 4:
            console.log("portfolio was selected");
            source = "portfolio.html";
            break;
          default:
            break;
        }
        document.getElementById("iframe").src = source;
        console.log("Waiting 30 seconds")
        await delay(30000); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
      }
    } else {
      count++;
      keepGoing = false;
      console.log("stopping");
      document.getElementById("suprise").innerHTML = "Suprise Me!";
    }
  }



  