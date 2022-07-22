const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/campaign-set-up/job-library-profession-2', function (req, res) {
  var jobTitle = req.session.data['which-job-title']
    res.render('campaign-set-up/job-library-profession-2', {
      jobTitle: jobTitle
    })
  })
  router.post('/campaign-set-up/job-library-profession-2', function (req, res) {
      var jobTitle = req.session.data['which-job-title']
      console.log(jobTitle)
      res.redirect('job-library-profession-3')
    })

  router.get('/job-library-profession-3', function (req, res) {
    var level = req.session.data['level']
      res.render('job-library-profession-3', {
        level: level
      })
    })
    router.post('/campaign-set-up/job-library-profession-3', function (req, res) {
        var level = req.session.data['level']
        console.log(level)
        res.redirect('reserves-found')
      })

  router.get('/reserves-found', function (req, res) {
    var level = level
    var jobTitle = jobTitle
      res.render('reserves-found', {
        level: level,
        jobTitle: jobTitle
      })
    })
    router.post('/campaign-set-up/reserves-found', function (req, res) {
      var reserve = req.session.data['reserve']

      switch (reserve) {
        case 'yes':
        res.redirect('reserve-candidates')
        break
      case 'no':
        res.redirect('task-list')
        break
      }
      })
module.exports = router
