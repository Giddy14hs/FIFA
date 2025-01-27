import passport from "passport"
import {Router} from "express"

const router = Router()

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Logged In",
      user: req.user, // Make sure this contains the user data (e.g., username, email)
      token: req.user.token, // Add token if you're using JWT or session management
    });
  } else {
    res.status(403).json({ error: true, message: "Not authorized" });
  }
});


router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

// Routes for Google authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'],
  accessType: 'offline',  // Optional for offline access
 }));

router.get('/google/callback',
  passport.authenticate('google', { 
    failureRedirect: '/login/failed' }),
    (req, res) => {
      const token = req.user.token; // Token generated during login
      const user = req.user; // User data
      res.redirect(`http://localhost:3000?token=${token}&user=${JSON.stringify(user)}`);
      
    } 
);



router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})


export default router;