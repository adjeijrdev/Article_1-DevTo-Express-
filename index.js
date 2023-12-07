//importing express package
import express from 'express'

//Instantiating the express package
const app = express()

/**
 * CREATING FUNCTIONS TO BE ACCESSED ON THE URL
*/

//1st URL to home --> API to our Home functions
app.get('/', (req, res)=>{
    res.send('This is your Home page')
})

//2nd URL to About --> API to our About functions
app.get('/About', (req, res)=>{
    res.send('This is your About page')
})

//3rd URL to home --> API to our Contact functions
app.get('/Contact', (req, res)=>{
    res.send('This is your Contact Page')
})

//Creating a port number
const port = 3001           //this is a random number 

app.listen(port, ()=>{
    console.log(`My Api is running on Port ${port}`)
})