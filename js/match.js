$(document).ready(function () {

    //定义“狼人”和“平民”两个数组
    var allPlayers = [];
    var wolf = $("#wolf");
    var human = $("#human");
    var range = $("#range");

    //自定义“玩家人数选择条”的设置
    range.ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 6,
        max: 18,
        from: 8,
        to: 18,
        step: 1
    });

    //根据“玩家数”分配狼人和平民的数量
    roleAssignFn();
    range.change(function () {
        roleAssignFn();
    });

    
    //角色分配函数
    function roleAssignFn() {
        var total = range.val();

        switch (true) {
            case total < 6:
                alert("玩家数不能少于 6 人！");
                break;
            case total >= 6 && total < 9:
                wolf.text(1);
                break;
            case total >= 9 && total < 12:
                wolf.text(2);
                break;
            case total >=12 && total < 16:
                wolf.text(3);
                break;
            case total >=16 && total < 19:
                wolf.text(4);
                break;
            case total >=19:
                alert("玩家数不能超过18！");
        }

        human.text(total - wolf.text());

        //填充 allPlayers
        allPlayers.length = total;
        for(var i = 0; i < allPlayers.length; i++) {
            if(i < wolf.text()) {
                allPlayers[i] = "狼人";
            }else {
                allPlayers[i] = "平民";
            }
        }
        console.log(allPlayers);

        //随机分配角色
        var all = shuffle(allPlayers);
        console.log(all);

        //存储随机分配的玩家数组
        sessionStorage.all = JSON.stringify(all);
        console.log(all);
    }

    //随机打乱玩家数组，即随机分配角色；
    function shuffle(array) {
        for(var i = array.length - 1; i >=0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    //点击进入下一页
    $("#deal").click(function () {
        location.href = "../html/role-check.html";
    });
    $("#go-now").click(function () {
        location.href = "../html/role-check.html";
    });
});

