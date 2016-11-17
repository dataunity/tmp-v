var Ashfall = {};

Ashfall.maps = (function (L, d3) {
    var addTileLayer = function (map) {
            var mapboxAccessToken = "pk.eyJ1Ijoia2V2ayIsImEiOiJjaXZjOXh6aGMwMDM0MnltcXRyc2FvdDFpIn0.i0ZaZBy5NkiSe6_UOEFupg";

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(map);
        },
        processCsvRow = function (d) {
            // Process raw D3 csv row into correct datatypes
            return {
                threshold: +d.threshold,
                aep: +d.aep,
                longitude: +d.longitude,
                latitude: +d.latitude,
                hit: +d.hit
            };
        },
        createCircles = function (data, colourScale, normScale) {
            var circles = [],
                colour, i, row, circle;
            
            for (i = 0; i < data.length; i++) {
                row = data[i];
                colour = colourScale(normScale(row.aep));
                circle = L.circle([row.latitude, row.longitude], 500, {
                    color: colour,
                    fillColor: colour,
                    fillOpacity: 1.0
                });
                circle.bindPopup('AEP: ' + row.aep + '<br>Latitude: ' + row.latitude + '<br>Longitude:' + row.longitude);
                circles.push(circle);
            }
            return circles;
        },
        createNormalisedColourScale = function (aep, colourScheme) {
            // Creates a normalised colour scale (domain 0 to 1)
            // var min = d3.min(aep),
            //     max = d3.max(aep),
                // These colours represent the 'jet' colour scheme in matplotlib
                // however there's problems with this colour scale, e.g see:
                // https://jakevdp.github.io/blog/2014/10/16/how-bad-is-your-colormap/
            var colours = [];
            switch (colourScheme) {
                case "jet":
                    colours = ['#000080', '#000084', '#000089', '#00008d', '#000092', '#000096', '#00009b', 
                        '#00009f', '#0000a4', '#0000a8', '#0000ad', '#0000b2', '#0000b6', '#0000bb', '#0000bf', 
                        '#0000c4', '#0000c8', '#0000cd', '#0000d1', '#0000d6', '#0000da', '#0000df', '#0000e3', 
                        '#0000e8', '#0000ed', '#0000f1', '#0000f6', '#0000fa', '#0000ff', '#0000ff', '#0000ff', 
                        '#0000ff', '#0000ff', '#0004ff', '#0008ff', '#000cff', '#0010ff', '#0014ff', '#0018ff', 
                        '#001cff', '#0020ff', '#0024ff', '#0028ff', '#002cff', '#0030ff', '#0034ff', '#0038ff', 
                        '#003cff', '#0040ff', '#0044ff', '#0048ff', '#004cff', '#0050ff', '#0054ff', '#0058ff', 
                        '#005cff', '#0060ff', '#0064ff', '#0068ff', '#006cff', '#0070ff', '#0074ff', '#0078ff', 
                        '#007cff', '#0080ff', '#0084ff', '#0088ff', '#008cff', '#0090ff', '#0094ff', '#0098ff', 
                        '#009cff', '#00a0ff', '#00a4ff', '#00a8ff', '#00acff', '#00b0ff', '#00b4ff', '#00b8ff', 
                        '#00bcff', '#00c0ff', '#00c4ff', '#00c8ff', '#00ccff', '#00d0ff', '#00d4ff', '#00d8ff', 
                        '#00dcfe', '#00e0fb', '#00e4f8', '#02e8f4', '#06ecf1', '#09f0ee', '#0cf4eb', '#0ff8e7', 
                        '#13fce4', '#16ffe1', '#19ffde', '#1cffdb', '#1fffd7', '#23ffd4', '#26ffd1', '#29ffce', 
                        '#2cffca', '#30ffc7', '#33ffc4', '#36ffc1', '#39ffbe', '#3cffba', '#40ffb7', '#43ffb4', 
                        '#46ffb1', '#49ffad', '#4dffaa', '#50ffa7', '#53ffa4', '#56ffa0', '#5aff9d', '#5dff9a', 
                        '#60ff97', '#63ff94', '#66ff90', '#6aff8d', '#6dff8a', '#70ff87', '#73ff83', '#77ff80', 
                        '#7aff7d', '#7dff7a', '#80ff77', '#83ff73', '#87ff70', '#8aff6d', '#8dff6a', '#90ff66', 
                        '#94ff63', '#97ff60', '#9aff5d', '#9dff5a', '#a0ff56', '#a4ff53', '#a7ff50', '#aaff4d', 
                        '#adff49', '#b1ff46', '#b4ff43', '#b7ff40', '#baff3c', '#beff39', '#c1ff36', '#c4ff33', 
                        '#c7ff30', '#caff2c', '#ceff29', '#d1ff26', '#d4ff23', '#d7ff1f', '#dbff1c', '#deff19', 
                        '#e1ff16', '#e4ff13', '#e7ff0f', '#ebff0c', '#eeff09', '#f1fc06', '#f4f802', '#f8f500', 
                        '#fbf100', '#feed00', '#ffea00', '#ffe600', '#ffe200', '#ffde00', '#ffdb00', '#ffd700', 
                        '#ffd300', '#ffd000', '#ffcc00', '#ffc800', '#ffc400', '#ffc100', '#ffbd00', '#ffb900', 
                        '#ffb600', '#ffb200', '#ffae00', '#ffab00', '#ffa700', '#ffa300', '#ff9f00', '#ff9c00', 
                        '#ff9800', '#ff9400', '#ff9100', '#ff8d00', '#ff8900', '#ff8600', '#ff8200', '#ff7e00', 
                        '#ff7a00', '#ff7700', '#ff7300', '#ff6f00', '#ff6c00', '#ff6800', '#ff6400', '#ff6000', 
                        '#ff5d00', '#ff5900', '#ff5500', '#ff5200', '#ff4e00', '#ff4a00', '#ff4700', '#ff4300', 
                        '#ff3f00', '#ff3b00', '#ff3800', '#ff3400', '#ff3000', '#ff2d00', '#ff2900', '#ff2500', 
                        '#ff2200', '#ff1e00', '#ff1a00', '#ff1600', '#ff1300', '#fa0f00', '#f60b00', '#f10800', 
                        '#ed0400', '#e80000', '#e40000', '#df0000', '#da0000', '#d60000', '#d10000', '#cd0000', 
                        '#c80000', '#c40000', '#bf0000', '#bb0000', '#b60000', '#b20000', '#ad0000', '#a80000', '#a40000', 
                        '#9f0000', '#9b0000', '#960000', '#920000', '#8d0000', '#890000', '#840000', '#800000'];
                    break;
                default:
                    throw new Error("Unrecognised colour scheme " + colourScheme);
            }

            var colourScale = d3.scaleQuantize()
                .domain([0, 1])
                .range(colours);

            return colourScale;
        },
        createLogNormScale = function (aep) {
            // Creates a normalised scale which turns log of
            // value into range 0 to 1
            var min = d3.min(aep),
                max = d3.max(aep);

            var scale = d3.scaleLog()
                .domain([min, max])
                .range([0, 1]);

            return scale;
        },
        extractArray = function (data, propertyName) {
            // Extracts an array of values (a 'column') from
            // d3 style rows (list of objects)
            var vals = [],
                i;
            for (i = 0; i < data.length; i++) {
                vals.push(data[i][propertyName]);
            }
            return vals;
        },
        drawColourLegend = function (colourScaleId, colorScale, valueScale) {
            var colourBarWidth = 30,
                colourBarHeight = 400,
                axisWidth = 70,
                axisHeight = colourBarHeight,
                divElement = d3.select("#" + colourScaleId);

            // Draw the colour scale to the page for reference
            var colourBarSvg = divElement.append("svg")
                .attr("width", colourBarWidth)
                .attr("height", colourBarHeight);
            
            var defs = colourBarSvg.append("defs");
            var linearGradient = defs.append("linearGradient")
                .attr("id", "linear-gradient")
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "0%")
                .attr("y2", "100%");
            
            // Create gradient colour fill stops
            var sampleVals = colorScale.ticks();
            // console.log("sampleRange", sampleVals);

            linearGradient.selectAll("stop") 
                    .data( sampleVals )                  
                .enter().append("stop")
                    .attr("offset", function(d,i) { 
                        // console.log(i/(sampleVals.length-1));
                        return i/(sampleVals.length-1); })
                    .attr("stop-color", function(d) { return colorScale(d); });

            colourBarSvg.append("rect")
                .attr("width", colourBarWidth)
                .attr("height", colourBarHeight)
                .style("fill", "url(#linear-gradient)");


            // Draw the axis
            // For this we need a copy of the value scale, but 
            // with it's range set over the length of the axis
            var axisValueScale = valueScale.copy()
                    .range([0, axisHeight]),
                colourAxis = d3.axisRight()
                    .scale(axisValueScale)
                    // .ticks(4)
                    .tickFormat(d3.format("f"));

            divElement.append("svg")
                    .attr("class", "axis")
                    .attr("width", axisWidth)
                    .attr("height", axisHeight)
                .append("g")
                    .call(colourAxis);
        },
        drawMap = function (mapId, colourScaleId, country, colourScheme) {
            var csvUrl = "data/aep_thresholds_Sudan.csv",
                map = L.map(mapId).setView([51.505, -0.09], 13),
                colourScale;

            addTileLayer(map);

            d3.csv(csvUrl)
                .row(processCsvRow)
                .get(function (data) {
                    var aep = extractArray(data, "aep"),
                        colourScale = createNormalisedColourScale(aep, colourScheme),
                        valueScale = createLogNormScale(aep),
                        circles = createCircles(data, colourScale, valueScale);
                        features = L.featureGroup(circles)
                            .addTo(map);

                    // Zoom in on features
                    map.fitBounds(features.getBounds());

                    // Draw the colour scale
                    drawColourLegend(colourScaleId, colourScale, valueScale);
                });
        };
    return {
        drawMap: drawMap
    }
}(L, d3))