let express = require('express');
let router = express.Router();
let RestClient = require('../services/RestClient');

router.use((req, res, next)=>{
    next();
});

router.get('/', (req,res)=>{
    let client = new RestClient("https://api.greenhouse.io/v1/boards/airbnb/embed/jobs?content=true", null, null);

    let call = client.getData();
   call.then(response =>{
       res.json({ status : 200, data : response.data});
   });



})
.get('/{job_id}', (req, res)=>{

});

module.exports = router;