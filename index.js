require("dotenv").config();
const createCredsJsonFile = require("./router/googleCloud/createCreds");
const server = require("./api/server.js")

const port = process.env.PORT || 4000;
//creates a json file with the credentials it gets from .env
//ex: GOOGLE_CREDS={"type": "service_account","project_id": "example","private_key_id": "example","private_key": "example","client_email": "example","client_id": "example","auth_uri": "example","token_uri": "example","auth_provider_x509_cert_url": "example","client_x509_cert_url": "example"}
//this json filed can be downloaded from your google development dashboard for the project
//remember that for users to view photo they have to be logged into a google account
createCredsJsonFile();

server.listen(port, () => {
  console.log(`\n Server Live On ${port}\n`);
});
