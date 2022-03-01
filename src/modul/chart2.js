function chart(data) {
    const idd = data.id;
    var cvv = document.getElementById(idd);
    var ctx = cvv.getContext("2d");
    var width = cvv.width;
    var height = cvv.height;
    var tabListDS = Object.keys(data.tab).length;
    var colorBox = data.options.colorBox;
    var fontColor = data.options.fontColor;
    var fontSize = data.options.fontSize;
    ctx.fillStyle = fontColor;
    ctx.font = fontSize + "px serif";

    var tabListDS = 6;
    var nNumber = 0;
    var lowNumber = 0;
    for (var bigNumber in data.data) {
        for (var index = 0; index < data.data[bigNumber].length; index++) {
            if (nNumber < data.data[bigNumber][index]) {
                nNumber = data.data[bigNumber][index];
            }
            if (lowNumber > data.data[bigNumber][index]) {
                lowNumber = data.data[bigNumber][index];
            }
        }
    }

    var lowNumberB = nNumber.toString().length - 1;
    nNumber = nNumber.toString();
    const orNum = (parseInt(nNumber.substring(0, lowNumberB)) + 1) * 10;

    var NumberPr = lowNumber.toString().length - 1;
    lowNumber = lowNumber.toString();
    const lowNumberF = (parseInt(lowNumber.substring(0, NumberPr)) - 1) * 10;

    var BLwork = orNum - lowNumberF
    BLwork = BLwork / 4
    var BLwork2 = lowNumberF

    for (var i = 0; i < tabListDS - 1; i++) {
        ciz(
            idd,
            fontSize * 3,
            height - (height / tabListDS) * i - height / tabListDS,
            width - fontSize * 3,
            height - (height / tabListDS) * i - height / tabListDS
        );

        if (lowNumberF < 0) {
            ctx.textAlign = "right";
            ctx.fillText(BLwork2, fontSize * 2,
                height - (height / tabListDS) * i - height / tabListDS + fontSize / 2 - 2
            );
            BLwork2 += BLwork
        } else {
            ctx.textAlign = "right";
            ctx.fillText(
                i * (orNum / 40) * 10,
                fontSize * 2,
                height - (height / tabListDS) * i - height / tabListDS + fontSize / 2 - 2
            );
        }
    }

    var datas = Object.keys(data.data).length;
    var tabs = data.tab.length;
    var td = tabs * datas;
    var columnN = tabs * datas + (tabs * 2) - 2;
    columnN = columnN * 3;
    var immd = 0;
    var iddd = fontSize * 3;
    var colorNumber = 0;

    for (var dataNumber in data.data) {
        var nextR = fontSize * 4;
        var columnH2 = (height / 3) * 2;

        if (lowNumberF < 0) {
            var columnH = ((columnH2 / (orNum)) * data.data[dataNumber][0]) - lowNumberF;

        } else {
            var columnH = ((columnH2 / orNum) * data.data[dataNumber][0]);

        }

        ctx.beginPath();
        ctx.moveTo(nextR, (height - columnH - height / 6));
        ctx.strokeStyle = colorBox[colorNumber];
        for (var tabLength = 1; tabLength < data.tab.length; tabLength++) {
            if (lowNumberF < 0) {
                columnH = (columnH2 / (orNum - lowNumberF)) * (data.data[dataNumber][tabLength] - lowNumberF);
                nextR += (width + fontSize * 2) / data.tab.length;
                ctx.lineTo(nextR, height - columnH - height / 6);
            } else {

                columnH = (columnH2 / orNum) * data.data[dataNumber][tabLength];
                nextR += (width + fontSize * 2) / data.tab.length;
                ctx.lineTo(nextR, height - columnH - height / 6);

            }
        }
        colorNumber += 1;
        ctx.stroke();
        iddd += ((width - fontSize * 6) / columnN) * 6;
    }

    tabs = data.tab.length;
    td = tabs * datas;
    columnN = tabs * datas + tabs * 2 - 2;
    columnN = columnN * 3;
    immd = 0;
    iddd = fontSize * 3;
    for (var tabLength = 0; tabLength < data.tab.length; tabLength++) {
        colorNumber = 0;
        for (var dataNumber in data.data) {
            columnH2 = (height / 3) * 2;
            columnH = (columnH2 / orNum) * data.data[dataNumber][tabLength];
            var genislik = (width - fontSize * 6) / columnN;

            if (colorNumber == Math.round(Object.keys(data.data).length / 2) - 1) {
                ctx.textAlign = "center";
                ctx.fillText(
                    data.tab[tabLength],
                    iddd + genislik,
                    height - height / 6 + 20
                );
            }
            colorNumber += 1;
            immd += 1;
            iddd += ((width - fontSize * 6) / columnN) * 3;
        }
        iddd += ((width - fontSize * 6) / columnN) * 6;
    }

    var total = 0;
    for (var evet in data.data) {
        total += (evet.length + 2) * fontSize * 0.8;
    }

    var evetd = (width - total) / 2 - fontSize;
    var renkboxx = 0;
    for (var evet in data.data) {
        ctx.fillStyle = colorBox[renkboxx];
        ctx.fillRect(
            evetd,
            height + fontSize / 2 - fontSize * 2,
            fontSize * 2,
            fontSize / 2
        );
        ctx.fillStyle = fontColor;
        ctx.textAlign = "left";
        ctx.fillText(evet, evetd + fontSize * 2 + 5, height - fontSize);
        evetd = evetd + evet.length * fontSize + fontSize + fontSize;
        renkboxx += 1;
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
