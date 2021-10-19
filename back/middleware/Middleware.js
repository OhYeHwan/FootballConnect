const admin = require('../config/firebase_config')
class Middleware {
    async decodeToken(req, res, next) {
        const token = req.headers.authorization;

        try{
            const decodeValue = admin.auth().verifyIdToken(token);
            if(decodeValue){
                return next();
            }
            return res.json({message: "Unauthorized"});
        }
        catch(e){
            return res.json({message: "error"})
        }
    }
}

module.exports = new Middleware();