const dotenv = require('dotenv');
dotenv.config();


const config = function () { 

    this.project_name = process.env.PROJECT_NAME
    this.pre = process.env.PRE;
    this.port = process.env.PORT;

    switch (process.env.NODE_ENV) {
        case 'local':
            this.dbConnectionUrl = process.env.MONGO_LOCAL;
            break;
        case 'staging':
            this.dbConnectionUrl = process.env.MONGO_STAG;
            break;
        case 'production':
            this.dbConnectionUrl = process.env.MONGO_PROD;
            break;
        case 'development':
            this.dbConnectionUrl = process.env.MONGO_DEV;
            break;
        default:
            this.dbConnectionUrl = process.env.MONGO_LOCAL;
    }
}

module.exports = new config();