<template>
    <div class="container">
        <div class="sugiyama-chart-box">
            <div class="content-title">全流程sugiyama</div>
            <svg class="sugiyama-svg" id="svg01"></svg>
        </div>
        <div class="layered-sugiyama-chart-box">
            <div class="content-title">分层流程图</div>
            <svg class="sugiyama-svg" id="svg02"></svg>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3';
import * as d3Dag from 'd3-dag';
import { ref } from 'vue';
import { fetchData } from '../api/index';
import { customLayout } from '../utils/layout';

(async () => {
    const data = await fetchData('test').then(res => {
        return res.data
    });

    const colorMap = new Map([
        ["a", "#FFC000"],
        ["b", "#7030A0"],
        ["c", "#92D050"],
        ["d", "#00B0F0"]
    ]);
    const nodeRadius = 30;

    //左边流程图
    const left_dag = d3.dagStratify()(data.scm_test);

    //深度优先的类树状结构
    console.log(left_dag);
    const left_layout = d3
        .sugiyama() // base layout
        .layering(customLayout())
        .decross(d3.decrossOpt()) // minimize number of crossings
        .nodeSize((node) => [(node ? 5 : 0.25) * nodeRadius, 5 * nodeRadius]);

    // set node size instead of constraining to fit
    const left_width = left_layout(left_dag).width;
    const left_height = left_layout(left_dag).height;

    // --------------------------------
    // This code only handles rendering
    // --------------------------------
    const leftSvgSelection = d3.select("#svg01");
    leftSvgSelection.attr("viewBox", [20, 0, left_width, left_height].join(" "));
    const left_defs = leftSvgSelection.append("defs"); // For gradients

    // How to draw edges
    const line = d3
        .line()
        .curve(d3.curveCatmullRom)
        .x((d) => d.x)
        .y((d) => d.y);

    // Plot edges
    leftSvgSelection
        .append("g")
        .selectAll("path")
        .data(left_dag.links())
        .enter()
        .append("path")
        .attr("d", ({ points }) => line(points))
        .attr("fill", "none")
        .attr("stroke-width", 3)
        .attr("stroke", ({ source, target }) => {
            // encodeURIComponents for spaces, hope id doesn't have a `--` in it
            const gradId = encodeURIComponent(`${source.data.id}--${target.data.id}`);
            const grad = left_defs
                .append("linearGradient")
                .attr("id", gradId)
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("x1", source.x)
                .attr("x2", target.x)
                .attr("y1", source.y)
                .attr("y2", target.y);
            grad
                .append("stop")
                .attr("offset", "0%")
                .attr("stop-color", colorMap.get(source.data.type));
            grad
                .append("stop")
                .attr("offset", "100%")
                .attr("stop-color", colorMap.get(target.data.type));
            return `url(#${gradId})`;
        });

    // Select nodes
    const left_nodes = leftSvgSelection
        .append("g")
        .selectAll("g")
        .data(left_dag.descendants())
        .enter()
        .append("g")
        .attr("transform", ({ x, y }) => `translate(${x}, ${y})`);

    // Plot node circles
    left_nodes
        .append("circle")
        .attr("r", nodeRadius)
        .attr("fill", (n) => colorMap.get(n.data.type));

    // Add text to nodes
    left_nodes
        .append("text")
        .text((d) => d.data.name)
        .attr("font-weight", "normal")
        .attr("font-family", "sans-serif")
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "#767171")
        .attr("transform","translate(0,40)");

    //右边流程图
    const right_dag = d3.dagStratify()(data.test02);
    const right_layout = d3
        .sugiyama() // base layout
        .decross(d3.decrossOpt()) // minimize number of crossings
        .nodeSize((node) => [(node ? 8 : 0.25) * nodeRadius, 8 * nodeRadius]); // set node size instead of constraining to fit
    const right_width = right_layout(right_dag).width;
    const right_height = right_layout(right_dag).height;
    // --------------------------------
    // This code only handles rendering
    // --------------------------------
    const rightSvgSelection = d3.select("#svg02");
    rightSvgSelection.attr("viewBox", [0, 0, right_width, right_height].join(" "));
    const right_defs = rightSvgSelection.append("defs"); // For gradients

    // Plot edges
    rightSvgSelection
        .append("g")
        .selectAll("path")
        .data(right_dag.links())
        .enter()
        .append("path")
        .attr("d", ({ points }) => line(points))
        .attr("fill", "none")
        .attr("stroke-width", 3)
        .attr("stroke", ({ source, target }) => {
            // encodeURIComponents for spaces, hope id doesn't have a `--` in it
            const gradId = encodeURIComponent(`${source.data.id}--${target.data.id}`);
            const grad = right_defs
                .append("linearGradient")
                .attr("id", gradId)
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("x1", source.x)
                .attr("x2", target.x)
                .attr("y1", source.y)
                .attr("y2", target.y);
            grad
                .append("stop")
                .attr("offset", "0%")
                .attr("stop-color", colorMap.get(source.data.type));
            grad
                .append("stop")
                .attr("offset", "100%")
                .attr("stop-color", colorMap.get(target.data.type));
            return `url(#${gradId})`;
        });

    // Select nodes
    const right_nodes = rightSvgSelection
        .append("g")
        .selectAll("g")
        .data(right_dag.descendants())
        .enter()
        .append("g")
        .attr("transform", ({ x, y }) => `translate(${x}, ${y})`);

    // Plot node circles
    right_nodes
        .append("circle")
        .attr("r", nodeRadius)
        .attr("fill", (n) => colorMap.get(n.data.type));

    // Add text to nodes
    right_nodes
        .append("text")
        .text((d) => d.data.id)
        .attr("font-weight", "normal")
        .attr("font-family", "sans-serif")
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "#767171")
        .attr("transform","translate(0,40)");

})();

</script>

<style scoped>
.sugiyama-chart-box {
    display: inline-block;
    margin: 10px;
    width: 900px;
    height: 600px;
}

.layered-sugiyama-chart-box {
    display: inline-block;
    margin: 10px;
    width: 600px;
    height: 600px;
}

/* .sugiyama-svg {
	width: 900px;
	height: 900px;
}
.layered-sugiyama-svg {
	width: 400px;
	height: 900px;
} */
svg {
    background-color: #fcfdfd;
    width: 100%;
    height: 100%;
}

.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
</style>
