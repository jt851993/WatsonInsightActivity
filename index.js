require('dotenv').config({silent: true});

var readline = require('readline-sync');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personality_insights = new PersonalityInsightsV3({
  username: process.env.INSIGHT_USERNAME,
  password: process.env.INSIGHT_PASSWORD,
  version_date: '2017-10-13'
});

var data = readline.question("Enter your Paragraph:\n");

var params = {
  // Get the content from the JSON file.
  content: data,
  content_type: 'text/plain',
  consumption_preferences: true,
  raw_scores: true
};


personality_insights.profile(params, function(error, response) {
  if (error)
    console.log('Error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
  }
);
