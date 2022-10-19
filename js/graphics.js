
let dataArray = [
    {cargo:"Diretor Presidente",                salario:28000},
    {cargo:"Coordenador",                       salario:17480},
    {cargo:"Analista",                          salario:6081},
    {cargo:"Auxiliar",                          salario:3720},
    {cargo:"Estagiario",                        salario:1850}

];
 dataArray.sort(
    function(a,b){
        return b.salario-a.salario;
    }
)

let larg = 670;
let alt = 250;
//d3.select("body").style("background-color", "black");
let canvas = d3.select("#bar")
                .append("svg")
                .attr("width", larg)
                .attr("height", alt)
                .style("padding-top", "20px");

var escala = d3.scaleLinear()
                .domain([0, 29000])
                .range([0, larg-300]);

var cor = d3.scaleLinear()
                .domain([0, 29000])
                .range(["red", "brown"]);

var barras = canvas.selectAll("rect")
                .data(dataArray)
                .enter()
                    .append("rect")
                    .attr("width", 1)
                    .attr("height", 18)
                    .attr("fill", (d) => cor(d.salario))
                    .attr("y", (d, i)=> i*20)
                    .attr("x", 150);

var horas = canvas.selectAll("text")              
                    .data(dataArray)
                    .enter()
                        .append("text")
                        .attr("width", 20)
                        .attr("height", 20)
                        .style("font","15px sans-serif")
                        //.style("text-shadow","2px 2px 1px black")
                        .attr("y", (d,i) => i*20+15)
                        .attr("x", (d)=>escala(d.salario)+160)
                        .attr("fill", "gray")
                        .text((d) => "R$ "+d.salario)
                        .attr("opacity",0)


var nomes = d3.scalePoint()
                //.domain([0,11])
                .domain(["Diretor presidente",
                         "Coordenador",
                         "Analista",
                         "Auxiliar",
                         "Estagiário"])
                .range([0, 80]);

var escaY = d3.axisLeft(nomes);

canvas.append('g')
        .attr("transform", "translate(150,10)")
        .style("font","14px sans-serif")
        //.style("text-shadow","1px 1px 1px black")
        .style("color","black")
        .attr("x",200)
        .call(escaY); 

barras.transition()
        .duration(1000)
        .attr("width", (d) => escala(d.salario/2))
barras.transition()
        .duration(1000)        
        .delay(1000)
        .attr("width", (d) => escala(d.salario))
horas.transition()
        .duration(1000)
        .delay(1500)
        .attr("opacity",1)

//GRAFICO 2

let dataArray2 = [
    {setor:"Administrativo",                custo:76900},
    {setor:"Financeiro",                    custo:26100},
    {setor:"Compras",                       custo:20850},
    {setor:"Contabilidade",                 custo:9325},
    {setor:"TI",                            custo:21410}
];
 dataArray2.sort(
    function(a,b){
        return b.custo-a.custo;
    }
)

//d3.select("body").style("background-color", "black");
let canvas2 = d3.select("#bar2")
                .append("svg")
                .attr("width", larg)
                .attr("height", alt)
                .style("padding-top", "20px");

var escala2 = d3.scaleLinear()
                .domain([0, 78000])
                .range([0, larg-300]);
console.log(larg);

var cor2 = d3.scaleLinear()
                .domain([0, 78000])
                .range(["orange", "red"]);

var barras2 = canvas2.selectAll("rect")
                .data(dataArray2)
                .enter()
                    .append("rect")
                    .attr("width", 1)
                    .attr("height", 18)
                    .attr("fill", (d) => cor2(d.custo))
                    .attr("y", (d, i)=> i*20)
                    .attr("x", 150);
var horas2 = canvas2.selectAll("text")              
                    .data(dataArray2)
                    .enter()
                        .append("text")
                        .attr("width", 20)
                        .attr("height", 20)
                        .style("font","15px sans-serif")
                        //.style("text-shadow","2px 2px 1px black")
                        .attr("y", (d,i) => i*20+15)
                        .attr("x", (d)=>escala2(d.custo)+160)
                        .attr("fill", "gray")
                        .text((d) => "R$ "+d.custo)
                        .attr("opacity",0)
var nomes2 = d3.scalePoint()
                //.domain([0,11])
                .domain(["Administrativo",
                         "Financeiro",
                         "Compras",
                         "Contabilidade",
                         "TI"])
                .range([0, 80]);
var escaY2 = d3.axisLeft(nomes2);
canvas2.append('g')
        .attr("transform", "translate(150,10)")
        .style("font","14px sans-serif")
        .style("color","black")
        .attr("x",200)
        .call(escaY2); 
barras2.transition()
        .duration(1000)
        .attr("width", (d) => escala2(d.custo/2))
barras2.transition()
        .duration(1000)        
        .delay(1000)
        .attr("width", (d) => escala2(d.custo))
horas2.transition()
        .duration(1000)
        .delay(1500)
        .attr("opacity",1)

//Circle
let data2 = [
    {sexo:"Masculino",                y:70},
    {sexo:"Feminino",                    y:20}
];
let data = [11,04];
let raio = 40;


let colorArc = d3.scaleOrdinal()
            .range(["red", "black"]);

let canvas3 = d3.select("#arc")
                .append("svg")
                .attr("width",300)
                .attr("height",200);

let group = canvas3.append("g")
                .attr("transform","translate(145,90)");

let arc = d3.arc()
            .innerRadius(80)
            .outerRadius(raio);

let pie = d3.pie()
            .value((d)=>d);

let arcs = group.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc");
arcs.append("path")
    .attr("d",arc)
    .attr("fill",d=>colorArc(d.data));

arcs.append("text")
    .attr("transform", (d)=> "translate("+arc.centroid(d)+")")
    .attr("text-anchor", "middle")
    .attr("dy","7px")
    .attr("font-size", "27px")
    .style("fill","white")
    .style("bgcolor","blue")
    .text((d)=> d.data);
