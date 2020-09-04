const mangoose = require('mongoose');
const config = require('config');
const  db = config.get('mangoURI');


const connectDB =async ()=>{
    
    try {
        await mangoose.connect(db,{
            useNewUrlParser:true ,
            useCreateIndex:true,
            useFindAndModify:false

        })
        console.log('Mangodb connected...')
    }
    catch (e) {
        console.log(e.message)
        process.exit(1);
        
    }
};

module.exports = connectDB;