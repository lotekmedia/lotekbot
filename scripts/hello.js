module.exports = function(robot) {
    robot.respond(/is it a (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });

    robot.hear(/i did it/i, function(msg){
        msg.send("Congratulations! Good job!");
    });
    
    robot.respond(/are you there?/i, function(msg){
        msg.reply('Yes, usually here, and listening.');
    });
    
    robot.respond(/open the (.*) doors/i, function(res){
        doorType = res.match[1];
        if (doorType == "pod bay"){
            res.reply("I'm afraid I can't let you do that.");
        }else{
            res.reply("Opening " + doorType +" doors");
        }
    });
    
    robot.respond(/convert (.*) to btc/i, function(res){
        var usd = res.match[1];
        res.respond('You want ' + usd + ' in btc?');
    });

}