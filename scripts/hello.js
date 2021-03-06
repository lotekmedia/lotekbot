/*
# Description:
#   Allows hubot to run random bot commands
#
# Dependencies:
#   slack adapter
#
# Configuration:
#   Set up hubot token for slack
#
# Commands:
#   mybot Is it a weekend? - mybot: yes or no
#   mybot Are you here? - mybot: Yes, usually here, and listening.
#   mybot convert $23 to btc - mybot: That is about 0.0042 in BTC
# 
# Author:
#   lotekmedia
#   
#
*/
module.exports = function(robot) {
    robot.respond(/is it a (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });

    robot.hear(/i love slack bots/i, function(msg){
        msg.reply("I love me too!");
    });

    robot.hear(/i did it/i, function(msg){
        msg.send("Congratulations! Good job!");
    });
    
    robot.respond(/are you there?/i, function(msg){
        msg.reply('Yes, usually here, and listening.');
    });
    
    robot.respond(/convert \$(.*) to btc/i, function(res){
        var usd = res.match[1];
        res.reply('That is about ' + usd * 0.0024 + ' in BTC');
    });

}