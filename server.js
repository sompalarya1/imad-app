var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles= {
    article1:{
    title:'Article one',
   
    date:'5 sep 2017',
    data: `<p> This is article one on imad course</p>
         <p> This is article one on imad course</p>
         <p> This is article one on imad course</p>`
},
    article2:{title:'Article one',
   
    date:'10 sep 2017',
    data: `<p> This is article one on imad course</p>
         <p> This is article one on imad course</p>
         <p> This is article one on imad course</p>`
    }
};
         
         
function createtemplate(data){
    
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var htmlTemplate=`<html>
         <head> 
         <title> $title</title> 
         <link href="ui/style.css" rel="stylesheet">
         
         
         </head>
          <body>
         <div><a href="">Home</a></div>
         <h3> Articlr one</h3>
         <div>  $date </div>
         <div class="c">
             $data
             
         </div>
         
         
         
         
         
         
         
        </body>
        
    </html>`;
    return htmlTemplate;
}





















app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function( req,res){
    var articleName = req.params.articleName;
    res.send(createtemplate(articles[articleName]));
})
app.get('/article2',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article2.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
