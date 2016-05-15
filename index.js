;
(function () {

var fs = require('fs');
    var express = require('express');
    var handlebars = require('express-handlebars');
    var bodyParser = require('body-parser');
    var app = express();
 
    app.use(express.static('public'));
    
    app.engine('handlebars', handlebars({defaultLayout: "main"}));
    app.set('view engine', 'handlebars');

//need a generic get messages render that i can use

    app.get("/", function (req, res){ 
      var files = ['html-css-q1.txt', 'html-css-q2.txt'];
        var contents = [];
        for (var i = 0; i < files.length; i ++){
            var questions = fs.readFileSync("categories/" + files[i]);
            contents.push(questions);
        }
        res.render('assess', {htmlcsscontents: contents});
        });

// functions-q1.readInfo(function(data){
//        data = fs.readfilesync('./categories/functions-q1.txt'(data));
//        assessQuestionsArr = data;
//    });


//      $("input:checkbox").on('click', function () {    // and attach a click event handler 
//            var $box = $(this);                             // in the handler, 'this' refers to the box clicked on
//            if ($box.is(":checked")) {                      // the name of the box is retrieved using the .attr() method
//                var group = "input:checkbox[name='" + $box.attr("name") + "']"; // as it is assumed and expected to be immutable
//                $(group).prop("checked", false);            // the checked state of the group/box on the other hand will change
//                $box.prop("checked", true);                 // and the current value is retrieved using .prop() method
//                append($(this).next().clone())
//            } else {
//                $box.prop("checked", false);
//            }
//        })
    
//    if in htmlcss div && 
//    
//    if checked{
//       document.getElementById('output')
//        return;
//    }
//    else {
//        alert(choose a question);
//    }
//    
//

    
 app.listen(3000, function () {                 //starts the server
 });

}());