const router = require('express').Router();

router.post('/test', function(req, res) {
    res.json({requestBody: req.body});
});

// for testing this route on initial set up below

/*

you can test this in browser console

fetch('/api/test', {
    method: "POST",
    headers: {
        "Content-Type":"application/json",
        "XSRF-TOKEN": `tICzumsT-u87FRzUS5JiDtqIe5HEF8NDiA5o`
    },
    body: JSON.stringify({hello: 'world'})
}).then(res => res.json()).then(data => console.log(data));

*/

module.exports = router;
