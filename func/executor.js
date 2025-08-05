var statusMap = {};
var logData = [];
var _betMoney = 0;
var betStatus = null;

$(document).ready(function() {
    $('.log_title p').html('Money:' + totalMoney);
    $("input#_times").on('click', function() {
        _betMoney = $(this).data("val");
        // console.log(_betMoney)
    })
    $('.bettype').on('click', function() {
        if(betStatus == true) {
            $('span').html('');
            betStatus = false;
        }
        $("div").removeClass("betted");
        if(_betMoney == 0) {
            $(".log_body").prepend("<p id='comment'>Please select the bet amount!</p>")
        } else if(totalMoney < _betMoney) {
            $(".log_body").prepend("<p id='comment'>Not enough Money!</p>")
        } else {
            var type = $(this).attr('id');
            if(statusMap[type] == undefined) {
                statusMap[type] = {
                    "betType": type,
                    "ratio": parseInt($(this).data('ratio'), 10),
                    "point": parseInt($(this).data('point'), 10),
                    "betMoney": parseInt(_betMoney, 10),
                }
                // console.log($(this).data('ratio'));
            } else {
                statusMap[type].betMoney += parseInt(_betMoney, 10);
            }
            var cla = $(this).attr('id');
            $('span.' + cla).html('$' + statusMap[type].betMoney);
            totalMoney -= parseInt(_betMoney, 10)
            $('.log_title p').html('Money:' + totalMoney);
            // console.log(type)
        }
        // console.log(statusMap)
    })
    $('.start').on('click', function() {
        if ($.isEmptyObject(statusMap)) {
            $(".log_body").prepend("<p id='comment'>Please Make A Bet!</p>")
            while ($(".log_body p").length > 50) {
                $(".log_body p:last-child").remove();
            }
        } else {
            rollDice('#dice_11')
            rollDice('#dice_12')
            rollDice('#dice_13')
            var rolling_1 = setInterval(function() {
                rollDice('#dice_11')
            }, 900);
            var rolling_2 = setInterval(function() {
                rollDice('#dice_12')
            }, 900);
            var rolling_3 = setInterval(function() {
                rollDice('#dice_13')
            }, 900);
            setTimeout(function() {
                clearInterval(rolling_1);
                clearInterval(rolling_2);
                clearInterval(rolling_3);
                setTimeout(function() {
                    dice1 = diceMaker();
                    dice2 = diceMaker();
                    dice3 = diceMaker();
                    // dice1 = 2;
                    // dice2 = 2;
                    // dice3 = 2;
                    diceMap[dice1]('#dice_11')
                    diceMap[dice2]('#dice_12')
                    diceMap[dice3]('#dice_13')
                    console.log(dice1, dice2, dice3);
                    statueMap = batStart(dice1, dice2, dice3, statusMap);
                    totalReward = countMoney(statusMap);
                    totalMoney += totalReward;
                    for(key in statusMap) {
                        logData.push(statusMap[key].comment)
                        if(logData > 25) {
                            logData = logData.slice(1);
                        }
                    }
                    while ($(".log_body p").length > 50) {
                        $(".log_body p:last-child").remove();
                    }
                    $('.log_title p').html('Money:' + totalMoney);
                    statusMap = {};
                    betStatus = true;
                }, 900);
            },2700)
        }
    })
    $('.reset').on('click', function() {
        $('span').html('')
        statusMap = {}
    })
})