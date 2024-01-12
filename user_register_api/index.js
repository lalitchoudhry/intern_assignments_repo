
const mongoose = require('mongoose');

const app = require('./app');
const port = process.env.PORT || 80;

//WRONG ROUTE ERROR HANDLER
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err)
})

//ERROR HANDLER
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

// connect to database
mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        // listen
        app.listen(port, () => {
            console.log(`server is running on port ${port}`);
        });
    })
    .catch((err) => console.log(err.message));
