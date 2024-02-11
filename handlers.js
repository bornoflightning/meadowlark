


exports.newsletter = (req, res) => {
    //CSRF
    //provide dummy value
    res.render('newsletter', {csrf: 'CSRF token goes here'});
}
exports.api = {
    newsletterSignup: (req, res) => {
        console.log('CSRF token (from hidden form field): '+ req.body._csrf);
        console.log('Name (from visible form field): ' + req.body.name);
        console.log('Email (from visible form field): ' + req.body.email);
        res.send({result: 'success'})
    },
}

exports.newsletterSignup = (req, res) => {
    //dummy value
    res.render('newsletter-signup', {csrf: 'CSRF token goes here'});
    //I assume it will be req.body.csrf
}
exports.newsletterSignupProcess = (req, res) => {
    console.log('Form (from querystring): ' + req.query.form);
    console.log('CSRG token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    res.redirect(303, '/newsletter-signup/thank-you');
}
exports.newsletterSignupThankYou = (req, res) => {
    res.render('newsletter-signup-thank-you');
};

// module.exports = router;