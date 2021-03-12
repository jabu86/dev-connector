const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');


//@route    GET api/auth/
//@desc     Get user data
//@access   Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select('-password');
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});


//@route    POST api/auth
//@desc     Login auth user and get token
//@access   Public
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {  email, password } = req.body;
        try {
            //See if the user exist
            let user = await User.findOne({ email });
            if (!user) {
               return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
            }
            //Validate password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }
            const payload = {
                user: {
                    id: user.id,
                    name: user.name,
                    email:user.email
                }
            };

            //Return jsonwebtoken
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        payload
                    });
                }
            );
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error' + error);
        }
});



module.exports = router;