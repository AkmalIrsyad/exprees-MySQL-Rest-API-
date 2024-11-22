require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const MiddlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');

// app.method(path, handler);
// app.use("/", (req, res, next) => {
//     res.send("Hello World");
// })

// Middleware 
app.use(MiddlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'))

// Grouping Routes
app.use('/users', usersRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: "Upload Beerhasil"
    })
})


app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})




// app.get("/", (req, res) => {
//     res.json({
//         nama: "Akmal Irsyad",
//         email: "akmal@gmail.com"
//     });
// });


// app.post("/", (req, res) => {
//     res.send("<h1>Hello Post Method</h1>")
// });



app.listen(PORT, () => {
    console.log(`Server Running Success Port ${PORT}`)
});

