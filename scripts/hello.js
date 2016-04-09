module.exports = function(robot) {
    robot.respond(/is it (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });
    robot.hear(/badger/i, function(msg){
        msg.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
    });
}