const Responses = require("./API_Responses");

var theme = require("jsonresume-theme-eloquent-mod");

exports.handler = async (event) => {
  console.log("event", event);
  if(!event.body){
    return Responses._400({message: 'missing body'})
  }

  const body = JSON.parse(event.body);

  return Responses._200(theme.render(body));

};


