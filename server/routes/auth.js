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
router.get('/google', passport.authenticate('google', { 
  scope: ['profile', 'email'],
  accessType: 'offline',
  prompt: 'select_account'
}));

router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/auth/login/failed',
    session: false
  }),
  (req, res) => {
    try {
      // Successful authentication
      const token = req.user.token;
      const user = {
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
      };
      
      // Send a message to the opener window and close the popup
      res.send(`
        <script>
          window.opener.postMessage({
            token: '${token}',
            user: ${JSON.stringify(user)}
          }, '${process.env.FRONTEND_URL}');
          window.close();
        </script>
      `);
    } catch (error) {
      console.error('Error in Google callback:', error);
      res.redirect('/auth/login/failed');
    }
  }
);



router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})


export default router;