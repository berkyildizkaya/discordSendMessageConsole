let message = ['']
let token = "Console Token";

let channel_id = "";
// If you want channel message send change api/v8/
let channel_url = `https://discord.com/api/v9/channels/${channel_id}/messages`
let messageCount = message.length;
let i =0;

const myInterval = setInterval(function(){
    if(i=== messageCount){
        clearInterval(myInterval);
    }
        request = new XMLHttpRequest();
        request.withCredentials = true;
        request.open("POST", channel_url);
        request.setRequestHeader("authorization", token);
        request.setRequestHeader("accept", "/");
        request.setRequestHeader("authority", "discord.com");
        request.setRequestHeader("content-type", "application/json");
        request.send(JSON.stringify({ content: message[i] }));
    i++
},1000)  
