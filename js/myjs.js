window.onload = function () {
    var obj = document.getElementsByTagName("td");

    //以下为所有表格增加至HTML中
    for (i in obj) {
        var str = randomkecheng();
        var temp = str.split(",")
        obj[i].id = i;
        obj[i].innerHTML = "<dl><dt>" + temp[0] + "</dt><dd>" + temp[1] + "</dd></dl>";
    }
//
};
//以下函数随机课程
function randomkecheng() {
    var random = Math.random() * 7;
    var i = Math.floor(random);
    switch (i) {
        case 0:
            return "语文,老师A";
            break;
        case 1:
            return "数学,老师B";
            break;
        case 2:
            return "英语,老师C";
            break;
        case 3:
            return "政治,老师D";
            break;
        case 4:
            return "物理,老师E";
            break;
        case 5:
            return "化学,老师F";
            break;
        case 6:
            return "音乐,老师G";
            break;
        case 7:
            return "美术,老师H";
            break;
    }
};
