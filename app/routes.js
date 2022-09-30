const express = require('express')
const router = express.Router()

// Job library entry

router.get('/job-title-known', function (req, res) {
  var role = req.session.data['role']
    res.render('skills-or-title', {
      role: role
    })
  })
  router.post('/campaign-set-up/job-title-known', function (req, res) {
    var role = req.session.data['role']

    switch (role) {
      case 'yes':
      res.redirect('job-library')
      break
      case 'no':
      res.redirect('skills-or-title')
      break
    }
    })

    router.get('/skills-or-title', function (req, res) {
  var level = level
  var jobTitle = jobTitle
    res.render('skills-or-title', {
      role: role
    })
  })
  router.post('/campaign-set-up/skills-or-title', function (req, res) {
    var role = req.session.data['role']

    switch (role) {
      case 'title':
      res.redirect('job-library')
      break
      case 'profession':
      res.redirect('job-library-profession')
      break
    case 'skill':
      res.redirect('skills')
      break
    }
    })

router.get('/campaign-set-up/job-library-profession-2', function (req, res) {
  var jobTitle = req.session.data['jobTitle']
    res.render('campaign-set-up/job-library-profession-2', {
      jobTitle: jobTitle
    })
  })
  router.post('/campaign-set-up/job-library-profession-2', function (req, res) {
      var jobTitle = req.session.data['which-job-title']
      console.log(jobTitle)
      //req.session.scenario = require('../assets/scenarios/' + jobTitle)
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

      router.get('/templates', function (req, res) {
        var template = req.session.data['template']
          res.render('templates', {
            level: level,
            jobTitle: jobTitle
          })
        })
        router.post('/campaign-set-up/templates', function (req, res) {
          var template = req.session.data['template']

          switch (template) {
          case 'cswide':
            res.redirect('task-list')
            break
          case 'dept':
            res.redirect('dept-template')
            break
          case 'copy':
            res.redirect('copy-template')
            break
          case 'no':
            res.redirect('task-list-blank')
            break
          }
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

      router.get('/reserves-found-1', function (req, res) {
        var level = level
        var jobTitle = jobTitle
          res.render('reserves-found-1', {
            level: level,
            jobTitle: jobTitle
          })
        })
        router.post('/campaign-set-up/reserves-found-1', function (req, res) {
          var reserve = req.session.data['reserve']

          switch (reserve) {
            case 'yes':
            res.redirect('reserve-candidates')
            break
          case 'no':
            res.redirect('vacancy-management')
            break
          }
          })

      // Task list

      router.get('/campaign-set-up/task-list', function (req, res) {
        var basic = req.session.data['posts']
          res.render('campaign-set-up/task-list-complete', {
            basic: basic
          })
        })

        // Assessment methods

      router.get('/success-profiles', function (req, res) {
        var criteria = criteria
          res.render('success-profiles', {
            criteria: criteria
          })
        })
        router.post('/campaign-set-up/success-profiles', function (req, res) {
          var criteria = req.session.data['criteria']

          switch (criteria) {
            case 'yes':
            res.redirect('success-profiles-criteria')
            break
          case 'no':
            res.redirect('online-tests')
            break
          }
          })

// assessment methods V3
router.get('/campaign-set-up/assessment-method-1/job-criteria', function (req, res) {
    res.render('campaign-set-up/assessment-method-1/job-criteria', {
    })
  })
  router.post('/campaign-set-up/assessment-method-1/job-criteria', function (req, res) {
    var behaviours = {}
      res.redirect('assess')
})

router.get('/campaign-set-up/assessment-method-1/assess', function (req, res) {
    res.render('campaign-set-up/assessment-method-1/assess', {
    })
  })
  router.post('/campaign-set-up/assessment-method-1/assess', function (req, res) {
      res.redirect('cv')
})
router.get('/campaign-set-up/assessment-method-1/statement', function (req, res) {
  var behaviours = {}
    res.render('campaign-set-up/assessment-method-1/statement', {
      behaviours: behaviours
    })
  })
  router.post('/campaign-set-up/assessment-method-1/statement', function (req, res) {
      res.redirect('cv')
})

// sift

router.get('/sift/1001334', function (req, res) {
  var basic = req.session.data['posts']
    res.render('sift/task-list', {
      basic: basic
    })
  })

module.exports = router
