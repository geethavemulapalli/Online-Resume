
var bio = {
	'name' : 'Geetha Madhuri', 
	'role' : 'UI Engineer',
	 
	'contacts' : {
		'mobile': '213-806-0560',
		'email': 'gvemulapalli@scu.edu', 
		'github': 'geetha33',
		'linkedin': 'geetha madhuri', 
		'location': 'Santa Clara'
	},
	'welcomeMessage': 'Welcome To My Resume', 
	'skills': ["HTML5","CSS3","Javascript","Ember.js","AJAX","jQuery"],
	'biopic': 'images/geetha.png',
	display : function(){
		
		var formatedheadername = HTMLheaderName.replace("%data%", bio.name);

		var formatedheaderrole = HTMLheaderRole.replace("%data%", bio.role);
   
		$('#header').prepend(formatedheaderrole);   
		$('#header').prepend(formatedheadername);


		var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

		var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);

		var formatedLinkedin = HTMLtwitter.replace("%data%", bio.contacts.linkedin);

		var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);

		var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);


		$('#topContacts').append(formatedmobile);
		$('#topContacts').append(formatedemail);
		$('#topContacts').append(formatedLinkedin);
		$('#topContacts').append(formatedgithub);
		$('#topContacts').append(formatedlocation);


		$('#footerContacts').append(formatedmobile);
		$('#footerContacts').append(formatedemail);
		$('#footerContacts').append(formatedLinkedin);
		$('#footerContacts').append(formatedgithub);
		$('#footerContacts').append(formatedlocation);
		var formatedbioPic = HTMLbioPic.replace("%data%", bio.biopic);

		$('#header').append(formatedbioPic);

		var formatedwelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$('#header').append(formatedwelcomemsg);

		$('#header').append(HTMLskillsStart);

		for(var i = 0; i < bio.skills.length; i++){

		var formatedskill = HTMLskills.replace("%data%", bio.skills[i]);
		$('#skills').append(formatedskill);
		}	
		
	}
}
   

bio.display(); 
var education = {
	"schools": [
		{
			"name": "Santa Clara University",
			"location": "Santa Clara, CA",
			"degree": "Masters",
			"majors": ["Computer Science"],
			"dates": 2016,
			"url": "https://www.scu.edu"
		},
	   
		{
			"name": "R.V.R & J.C",
			"location": "AP, India",
			"degree": "Bachelors",
			"majors": ["Information Technology"],
			"dates": 2014,
			"url": "http://www.rvrjcce.ac.in"
		}
   
   
	],
	display : function (){
		
		$('#education').append(HTMLschoolStart);
		for(var i = 0; i < education.schools.length; i++){
		var forschoolname = HTMLschoolName.replace("%data%", education.schools[i].name);
		var forschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var forschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var forschoollocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var forschoolmajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$('.education-entry').append(forschoolname);
		$('.education-entry').append(forschoolDegree);
		$('.education-entry').append(forschoolDates);
		$('.education-entry').append(forschoollocation);
		$('.education-entry').append(forschoolmajor);
		
	}
}
	
}

education.display();







   
   
var work = {
   	
	jobs: [{
		"employer": "TIBCO Software",
		"title": "Web Developer", 
		"location": "Palo Alto, CA", 
		"dates": "June 2015 - December 2015",
		"description": "Design, building and maintaining the contents of TIBCO Intranet properties (hr.tibco.com & Workday Information Center) as requested by content owners.Experience in working with functional business owners on gathering their requirements and translating those requirements into a technology solution." 
		
		
	},
	   
	{
		"employer": "Santa Clara University", 
		"title": "Teaching Assistant - Web Programming Course", 
		"location": "Santa clara, CA", 
		"dates": "Jan 2016 - March 2016",
	}
   
],
display :function (){

$('#workExperience').append( HTMLworkStart);
var foremployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
var foremtitle =  HTMLworkTitle.replace("%data%", work.jobs[0].title);
var foremdates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
var forlocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
var fordescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);
$('.work-entry').append(foremployer);
$('.work-entry').append(foremtitle);
$('.work-entry').append(foremdates);
$('.work-entry').append(forlocation);
$('.work-entry').append(fordescription);


var foremployer = HTMLworkEmployer.replace("%data%", work.jobs[1].employer);
var foremtitle =  HTMLworkTitle.replace("%data%", work.jobs[1].title);
var foremdates = HTMLworkDates.replace("%data%", work.jobs[1].dates);
var forlocation = HTMLworkLocation.replace("%data%", work.jobs[1].location);

$('.work-entry').append(foremployer);
$('.work-entry').append(foremtitle);
$('.work-entry').append(foremdates);
$('.work-entry').append(forlocation);

}

          
}

work.display();

   
var projects = {
   	
	   projects: [{
	   	
            "title": "Weather App", 
            "dates": "Jan 2015 - March 2015",
            "description": "This weather application provides hourly, daily and weekly Weather forecasts by collecting the live data from Forecast.io API. The user can type in the name of the city or zip code  of the city. The weather info of that specific city is displayed.The user can toggle the temperature from Celsius to Fahrenheit and vice versa. If user searchers for multiple cities, we have navigation buttons to switch between the cities.",
            "images": ["images/weather/weatherf.png", "images/weather/weather1.png", "images/weather/weather2.png", "images/weather/weather3.png"]
		 },
	   
	   {
	   	
	               "title": "MTrack", 
	               "dates": "Jan 2015 - March 2015",
	               "description": "MTrack is basically a financial tracker which allows  users to track how the money flows in and out of their pockets. We can record all our transactions with following fields 1. Amount, 2. Mode of Payment like cash, credit, debit for the way we want to categorize the transaction. 3. Categories where money spent: Food, Personal, Transportation, Education, Bills. 4. Categories where money credited Salary, Reimbursement, Personal. 5. Date 6. Time 7. Location where transaction took place. 2. We can view the transaction in a list format which displays list of all the saved transactions with details of all the fields. 3. We can view the transaction in a map format which specifies the location of transaction with details of some fields. 4. We can view the transaction in a calendar format which displays the list of transactions performed on a specified date with details of some fields.",
	               "images": ["images/Mtrack/start.png","images/Mtrack/form.png", "images/Mtrack/list.png", "images/Mtrack/map.png", "images/Mtrack/calendar.png", "images/Mtrack/upload.png" ]
		
		
	   	   },
		   {
	   	
		               "title": "Coffee Shop", 
		               "dates": "March 2015 - June 2015",
		               "description": "This website contains several pages such as 1. Home page, 2. Menu, 3. Online store locator, 4. Shopping online, 5. About Us, 6. Contact Us. Menu page contains description of all the items that are sold in the shop such as Coffees, Sandwiches, Bakery Items, Smoothies etc. Online store locator feature helps users to enter their address and search for the near by store locations. Online shopping helps users to purchase the  products online. About us page contains brief description of the shop. Contact Us page contains a form which helps users to send mails to the shop owners.",
		               "images": ["images/CoffeeShop/initial.png", "images/CoffeeShop/online.png", "images/CoffeeShop/storelocator.png", "images/CoffeeShop/contactus.png", "images/CoffeeShop/about.png"]
		
		
		   	   },
			   
			   {
			               "title": "Online Quiz", 
			               "dates": "March 2015 - June 2015",
			               "description": "This site gives rondom generated quiz with diffrent kinds of questions such as multiple choice, Q & A based. Depending on the answers, the score is updated automatically. Timer is provided for each question. Questions should be answered within the time limit. Users are provided with navigation ooptions to start, quit and move to next question in the quiz.",
			               "images": ["images/Quiz/initial.png","images/Quiz/multiple.png", "images/Quiz/text.png"]
		
		
			   	   },
			   {
	   	
			               "title": "Treasure Hunt", 
			               "dates": "March 2015 - June 2015",
			               "description": "It's a game designed for blind kids under 5 years of age. The game works as follows A small kid keeps moving along the path. The path contains different fruits on it's way. When the kid encounters a specific fruit on his way. The description of the fruit plays in the audio, which allows the kids to learn about the fruit while playing the game.",
			               "images": ["images/TreasureHunt/initial.png","images/TreasureHunt/verify.png", "images/TreasureHunt/db.png", "images/TreasureHunt/game.png", "images/TreasureHunt/path.png"]
		
		
			   	   }
	   	
				  
		
		
	   ],
	   
	   display : function(){
		   $('#projects').append(HTMLprojectStart);
		   for(i in projects.projects){
		   $('.project-entry').append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
		   $('.project-entry').append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
		   $('.project-entry').append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
		   for(im in projects.projects[i].images){
			   $('.project-entry').append(HTMLprojectImage.replace("%data%", projects.projects[i].images[im]));
		   }
	   }
		
	   }
           
	
   }
   
   projects.display(); 
 
$('#mapDiv').append(googleMap);
   