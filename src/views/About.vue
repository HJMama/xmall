<template>
  <div class="about">
    <div id="apqEcharts" class="apqEcharts"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      // init初始化图表
      var apqEcharts = this.$echarts.init(
        document.getElementById("apqEcharts")
      );
      let option = {
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: false
        },
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
            ["Matcha Latte", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ["Milk Tea", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ["Walnut Brownie", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
        grid: { top: "55%" },
        series: [
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            label: {
              formatter: "{b}: {@2012} ({d}%)"
            },
            encode: {
              itemName: "product",
              value: "2012",
              tooltip: "2012"
            }
          }
        ]
      };
      //将配置添加到echarts实例上
      apqEcharts.setOption(option);
      console.log("1");
    }
  }
};
</script>

<style scoped>
.about {
  width: 500px;
  height: 500px;
  background-color: pink;
}
.apqEcharts {
  height: 100%;
  width: 100%;
}
</style>
