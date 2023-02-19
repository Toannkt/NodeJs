const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true

        });
        console.log('=> MongoDB is Connected')
        
    } catch (error) {console.log('error')}

}

module.exports = {connect}