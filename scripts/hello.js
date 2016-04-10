module.exports = function(robot) {
    robot.respond(/is it a (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });

    robot.hear(/i did it/i, function(msg){
        msg.send("Congratulations! Good job!");
    });
    
    robot.respond(/are you there?/i, function(msg){
        msg.reply('Yes, still here, and listening.');
    })

}