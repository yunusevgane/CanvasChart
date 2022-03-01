import chart1 from "/src/modul/chart1.js";
import chart2 from "/src/modul/chart2.js";
import chart3 from "/src/modul/chart3.js";


function CanvasChart(data) {
    var fontColor = "#000";
    var fontSize = 12;
    var colorBox = [
        "#5898D1",
        "#E97E32",
        "#A5A4A0",
        "#028A3F",
        "#5898D1",
        "#E97E32",
        "#A5A4A0",
        "#228A3F",
        "#5898D1",
        "#E97E32",
        "#A5A4A0",
        "#098A3F",
        "#5898D1",
        "#E97E32",
        "#A5A4A0",
        "#058A3F",
    ];


    if (data.options.colorBox) {
        colorBox = data.options.colorBox;
    }

    if (data.options.fontColor) {
        fontColor = data.options.fontColor;
    }

    if (data.options.fontSize) {
        fontSize = data.options.fontSize;
    }


    if (data.chartBody == 1) {
        chart1(
            {
                id: data.id,
                tab: data.tab,
                data: data.data,
                options: {
                    fontSize: fontSize,
                    fontColor: fontColor,
                    colorBox: colorBox
                }
            }

        );
    } else if (data.chartBody == 2) {
        chart2(
            {
                id: data.id,
                tab: data.tab,
                data: data.data,
                options: {
                    fontSize: fontSize,
                    fontColor: fontColor,
                    colorBox: colorBox
                }
            }

        );
    } else if (data.chartBody == 3) {
        chart3(
            {
                id: data.id,
                tab: data.tab,
                data: data.data,
                options: {
                    fontSize: fontSize,
                    fontColor: fontColor,
                    colorBox: colorBox
                }
            }

        );
    }


}





export default CanvasChart