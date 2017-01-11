var username=$( "a:contains('Profile')" ).attr("href").replace("/users/","").replace("/","");
var forum=false;
if (window.location.pathname.includes("/discuss/topic/")){
    forum=true;
}

var profile=true;

function httpGetAsync(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(c.responseText)},c.open("GET",a,!0),c.send(null)}


if (forum || profile){
function loadJSON(a,b,c){var d=new XMLHttpRequest;d.onreadystatechange=function(){d.readyState===XMLHttpRequest.DONE&&(200===d.status?b&&b(JSON.parse(d.responseText)):c&&c(d))},d.open("GET",a,!0),d.send()}

function showUsers(users) {
    for (i in users){
	    $("a.username[href='/users/"+users[i].name+"/']").html(users[i].name+" (online)")
        if ($( ".header-text" ).find("h2").html()==users[i].name){
            $( ".header-text" ).find("h2").html(users[i].name+" (online)");
        }
        
    }
}

loadJSON('https://isonline.herokuapp.com/listAllOnline',
         function(data) { showUsers(data) },
         function(xhr) { alert(xhr); }
);
}

httpGetAsync("https://isonline.herokuapp.com/logConnected/"+username,function(){console.log("You are now marked as online")})

console.log("isOnline2.0 Has now been loaded and edited the webpage");
console.log("PS tell Herohamp that no one ever reads these things so they don't have to be formal... unless your activly bugfixing.");
