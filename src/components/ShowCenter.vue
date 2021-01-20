<template>
    <div class="show_center">
      <a-card :loading="loading" title="展示中心页面">

        <a-button type="primary" ghost>
          测试按钮
        </a-button>

        <a-divider />

        <div ref="main_chart" style="height: 400px;width: 600px;">

      </div>
    </a-card>
    </div>
</template>

<script>
    export default {
        name: "ShowCenter",
        data(){
          return {

          }
        },

        // 注意，我们需要再mounted生命周期钩子函数中完成，因为vue中dom的加载是异步的，如果dom还没有加载完，就执行图表的初始化，不会成功的，或者在延迟回调方法中来完成图表初始化
      	// create(){ this.$nextTick(() => {初始化图表}) } ,
        mounted() {
          // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(this.$refs.main_chart);
            // 绘制图表
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }

    }
</script>

<style scoped>

</style>
