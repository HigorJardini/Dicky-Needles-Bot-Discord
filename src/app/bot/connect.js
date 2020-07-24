import 'dotenv/config';

const token = process.env.BOT_TOKEN;

class Connect{
    constructor(){
        this.token = token;
    }
}

module.exports = new Connect().token;