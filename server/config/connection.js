const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/avila-hotel',  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,

})
.then(() => console.log("DB Connected"))
.catch((err) => console.log("DB Connection Error: ", err));


module.exports = mongoose.connection;