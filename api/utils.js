function requireUser(req, res, next) {
    if(!req.user) {
      res.status(401);
      next ({
        name: "NoUserError",
        message: "You must be logged in to perform this action"
      });
    }
}

module.exports = {
  requireUser
}