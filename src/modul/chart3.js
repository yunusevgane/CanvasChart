function chart(data) {
    const idd = data.id
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
    for (var bigNumber in data.data) {
        for (var index = 0; index < data.data[bigNumber].length; index++) {
            if (nNumber < data.data[bigNumber][index]) {
                nNumber = data.data[bigNumber][index];
            }
        }
    }
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

    var lownumberb = nNumber.toString().length - 1;
    nNumber = nNumber.toString();
    var orNum = (parseInt(nNumber.substring(0, lownumberb)) + 1) * 10;

    var numberpr = lowNumber.toString().length - 1;
    lowNumber = lowNumber.toString();
    var lowNumberF = (parseInt(lowNumber.substring(0, numberpr)) - 1) * 10;

    if (lowNumberF < 0) {
    } else {
        lowNumberF = 0
    }
    var blwork = orNum - lowNumberF
    blwork = blwork / 4
    var blwork2 = lowNumberF
    orNum = orNum - lowNumberF
    for (var i = 0; i < tabListDS - 1; i++) {
        ciz(
            idd,
            fontSize * 3,
            height - (height / tabListDS) * i - height / tabListDS,
            width - fontSize * 3,
            height - (height / tabListDS) * i - height / tabListDS
        );

        ctx.textAlign = "right";
        ctx.fillText(blwork2, fontSize * 2,
            height - (height / tabListDS) * i - height / tabListDS + fontSize / 2 - 2
        );
        blwork2 += blwork

    }

    var datas = Object.keys(data.data).length;
    var tabs = data.tab.length;
    var columnN = tabs * datas + tabs * 2 - 2;
    columnN = columnN * 3;
    var immd = 0;
    var iddd = fontSize * 3;
    for (var tabLength = 0; tabLength < data.tab.length; tabLength++) {
        var colorNumber = 0;
        for (var dataNumber in data.data) {
            var columnH2 = (height / 3) * 2;
            var columnH = (columnH2 / orNum) * (data.data[dataNumber][tabLength] - lowNumberF);
            var genislik = (width - fontSize * 6) / columnN;

            if (
                colorNumber ==
                Math.round(Object.keys(data.data).length / 2) - 1
            ) {
                ctx.textAlign = "center";
                ctx.fillStyle = fontColor;
                ctx.fillText(
                    data.tab[tabLength],
                    iddd + genislik,
                    height - height / 6 + 20
                );
            }
            ctx.fillStyle = colorBox[colorNumber];
            colorNumber += 1;
            immd += 1;
            var y = height - height / 6 - columnH;
            ctx.fillRect(iddd, y, genislik * 2, columnH);
            iddd += ((width - fontSize * 6) / columnN) * 3;
        }
        iddd += ((width - fontSize * 6) / columnN) * 6;
    }

    var total = 0;
    for (var evet in data.data) {
        total += (evet.length + 2) * fontSize * 0.8;
    }

    var evetd = (width - total) / 2;

    var renkboxx = 0;
    for (var evet in data.data) {
        ctx.fillStyle = colorBox[renkboxx];
        ctx.fillRect(evetd, height - fontSize * 2, fontSize, fontSize);
        ctx.fillStyle = fontColor;
        ctx.textAlign = "left";
        ctx.fillText(evet, evetd + fontSize + 5, height - fontSize);
        evetd = evetd + (evet.length * fontSize) / 1.5 + fontSize + fontSize;
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

export default chart