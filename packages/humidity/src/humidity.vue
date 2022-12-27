<template>
    <div class="box">
        <header>湿度</header>
        <div class="HumidityBox my_progress">
            <el-progress type="circle" stroke-linecap="round" :percentage="humidity" :width="250" :stroke-width="16"
                :show-text="false">
            </el-progress>
            <div class="circleCenter">
                <span class="humidityValue">{{ humidity }}</span>
                <div class="confortableStatus">舒适</div>
            </div>
        </div>
        <svg width="100%" height="100%">
            <defs>
                <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:rgb(255,189,25)" stop-opacity="1"></stop>
                    <stop offset="100%" style="stop-color:rgb(0,200,255)" stop-opacity="1"></stop>
                </linearGradient>
            </defs>
        </svg>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:'EHumidity',
    props:{
        humidity: {
            type: Number,
            required: true,
            default: 20,
            validator(value: number) {
                return value >= 0 && value <= 100;
            }
        },
    },
    setup(props){

    }
})
</script>
<style scoped lang="scss">
.box {
  width: 350px;
  height: 400px;
  background: #27263f;
  border-radius: 30px;
  margin: 20px;
  /* background: linear-gradient( to right bottom, #4579F6 0%, #03BBFE 50%， #00FFAA 100%) */
}
header {
  font-size: 32px;
  /* font-family: "PingFangSC-Medium, PingFang SC"; */
  font-weight: 500;
  color: #ffffff;
  line-height: 45px;
  letter-spacing: 1px;
  margin: 20px 0 0 30px;
}

// .my_progress /deep/ svg > path:nth-child(2) {
//   stroke: url(#blue);
// }

// .my_progress /deep/ .el-progress-circle__track {
//   stroke: rgba(0, 0, 0, 0.3);
// }
.HumidityBox {
  margin: 31px 50px 55px 50px;
  position: relative;
}
.circleCenter {
  position: absolute;
  width: 152px;
  height: 168px;
  text-align: center;
  top: 61px;
  left: 49px;
}

.humidityValue {
  font-size: 120px;
  line-height: 120px;
}

.confortableStatus {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}
</style>
