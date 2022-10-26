const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

const courses = require('./Data/courses.json');

app.get('/', (req, res) => {
  res.send('Server of 007 is on the way....')
})

app.get('/courses',(req,res)=>{
  res.send(courses);
})
app.get('/courses/:id',(req,res)=>{
  const id = req.params.id;
    const selectedCourses = courses.find(n => n._id === id);
    res.send(selectedCourses);
})

app.listen(port, () => {
  console.log(`i am server of Your site ${port}`)
})