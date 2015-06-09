var navtext = '<form style="inline-block"><input type="button" onClick="history.go(0)" value="Reload!"><input type="button" onclick="loadFunction(this)" value="shawndrost" id="shawndrost"><input type="button" onClick="loadFunction(this)" value="mracus" id="mracus"><input type="button" onClick="loadFunction(this)" value="douglascalhoun" id="douglascalhoun"><input type="button" onClick="loadFunction(this)" value="sharksforcheap" id="sharksforcheap"></form><br>';


//Let's load it up!
$(document).ready(function(){
  loadFunction("index");
});

// When you start or use the navigation bar, this will trigger. If there is an valid element.id
// such as shawndorst, then the page will load with only that person's messages.
function loadFunction(elmnt) {
  // console.log(elmnt.id);
  var $body = $('body');
  $body.html('');
  $('<h2>Tweets!</h2>').appendTo($body);
  $('<p>This page will reload every 20 seconds ( or press the Reload button)</p>').appendTo($body);
  $(navtext).appendTo($body);
  if (elmnt == "index") { var index = streams.home.length - 1; }
  else if (elmnt.id){ var index = streams.users[elmnt.id].length - 1; }
  else if (elmnt){ var index = streams.users[elmnt].length - 1; }
  while(index >= 0){
    if (elmnt == "index") { var tweet = streams.home[index]; }
    else if (elmnt.id) { var tweet = streams.users[elmnt.id][index]; }
    else if (elmnt) { var tweet = streams.users[elmnt][index]; }
    var $tweet = $('<a onclick="loadFunction(/@([^)]+): /.exec(this.innerHTML)[1]);"></a><br>');
    $tweet.text('@' + tweet.user +': ' + tweet.message + " --> " + tweet.created_at);
    $tweet.appendTo($body);
    $tweet.wrap( "<div class='center'></div>");
    index -= 1;
  };
  $body.append('<img id="theImg" src="stylesheets/theImg.jpg" />')
};

//If you click on the just an individual's tweets, this will look at the innerHTML, and use a 
//regex to call the elmnt. Since this is just the elmnt.id and not an object there is a third
//branch included on the elmnt logic to account for this type of input.