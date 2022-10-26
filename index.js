const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

const courses = require('./Data/courses.json');

app.get('/', (req, res) => {
  res.send('Only for Tech Learners....')
})

app.get('/courses',(req,res)=>{
  res.send(courses);
})
app.get('/courses/:id',(req,res)=>{
  const id = req.params.id;
    const selectedCourses = courses.find(c => c.id === id);
    res.send(selectedCourses);
})

app.listen(port, () => {
  console.log(`i am server of Tech Learning site at port ${port}`)
})