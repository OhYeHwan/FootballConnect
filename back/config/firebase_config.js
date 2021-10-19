const admin = require("firebase-admin");

const serviceAccount = require("./fb_service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;