const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../app/Models/User')
const config = require('../config/database')

module.exports = function (passport) {
  const opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
  opts.secretOrKey = config.secret
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.id }, (err, user) => {
      if (err) {
        return done(err, false)
      }
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  }))
}
