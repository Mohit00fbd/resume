var bio = {
  "name": "Mradul Verma",
  "role": "Full Stack Developer",
  "contacts": {
    "mobile": "+91-945-529-6154",
    "email": "mohit00fbd@gmail.com",
    "github": "Mohit00fbd",
    "linkedin": "https://in.linkedin.com/in/mradulverma",
    "location": "Allahabad"
  },
  "welcomeMessage": "<p>Focused, Results-Driven, Resourceful, Self-Reliant, Punctual, Perfectionist.</p>"
  +"<p>I got 3rd position in Pragyan Frontend Design Challenge and 2nd position in "
  +"Summer Trainee Challenge at MNNIT Allahabd for designing Web App. "
  +" I've designed  various websites for college events as well. "
  +"My startup has been placed in top 50 by E-cell IIT Bombay and "
  +"top 15 by E-cell NIT Silchar among all budding Indian startups. "
  +"Although it failed, but it taught me a lot.</p>"
  +"<p>I've keen interest in Entrepreneurship and I'm passionate about "
  +"developing apps that solve problems. I love what I do, it fuels me "
  +"and is sort of adventurous to me. I work diligently to stand out of "
  +"the crowd. I have competitive spirit and I'm a fan of perfection as "
  +"well as elegance. I value quality over quantity. I'm open to ideas and "
  +"I know how to make my team comfortable.</p>"
  +"<p>I can work on all the aspects of a project from planning through designing "
  +"to development.</p>"
  +"<p>Acknowledging others is important to me, so everyone on my team gets his/her credit.</p>"
  +"<p>Presently, I'm pursuing B.Tech. in Computer Science & Engineering from J.K. "
  +"Institute Of Applied Physics & Technology, University Of Allahabd, Allahabad. "
  +"I'm looking for internship opportunities, if you're interested you can mail me at mohit00fbd@gmail.com.</p>",
  "skills": ["HTML","CSS","JavaScript","Java","Python","JSP","C","C++"],
  "bioPic": "img/me/me.jpg",
  "skillsDisplay": function(){
      if(bio.skills.length!=0){
        for(skill in bio.skills){
          var newHTMLskills = HTMLskills.replace("%data%",bio.skills[skill]);
          //console.log(newHTMLskills);
          $("#skills").append(newHTMLskills);
        }
      }
    },
    "headerDisplay": function(){
    	var newHTMLheaderName = HTMLheaderName.replace("%data%",bio.name);
    	var newHTMLheaderRole = HTMLheaderRole.replace("%data%",bio.role);
      $("#header").prepend(newHTMLheaderRole);
      $("#header").prepend(newHTMLheaderName);
    },
    "bioPicDisplay":function(){
      var newHTMLbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
      var newHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
      $("#picWelcome").append(newHTMLbioPic);
      $("#picWelcome").append(newHTMLwelcomeMsg);
    }
}
var work ={

"jobs": [
    {
      "employer":"Medli",
      "date":"September, 2015 - February,2016",
      "title":"Founder",
      "description":"Web Development, Brand Development, SEO, UX, Business-Plan,"
      +" Sales Strategy, Team Development & Management, Leadership,"
      +" Decision Making and Social Media Marketing."
      +" Dealt with local businessmen and generated new deals with pharmacies.",
      "location": "Allahabad, IN"
    },
    {
      "employer":"Shuktika",
      "date":"February, 2015 - September, 2015",
      "title":"Design Illustrator",
      "description":"I designed cover pages of the magazine as well as the layouts"
      +" of some pages with articles. It improved my Photoshop and InDesign "
      +"skills. Here's the link "
      +"https://www.behance.net/gallery/27887479/shuktika .",
      "location": "Allahabad, IN"
    },
    {
      "employer":"Tech Blogs",
      "date":"March, 2010 - June, 2015",
      "title":"Founder and Author",
      "description":"I designed some of the blogs and has written tech articles."
      +" I worked upon SEO of these blogs too; optimized them to get adsense"
      +" approval. I remain updated with technology what's coming and what's"
      +" going out of business. I gained exposure. At one time these blogs had"
      +" approx. 10,000 pageviews per day."
      +" These blogs also had some good dofollow backlinks.",
      "location": "Farrukhabad, IN"
    }
  ],
  "display":function(){
    for(var job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var newHTMLworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var newHTMLworkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedHTML = newHTMLworkEmployer+newHTMLworkTitle;
      $(".work-entry:last").append(formattedHTML);
      var newHTMLworkDates = HTMLworkDates.replace("%data%",work.jobs[job].date);
      var newHTMLworkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      var newHTMLworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(newHTMLworkDates);
      $(".work-entry:last").append(newHTMLworkLocation);
      $(".work-entry:last").append(newHTMLworkDescription);
    }
  }
}

var education = {
  "schools" : [{
  "name":"JK Institute Of Applied Physics & Technology",
  "location":"Allahabad, IN",
  "degree":"Bachelor Of Technology",
  "major":"Computer Science & Engineering",
  "dates":"August, 2014 - Present"
}],
  "onlineCourses":[{
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": "July, 2016",
    "url": "https://www.udacity.com/course/javascript-basics--ud804"
  },{
    "title": "Learning Java 8",
    "school": "Infinite Skills",
    "dates": "July, 2016",
    "url": "http://www.infiniteskills.com/training/learning-java-8.html"
  }],
  "otherCourses":[{
    "title": "Enhancing Skills for Enterprise Scale Application Development",
    "school": "Motilal Nehru National Institute Of Technology",
    "location":"Allahabad,IN",
    "content":"Core Java, Advanced Java",
    "dates": "June, 2016"
  }],
  "display":function(){
      education.schools.forEach(function(value,index,arr){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%",value.name)
      +HTMLschoolDegree.replace("%data%",value.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%",value.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",value.location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",value.major));
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(value,index,arr){
      $('#education').append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",value.title)
    +HTMLonlineSchool.replace("%data%",value.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%",value.dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%",value.url));
    });
    $("#education").append(HTMLotherCourses);
    education.otherCourses.forEach(function(value,index,arr){
      $('#education').append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLotherTitle.replace("%data%",value.title)
    +HTMLotherSchool.replace("%data%",value.school));
    $('.education-entry:last').append(HTMLotherLocation.replace("%data%",value.location));
      $(".education-entry:last").append(HTMLotherDates.replace("%data%",value.dates));
      $('.education-entry:last').append(HTMLotherContents.replace(
        "%data%",value.content
      ));
    });
  }
}
var project =
{
  "projects":[
    {
    "title": "Transport Management System",
    "description": "Transport Management System can be used to manage vehicles"+
    ", managers of a transport company having various branches. It is secure,"+
    " user-friendly, and responsive.Database is very well normalized. "+
    "I've used JSP for the backend and for frontend Materialize framework plus "
    +"vanilla JavaScript and CSS is used.",
    "images": ["img/projects/tms/tms1.png","img/projects/tms/tms2.png",
              "img/projects/tms/tms3.png"],
    "videos":[],
    "linkName":"",
    "link":"",
    "date":"July, 2016"
  },
  {
  "title": "Nirupan's Website",
  "description": "Voluntarily designed Nirupan 2k15's website."
  +"  Nirupan is a cultural fest organized annually in Dr."
  +" Sarvepalli Radhakrishnan Hostel, University Of Allahabad."
  +" This is the first project of mine where i was able to showcase"
  +" my HTML and CSS skills."
  +" The website is coded with latest standards HTML5 and CSS3.",
  "images": ["img/projects/nirupan/nirupan1.png","img/projects/nirupan/nirupan2.png",
            "img/projects/nirupan/nirupan3.png"],
  "videos":[],
  "linkName":"",
  "link":"",
  "date":"February, 2015"
},
{
"title": "Mafia",
"description": "Mafia is a college event website template designed for the"
+" Pragyan Frontend Design Challenge held on hackerearth based on theme MAFIA."
+" Hundreds of developers participated from all over the world."
+" I was placed third in this competition."
+" The website is coded with latest standards HTML5 and CSS3.",
"images": ["img/projects/mafia/mafia1.png","img/projects/mafia/mafia2.png",
          "img/projects/mafia/mafia3.png"],
"videos":[],
"linkName":"",
"link":"",
"date":"February, 2016"
},
{
"title": "Draw Salman",
"description": "Just for fun. Draw something with Salman Khan's Face.",
"images": ["img/projects/drawSalman/drawSalman.png"],
"videos":[],
"linkName":"",
"link":"",
"date":"February, 2016"
},
{
"title": "Exuberance",
"description": "College Event Website.",
"images": ["img/projects/exuberance/exuberance1.png",
"img/projects/exuberance/exuberance2.png","img/projects/exuberance/exuberance3.png"],
"videos":[],
"linkName":"",
"link":"",
"date":"November, 2015"
},
{
"title": "Economic Crosscut",
"description": "The main objective of this project was to build an "+
"autonomous robot which can use Image Processing to traverse from start"+
" to finish at the least cost possible. A* algorithm was used for finding"+
" path with least cost of traversal. Python with OpenCV was used for Image "
+"Processing. On the hardware side Arduino was used. Signals were sent from "+
"computer to Arduino via Xbee interface.<a href=\"./files/crosscut.pdf\">PROB"+
"LEM STATEMENT</a>",
"images": [],
"videos":["https://www.youtube.com/embed/CfgZT_Wm_kw",
"https://www.youtube.com/embed/SPv2q_WUjHI"],
"linkName":"",
"link":"",
"date":"November, 2015"
}
  ],
  display: function(){
    for(i in project.projects){
      $("#projects").append(HTMLprojectStart);
      var newTitle = HTMLprojectTitle.replace("%data%",project.projects[i].title);
      var newDate = HTMLprojectDates.replace("%data%",project.projects[i].date);
      var newDescription = HTMLprojectDescription.replace("%data%",project.projects[i].description);
      $(".project-entry:last").append(newTitle);
      $(".project-entry:last").append(newDate);
      $(".project-entry:last").append(newDescription);
      if(project.projects[i].images.length>0){
        for(img in project.projects[i].images){
          $(".project-entry:last").append(HTMLprojectImage.replace(
            "%data%",project.projects[i].images[img]
          ));
        }
      }
      if(project.projects[i].videos.length>0){
        var vids = project.projects[i].videos;
        vids.forEach(function(value,index,arr){
          $(".project-entry:last").append(HTMLprojectVideo.replace("%data%",value));
        });
      }
    }
  }
}

var contact = {
  "mobile": "+91-9455296154",
  "email": "mohit00fbd@gmail.com",
  "twitter": "mradul0",
  "location": "Allahabad, IN",
  "display": function(){
    var newHTMLmobile = HTMLmobile.replace("%data%","+91-9455296154");
    var newHTMLemail = HTMLemail.replace("%data%","mohit00fbd@gmail.com");
    var newHTMLlocation = HTMLlocation.replace("%data%","Allahabad, IN");
    var newHTMLtwitter = HTMLtwitter.replace(/%data%/g,"mradul0");
    $("#topContacts").append(newHTMLmobile);
    $("#topContacts").append(newHTMLemail);
    $("#topContacts").append(newHTMLtwitter);
    $("#topContacts").append(newHTMLlocation);
    $("#footerContacts").append(newHTMLmobile);
    $("#footerContacts").append(newHTMLemail);
    $("#footerContacts").append(newHTMLtwitter);
    $("#footerContacts").append(newHTMLlocation);
  }
}

//functionality starts

work.display();
project.display();
$("#mapDiv").append(googleMap);
bio.skillsDisplay();
bio.headerDisplay();
contact.display();
bio.bioPicDisplay();
education.display();
