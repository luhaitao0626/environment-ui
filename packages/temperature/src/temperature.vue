<template>
    <div class="box" :class="level">
        <header>温度</header>
        <div style="margin-top: 60px">
            <span class="dataContainer">{{ temperature }}</span>
            <span class="temperature">°C</span>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'ETemperature',
    props: {
        temperature: {
            type: Number,
            required: true,
            default: 20,
            validator(value: number) {
                return value >= -100 && value <= 100;
            }
        },
    },
    setup(props) {
        const level = computed(() => {
            let levelStyle;
            let temperature = props.temperature;
            // 18°以下，冷
            if (temperature <= 18) {
                levelStyle = "cold"
            }
            // (18,25] 舒适
            else if (temperature > 18 && temperature <= 25) {
                levelStyle = "comfortable"
            }
            // (25,*) 热
            else {
                levelStyle = "hot"
            }
            return levelStyle
        })
        return {
            level
        }
    }
})
</script>
<style scoped lang="scss">
.box {
  width: 300px;
  height: 400px;
  background: linear-gradient(135deg, #4579f6 0%, #03bbfe 52%, #00ffaa 100%);
  border-radius: 30px;
  background: linear-gradient(
    to right bottom,
    #4579f6 0%,
    #03bbfe 50%， #00ffaa 100%
  );
  margin: 20px;
}

header {
  font-size: 32px;
  font-family: "PingFangSC-Regular, PingFang SC";
  font-weight: 500;
  color: #ffffff;
  line-height: 45px;
  letter-spacing: 1px;
  margin: 20px 0 0 30px;
}

.dataContainer {
  width: 190px;
  height: 210px;
  text-align: center;
  font-size: 150px;
  font-family: "PingFangSC-Medium, PingFang SC";
  font-weight: 400;
  color: #ffffff;
  line-height: 210px;
  letter-spacing: 5px;
  margin: 75px 5px 50px 30px;

}
.temperature {

  width: 69px;
  height: 84px;
  font-size: 60px;
  font-family: "PingFangSC-Medium, PingFang SC";
  font-weight: 600;
  color: #FFFFFF;
  line-height: 84px;
  letter-spacing: 2px;
  text-align: left;
  vertical-align: top;
  margin-left: 0px;
}

.cold {
  background: linear-gradient(135deg, #03bbfe 0%, #00ffaa 52%, #faff00 100%);
}
.comfortable {
  background: linear-gradient(135deg, #4579f6 0%, #03bbfe 52%, #00ffaa 100%);
}
.hot {
  background: linear-gradient(135deg, #fe00aa 0%, #9745f6 54%, #4579f6 100%);
}
</style>