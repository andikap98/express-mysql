const express = require('express')
const dotenv = require('dotenv')
const {PrismaClient} = require('@prisma/client')

const userRoutes = require('./routes/usersRoutes')
const middlewareLogRequest = require('./middleware/logs')

dotenv.config();
const prisma = new PrismaClient()
const app = express()

const port = process.env.PORT



app.use((req,res,next)=>{
    console.log('log terjadi request ke API ini ', req.path);
    next();
})

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/users', userRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))