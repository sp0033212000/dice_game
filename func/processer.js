var BIG = 'big';
var SMALL = 'small';
var ODD = 'odd';
var EVEN = 'even';
var TRI6 = 'triple_6';
var TRI5 = 'triple_5';
var TRI4 = 'triple_4';
var TRI3 = 'triple_3';
var TRI2 = 'triple_2';
var TRI1 = 'triple_1';
var DOU6 = 'double_6';
var DOU5 = 'double_5';
var DOU4 = 'double_4';
var DOU3 = 'double_3';
var DOU2 = 'double_2';
var DOU1 = 'double_1';
var TTL4 = 'point_4';
var TTL5 = 'point_5';
var TTL6 = 'point_6';
var TTL7 = 'point_7';
var TTL8 = 'point_8';
var TTL9 = 'point_9';
var TTL10 = 'point_10';
var TTL11 = 'point_11';
var TTL12 = 'point_12';
var TTL13 = 'point_13';
var TTL14 = 'point_14';
var TTL15 = 'point_15';
var TTL16 = 'point_16';
var TTL17 = 'point_17';
var totalMoney = 1000;

diceMaker = function() {
    var i = Math.floor((Math.random() * 6) + 1);
    return i;
};

bigOrSmall = function(dice1, dice2, dice3) {
    return (3 <= dice1 + dice2 + dice3) && (dice1 + dice2 + dice3 <= 10);
};

oddOrEven = function(dice1, dice2, dice3) {
    return (((dice1 + dice2 + dice3) % 2) === 0);
}

totalPoint = function(dice1, dice2, dice3, point) {
    return ((dice1 + dice2 + dice3) === point)
}

triplePoint = function(dice1, dice2, dice3, point) {
    return (dice1 == dice2 == dice3 === point)
}

doublePoint = function(dice1, dice2, dice3, point) {
    return ((dice1 == point) && (dice2 == point)) || ((dice2 == point) && (dice3 == point)) || ((dice1 == point) && (dice3 == point))
};

batStart = function(dice1, dice2, dice3) {
    var reward = 0;
    for(var key in statusMap) {
        var result = null;
        var type = statusMap[key].betType;
        var betMoney = statusMap[key].betMoney;
        var oddsRatio = statusMap[key].ratio;
        var point =statusMap[key].point;
        
        switch(type) {
            case BIG:
                comment = 'You bet Big!'
                result = !bigOrSmall(dice1, dice2, dice3);
                break;
            case SMALL:
                comment = 'You bet Small!'
                result = bigOrSmall(dice1, dice2, dice3);
                break;
            case ODD:
                comment = 'You bet Odd!'
                result = !oddOrEven(dice1, dice2, dice3);
                break;
            case EVEN:
                comment = 'You bet Even!'
                result = oddOrEven(dice1, dice2, dice3);
                break;
            case TRI6:
                comment = 'You bet Triple 6!'
                result = triplePoint(dice1, dice2, dice3, point);
                break;
            case TRI5:
                comment = 'You bet Triple 6!'
                result = triplePoint(dice1, dice2, dice3, point);
                break;
            case TRI4:
                comment = 'You bet Triple 6!'
                result = triplePoint(dice1, dice2, dice3, point);
                break;
            case TRI3:
                comment = 'You bet Triple 6!'
                result = triplePoint(dice1, dice2, dice3, point);
                break;
            case TRI2:
                comment = 'You bet Triple 6!'
                result = triplePoint(dice1, dice2, dice3, point);
                break;
            case TRI1:
                comment = 'You bet Triple 6!'
                result = triplePoint(dice1, dice2, dice3, point);
                break;
            case DOU6:
                comment = 'You bet Double 6!'
                result = doublePoint(dice1, dice2, dice3, point);
                break;
            case DOU5:
                comment = 'You bet Double 6!'
                result = doublePoint(dice1, dice2, dice3, point);
                break;
            case DOU4:
                comment = 'You bet Double 6!'
                result = doublePoint(dice1, dice2, dice3, point);
                break;
            case DOU3:
                comment = 'You bet Double 6!'
                result = doublePoint(dice1, dice2, dice3, point);
                break;
            case DOU2:
                comment = 'You bet Double 6!'
                result = doublePoint(dice1, dice2, dice3, point);
                break;
            case DOU1:
                comment = 'You bet Double 6!'
                result = doublePoint(dice1, dice2, dice3, point);
                break;
            case TTL4:
                comment = 'You bet Point 4!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL5:
                comment = 'You bet Point 5!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL6:
                comment = 'You bet Point 6!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL7:
                comment = 'You bet Point 7!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL8:
                comment = 'You bet Point 8!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL9:
                comment = 'You bet Point 9!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL10:
                comment = 'You bet Point 10!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL11:
                comment = 'You bet Point 11!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL12:
                comment = 'You bet Point 12!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL13:
                comment = 'You bet Point 13!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL14:
                comment = 'You bet Point 14!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL15:
                comment = 'You bet Point 15!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL16:
                comment = 'You bet Point 16!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            case TTL17:
                comment = 'You bet Point 17!'
                result = totalPoint(dice1, dice2, dice3, point);
                break;
            default:
                comment = 'You made the wrong Bet!'
                break;
        }
        if (result == true) {
            reward = betMoney * oddsRatio;
            statusMap[key].reward = reward;
            statusMap[key].comment = 'The result is ' + type.toUpperCase() + '! You WIN $' + reward + '!';
            statusMap[key].res = result;
        } else if (result == false) {
            reward = 0;
            statusMap[key].reward = reward;
            statusMap[key].comment = 'You lose $' + betMoney + ' from the Game:' + type.toUpperCase() + '!';
            statusMap[key].res = result;
        }
        $(".log_body").prepend("<p id='comment'>" + statusMap[key].comment + "</p>")
    }
    return statusMap
}

countMoney = function(statusMap) {
    var totalReward = 0;
    for(var key in statusMap) {
        reward = statusMap[key].reward
        totalReward += reward;
        if(statusMap[key].res == true) {
            var id = statusMap[key].betType;
            $('#' + id).addClass("betted");
        }
    }
    return totalReward;
}

dice_1 = function(a) {
    $(a).each(function(){
        var id = $(this).attr("id");
        $("#" + id + " p#dot_1").hide();
        $("#" + id + " p#dot_2").hide();
        $("#" + id + " p#dot_3").hide();
        $("#" + id + " p#dot_4").hide();
        $("#" + id + " p#dot_5").show().css("background-color", "red");
        $("#" + id + " p#dot_6").hide();
        $("#" + id + " p#dot_7").hide();
        $("#" + id + " p#dot_8").hide();
        $("#" + id + " p#dot_9").hide();
    })
}

dice_2 = function(a) {
    $(a).each(function(){
        var id = $(this).attr("id");
        $("#" + id + " p#dot_1").hide();
        $("#" + id + " p#dot_2").show().css("background-color", "black");
        $("#" + id + " p#dot_3").hide();
        $("#" + id + " p#dot_4").hide();
        $("#" + id + " p#dot_5").hide();
        $("#" + id + " p#dot_6").hide();
        $("#" + id + " p#dot_7").hide();
        $("#" + id + " p#dot_8").show().css("background-color", "black");
        $("#" + id + " p#dot_9").hide();
    })
}

dice_3 = function(a) {
    $(a).each(function(){
        var id = $(this).attr("id");
        $("#" + id + " p#dot_1").hide();
        $("#" + id + " p#dot_2").hide();
        $("#" + id + " p#dot_3").show().css("background-color", "black");
        $("#" + id + " p#dot_4").hide();
        $("#" + id + " p#dot_5").show().css("background-color", "black");
        $("#" + id + " p#dot_6").hide();
        $("#" + id + " p#dot_7").show().css("background-color", "black");
        $("#" + id + " p#dot_8").hide();
        $("#" + id + " p#dot_9").hide();
    })
}

dice_4 = function(a) {
    $(a).each(function(){
        var id = $(this).attr("id");
        $("#" + id + " p#dot_1").show().css("background-color", "red");
        $("#" + id + " p#dot_2").hide();
        $("#" + id + " p#dot_3").show().css("background-color", "red");
        $("#" + id + " p#dot_4").hide();
        $("#" + id + " p#dot_5").hide();
        $("#" + id + " p#dot_6").hide();
        $("#" + id + " p#dot_7").show().css("background-color", "red");
        $("#" + id + " p#dot_8").hide();
        $("#" + id + " p#dot_9").show().css("background-color", "red");
    })
}

dice_5 = function(a) {
    $(a).each(function(){
        var id = $(this).attr("id");
        $("#" + id + " p#dot_1").show().css("background-color", "black");
        $("#" + id + " p#dot_2").hide();
        $("#" + id + " p#dot_3").show().css("background-color", "black");
        $("#" + id + " p#dot_4").hide();
        $("#" + id + " p#dot_5").show().css("background-color", "black");
        $("#" + id + " p#dot_6").hide();
        $("#" + id + " p#dot_7").show().css("background-color", "black");
        $("#" + id + " p#dot_8").hide();
        $("#" + id + " p#dot_9").show().css("background-color", "black");
    })
}

dice_6 = function(a) {
    $(a).each(function(){
        var id = $(this).attr("id");
        $("#" + id + " p#dot_1").show().css("background-color", "black");
        $("#" + id + " p#dot_2").hide();
        $("#" + id + " p#dot_3").show().css("background-color", "black");
        $("#" + id + " p#dot_4").show().css("background-color", "black");
        $("#" + id + " p#dot_5").hide();
        $("#" + id + " p#dot_6").show().css("background-color", "black");
        $("#" + id + " p#dot_7").show().css("background-color", "black");
        $("#" + id + " p#dot_8").hide();
        $("#" + id + " p#dot_9").show().css("background-color", "black");
    })
}

dice_non = function(a) {
    $(a).each(function(){
        $("#" + id + " p#dot_1").hide().css("background-color", "");
        $("#" + id + " p#dot_2").hide().css("background-color", "");
        $("#" + id + " p#dot_3").hide().css("background-color", "");
        $("#" + id + " p#dot_4").hide().css("background-color", "");
        $("#" + id + " p#dot_5").hide().css("background-color", "");
        $("#" + id + " p#dot_6").hide().css("background-color", "");
        $("#" + id + " p#dot_7").hide().css("background-color", "");
        $("#" + id + " p#dot_8").hide().css("background-color", "");
        $("#" + id + " p#dot_9").hide().css("background-color", "");
    })
}

var diceMap = {};
diceMap[1] = dice_1;
diceMap[2] = dice_2;
diceMap[3] = dice_3;
diceMap[4] = dice_4;
diceMap[5] = dice_5;
diceMap[6] = dice_6;

rollDice = function(a) {
    diceMap[diceMaker()](a);
    setTimeout(function() {
        diceMap[diceMaker()](a)
    }, 150);
    setTimeout(function() {
        diceMap[diceMaker()](a)
    }, 300);
    setTimeout(function() {
        diceMap[diceMaker()](a)
    }, 450);
    setTimeout(function() {
        diceMap[diceMaker()](a)
    }, 600);
    setTimeout(function() {
        diceMap[diceMaker()](a)
    }, 750);
}