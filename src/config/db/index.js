const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/my_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.error('Connect Successfully!');
    } catch (err) {
        console.error('Connect Fail!');
    }
}

module.exports = { connect };
