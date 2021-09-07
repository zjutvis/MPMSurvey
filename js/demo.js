const margin = {
    left: 100,
    top: 40,
    right: 20,
    bottom: 30
};
const bounds = {
    width: 800 - margin.left - margin.right,
    height: 500 - margin.top - margin.bottom
};
var color = {
    "Data Classification": "#ff1c12",
    "Data Refinement": "#de5991",
    "Dimension Reduction": "#759AA0",
    "Filter": "#759AA0",
    "Geographic Map Layout": "#E69D87",
    "Grid & Rectangle Layout": "#be3259",
    "Hierarchical Structure Layout": "#EA7E53",
    "Navigation": "#EEDD78",
    "Node-Link Graph Layout": "#9359b1",
    "Numerosity Reduction": "#47c0d4",
    "Numerosity Reduction": "#F49F42",
    "Perception & Color": "#AA312C",
    "Reconfigure": "#B35E45"
}

//dom操作
const svg = d3.select('#app')
    .append('svg')
    .attr('width', 800)
    .attr('height', 500)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)
//坐标系
const xScale = d3.scaleLinear()
    .domain([-5.5, 0.5])
    .range([0, bounds.width])
const xAxisGenerator = d3.axisBottom().scale(xScale)
const xAxis = svg.append('g')
    .attr('transform', `translate(0,${bounds.height})`)
    .transition()
    .call(xAxisGenerator)
const yScale = d3.scaleLinear()
    .domain([-4.0, 2.0])
    .range([bounds.height, 0])
const yAxisGenerator = d3.axisLeft().scale(yScale)
const yAxis = svg.append('g')
    .transition()
    .call(yAxisGenerator)






const dataset = [
    {
        title: "Bubble Sets- Revealing Set Relations with Isocontours over Existing Visualizations",
        lb: "Visual Mapping & Structure",
        xl: "Node-Link Graph Layout",
        mx: "E",
        tsnex: -2.5035203,
        tsney: -0.5562586
    },
    {
        title: " DRGraph - An Efficient Graph Layout Algorithm for Large - scale Graphs by Dimensionality Reduction",
        lb: " Visual Mapping & Structure",
        xl: "Node-Link Graph Layout",
        mx: "A",
        tsnex: -1.9271415,
        tsney: 0.40201044
    },
    {
        title: " Semantics of Directly Manipulating Spatializations",
        lb: " Interactive Exploration & Analysis",
        xl: "Reconfigure",
        mx: "B",
        tsnex: -4.383464,
        tsney: -1.3294888
    },
    {
        title: " DoughNets - Visualising Networks Using Torus Wrapping",
        lb: " Visual Mapping & Structure",
        xl: "Node-Link Graph Layout",
        mx: "C",
        tsnex: -1.6238873,
        tsney: -0.7456101
    },
]

let alldates;
alldates = dataset.map(d => d['mx']);
//会有冗余
alldates = Array.from(new Set(dataset.map(d => d['mx'])));
console.log(dataset);
console.log(alldates);
const multiData = d3.zip.apply(this, alldates);
console.log(multiData);

let gruops = svg.selectAll('.g').data(multiData);

const dots = svg.selectAll('.dot')
    .data(dataset)
    .join(
        (enter) => {
            const enter_circle = enter.append('path')
            enter_circle.classed('dot', true)
            // .append('title')
            return enter_circle
        },
        (update) => update,
        (exit) => exit.remove()

    )

dots
    .attr('fill', d => color[d['xl']])
    .attr('transform', (d) => 'translate(' + xScale(d.tsnex) + ',' + yScale(d.tsney) + ')')
    // .attr('cx', d => xScale(d.tsnex))
    // .attr('cy', d => yScale(d.tsney))
    // .transition()
    // .attr('r', 5)
    .attr('d', d3.symbol().type(function (d) {
        // console.log(d.mx)
        // let t = d3.symbols[alldates.indexof(d.mx)]
        // console.log("type  ", t, d, d.mx)
        return d3.symbols[alldates.indexOf(d.mx)];
    }).size(150))

// dots.select('title').text(d => `[${d.title}]`)

// //T添加交互
// dots.on('mouseenter', function (d, i) {
//     d3.select(this).transition().attr('d', 100)
// })
// dots.on('mouseleave', function (d, i) {
//     d3.select(this).transition().attr('d', 200)
// })