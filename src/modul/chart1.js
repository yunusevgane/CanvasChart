function chart(data) {
    const idd = data.id;
    var cvv = document.getElementById(idd);
    var ctx = cvv.getContext("2d");
    var width = cvv.width;
    var height = cvv.height;
    var tabListDS = Object.keys(data.tab).length;
    var tabListT = data.tab.length;
    var borderS = 1;
    var datasayi = Object.keys(data.data).length;
    var fontColor = data.options.fontColor;
    var fontSize = data.options.fontSize;
    ctx.fillStyle = fontColor;
    ctx.font = fontSize + "px serif";

    ciz(idd, 0, borderS, width, borderS);
    ciz(idd, 0, height - borderS, width, height - borderS);
    ciz(idd, width - 1, height, width - 1, 0);
    ciz(idd, 0, height, 1, 1);

    for (var i = 0; i < tabListDS; i++) {
        ciz(idd, 0, (height / tabListDS) * i, width, (height / tabListDS) * i);
    }

    for (var i = 0; i < (tabListT + 1) + 1; i++) {
        ciz(idd, (width / (tabListT + 1)) * i, height, (width / (tabListT + 1)) * i, 0);
    }
    var GTop = height / datasayi + fontSize * 2;
    var isa = 0;
    for (var i in data.data) {
        ctx.textAlign = "left";
        ctx.fillText(i, 2, (height / (datasayi + 1)) * isa + GTop - fontSize / 2);
        for (var ii = 0; ii < data.data[i].length; ii++) {
            if (/^-?[\d.]+(?:e-?\d+)?$/.test(data.data[i][ii]) == true) {
                ctx.textAlign = "right";
                ctx.fillText(
                    data.data[i][ii],
                    (width / (data.tab.length + 1)) * ii -
                    2 +
                    (width / (data.tab.length + 1)) * 2,
                    (height / (datasayi + 1)) * isa + GTop - fontSize / 2
                );
            } else {
                ctx.textAlign = "left";
                ctx.fillText(
                    data.data[i][ii],
                    (width / (data.tab.length + 1)) * ii + 2,
                    (height / (datasayi + 1)) * isa + GTop - fontSize / 2
                );
            }
        }
        isa += 1;
    }

    for (var ii = 0; ii < data.tab.length; ii++) {
        ctx.textAlign = "left";
        ctx.fillText(
            data.tab[ii],
            (width / (data.tab.length + 1)) * ii + width / (data.tab.length + 1) + 2,
            height / datasayi / 2 - fontSize / 2
        );
    }
}

function ciz(id, x1, x2, x3, x4) {
    var cvv = document.getElementById(id);
    var ctx = cvv.getContext("2d");
    ctx.strokeStyle = "#999";
    ctx.moveTo(x1, x2);
    ctx.lineTo(x3, x4);
    ctx.stroke();
}

export default chart;
