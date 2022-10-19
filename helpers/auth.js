const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()){
    return next()
  }

  req.flash('error', 'not authorizeds')
  res.redirect('/users/signin')
}

export default helpers

