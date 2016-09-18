var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var knex = require('./db/knex') //check directory routing
var bcrypt = require('bcrypt')

function getUser(){
  return knex('user_tbl')
  .where(username)
}

passport.use(new LocalStrategy(function(username, password, done){
  getUser({username})
  .then(function(data){
    console.log(data)
    done(null, true, data)
  })
}))

passport.serializeUser(function(user, done){
  done(null, user)
})

passport.deserializeUser(function(user, done){
  done(null, user)
})
