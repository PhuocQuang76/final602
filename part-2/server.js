const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');

//set up handlebars wiew engine
//const handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

//use the project module
const pm = require('./projectModule.js');

//writr the code for the following route
app.get('/project/:id', (req,res) => {
    let result;
    let id = (req.params.id);
    result = (pm.lookupByProjectId(id));
    res.format({
        'text/html': () => {
            res.type('text/html');
            // console.log(JSON.stringify(result, null, 4));
            res.render('projectView', {id:id,projectName:result.projectName,results:result.employees});
            // "+ JSON.stringify(result, null, 4));
            // res.send(id + result.projectName );
        },
        'default': () => {
            res.status(404);
            res.send("<b>404 - Not Found</b>");
        }
    });


    // res.send('projectView',id:id,projectName:result.projectName,name:result.fullName,employeeId:result.employeeId});

});

app.listen(3000,()=>{
    console.log('http://localhost:3000');
});