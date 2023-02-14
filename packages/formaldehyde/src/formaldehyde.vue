<template>
  <div class="box" :style="formaldehydeStatusStyle">
    <header>甲烷</header>
    <div class="infoBox">
      <div>
        <img :src="formaldehyde <= criticalVal ? normalIcon : abnormalIcon" />
      </div>
      <span class="value">
        {{ formaldehyde }}
      </span>
      <div class="unit">
        <!-- mg/m³ -->
        ppm
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue';
import normalIcon from "./img/normal.png";
import abnormalIcon from "./img/abnormal.png";

export default defineComponent({
  name: 'EFormaldehyde',
  props: {
    formaldehyde: {
      type: Number,
      required: true,
      default: 20,
      validator(value: number) {
        return value >= 0 && value <= 100;
      }
    },
  },
  setup(props) {
    const criticalVal = 2500;
    const formaldehydeStatusStyle = computed(()=>{
      let background;
      if(props.formaldehyde <= criticalVal ){
        background = {
          background:"linear-gradient(135deg, #4579f6 0%, #03bbfe 52%, #00ffaa 100%)"}
      }
      else{
        background = {
          background:"linear-gradient(135deg, #FE00AA 0%, #9745F6 54%, #4579F6 100%)"}
      }
      return background
    })
    return {
      criticalVal,
      formaldehydeStatusStyle,
      normalIcon,
      abnormalIcon,
    }
  }
})
</script>

<style scoped lang="scss">
.box {
  width: 244px;
  height: 400px;
  background: linear-gradient(135deg, #4579f6 0%, #03bbfe 52%, #00ffaa 100%);
  border-radius: 30px;
  margin: 20px;
}

header {
  font-size: 32px;
  // font-family: "PingFangSC-Medium, PingFang SC";
  font-weight: 500;
  color: #ffffff;
  line-height: 45px;
  letter-spacing: 1px;
  margin: 20px 0 0 30px;
}

.infoBox {
  padding-top: 45px;
  text-align: center;
}

.value {
  width: 199px;
  height: 98px;
  font-size: 70px;
  /* font-family: "PingFangSC-Medium, PingFang SC"; */
  font-weight: 500;
  color: #ffffff;
  line-height: 98px;
  letter-spacing: 2px;
  /* -webkit-background-clip: "text"; */
  /* -webkit-text-fill-color: transparent; */
}

.unit {
  /* width: 111px;
  height: 45px; */
  margin-right: 20px;
  font-size: 32px;
  text-align: right;
  /* font-family: "PingFangSC-Regular, PingFang SC"; */
  font-weight: 400;
  color: #ffffff;
  line-height: 45px;
  letter-spacing: 1px;
  //   -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
}
</style>
