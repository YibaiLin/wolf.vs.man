/**
 * Created by Administrator on 2017/6/23 0023.
 */
/**
 * Created by Yibai Lin on 2017/5/16 0016.
 */

//定义“杀手”和“平民”两个数组；
var killer = [];
var person = [];
var textNum = document.getElementById("text");//取得输入；
var rangeNum =  document.getElementById("range");

console.log(textNum.value);
//默认值为6，未改动，直接发牌的情况
if(textNum.value == 6){
    myFunction();
}

//输入数字后，定义按enter键执行角色分配函数；
$(document).keydown(function (event){

    var e = event || window.event || arguments.callee.caller.arguments[0];

    if(e && e.keyCode==13){ // enter 键
        //要做的事情
        myFunction();
    }
});
$("#go").click(function () {
    myFunction();
});

$("#range").change(function() {
    //将range的值给text
    textNum.value= rangeNum.value;
    myFunction();
});

$("#text").blur(function () {
    //将text的值给range，且对输入的数字做判断
    if (textNum.value < 6) {
        alert('人数少于6人不能开始游戏哦');
        textNum.value = 6;
    } else if (textNum.value > 18) {
        alert('人数多于18位不能进行游戏哦');
        textNum.value = 18;
    }
    else {
        rangeNum.value = textNum.value;
    }
    myFunction();
});
$("#btn-minus").click(function () {
    //点击-号时range和text值一起减少
    textNum.value--;
    if (textNum.value < 6) {
        alert("人数少于6人不能开始游戏哦");
        textNum.value = 6;
    } else {
        rangeNum.value = textNum.value;
    }
    myFunction();
});
$("#btn-add").click(function btnAdd() {
    //点击+号时range和text值一起增加
    textNum.value++;
    if (textNum.value > 18) {
        alert("人数多于18位不能进行游戏哦");
        textNum.value = 18;
    } else {
        rangeNum.value = textNum.value;
    }
    myFunction();
});


//角色分配函数；
function myFunction() {

    killer.length = 0;
    person.length = 0;
    //限定输入数值对应的杀手数量；
    if( textNum.value < 6){
        textNum.value = 6;
        rangeNum.value = textNum.value;
        alert("人数少于6人不能开始游戏哦");
    }
    else if( textNum.value>=6 && textNum.value<=8){
        killer.length = 1;
        rangeNum.value = textNum.value;
    }
    else if(textNum.value>=9 && textNum.value<=11){
        killer.length = 2;
        rangeNum.value = textNum.value;
    }
    else if(textNum.value>=12 && textNum.value<=15){
        killer.length = 3;
        rangeNum.value = textNum.value;
    }
    else if(textNum.value>=16 && textNum.value<=18){
        killer.length = 4;
        rangeNum.value = textNum.value;
    }
    else if (textNum.value > 18) {
        alert("人数多于18位不能进行游戏哦");
        textNum.value = 18;
        rangeNum.value = textNum.value;
    }
    else if (typeof textNum.value != "number") {
        alert("请输入正确的玩家数");
    }

    //获取输入值后动态分配杀手和平民数量；
    $("#kiPlayers").text(killer.length);
    $("#ciPlayers").text(textNum.value - killer.length);

    //动态生成杀手和平民数组；
    for(var i = 0; i < killer.length; i++){
        killer[i] = "杀手";
    }
    console.log(killer);//打印杀手数组
    for(var j = 0; j < textNum.value - killer.length; j++){
        person[j] = "平民";
    }

    //将杀手和平民混合生成玩家数组，并打印；
    var allPlayers = killer.concat(person);
    console.log(allPlayers);

//随机打乱玩家数组，即随机分配角色；
    function shuffle(array){
        for (var i = array.length - 1;i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    var all = shuffle(allPlayers);
    sessionStorage.all = JSON.stringify(all);//存储随机分配后的玩家角色设置；
    console.log(all);//打印存储后的JSON格式的玩家数组；
}















