module.exports = (app)=>{
    app.use('/api/v1/jobs', require('../controllers/Jobs'))
}