<template>
    <div class="airAdjustBox">
        <ul class="scales">
            <li v-for="(item, index) in labels" :key="index">
                <!-- <div class="active"></div> -->
                <div :class="index * 25 == value ? 'active' : ''"></div>
            </li>
        </ul>
        <div class="">
            <input type="range" class="operator" v-model="value" step="25" />
        </div>

        <ul class="labels">
            <li v-for="(item, index) in labels" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>
  
<script lang="ts">
import { ref } from "vue";
export default {
    name: "EController",
    setup() {
        const labels = ["关闭", "自动", "一级", "二级", "三级"];
        const values = [0, 25, 50, 75, 100];
        const value = ref(values[0])
        
        return {
            labels,
            values,
            value,
        }
    },
    // watch: {
    //     value(val) {
    //         if (parseInt(val) === this.value) {
    //             return
    //         }
    //         values.forEach((item, index) => {
    //             if (item === parseInt(val)) {
    //                 // this.status.cleanStrength = labels[index];
    //                 let state = labels[index];
    //                 // console.log("value值变了",val);
    //                 this.__setLatestAirCleanerStatus(state);
    //             }
    //         });
    //     }
    // },
    // methods: {
    //     __getLatestAirCleanerStatus() {
    //         // let that = this;
    //         getLatestAirCleanerStatus().then((res) => {
    //             this.status.cleanStrength = res.data[0].cleanStrength;
    //             this.status.filterUsage = res.data[0].filterUsage;
    //             // this.filterUsage = res.data[0].filterUsage;

    //             labels.forEach((item, index) => {
    //                 if (this.status.cleanStrength === item) {
    //                     this.value = values[index];
    //                 }
    //             })

    //         });
    //     },
    //     __setLatestAirCleanerStatus(state) {
    //         this.status.cleanStrength = state;
    //         this.status.filterUsage = "80";
    //         setLatestAirCleanerStatus(this.status).then(() => {
    //             // console.log(res.data[0]);
    //             this.__getLatestAirCleanerStatus()
    //         });
    //     }
    // },
    // created() {
    //     this.__getLatestAirCleanerStatus();
    // }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.airAdjustBox {
    // width: 1014px;
    width: 1014px;
    height: 300px;
    background: #27263f;
    border-radius: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

// input[type="range"]:after {
//   content:"*";
//   width: 19px;
//   height: 19px;
//   background: white;
//   // box-shadow: 0px 0px 10px 0px #00ffab;
//   border-radius: 19px;
//   margin-left: -900px;
//   // margin-top: -12px;
// }

input[type="range"] {
    -webkit-appearance: none;
    width: 912px;
    border-radius: 15px;
    /*这个属性设置使填充进度条时的图形为圆角*/
    background: #33334b;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-runnable-track {
    height: 30px;
    border-radius: 10px;
    /*将轨道设为圆角的*/
    // box-shadow: 0 1px 1px #def3f8, inset 0 0.125em 0.125em #0d1112; /*轨道内置阴影效果*/
}

input[type="range"]:focus {
    outline: none;
}

input[type="range"]::-webkit-slider-thumb {
    width: 120px;
    height: 70px;
    background: linear-gradient(135deg, #4579f6 0%, #03bbfe 55%, #00ffaa 100%);
    // background-image: url('../../assets/lock/eyes.png');
    box-shadow: 0px 0px 10px 0px #00ffab;
    border-radius: 30px;
    margin-top: -22px;
    // border: 5px solid #006eb3;
}

ul.scales {
    width: 792px;
    margin: 0 20px 49px 20px;
    // height: 40px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
    list-style-type: none;
}

ul.scales li {
    // width: 1px;
    // height: 25px;
    // background: white;
    text-align: center;
}

ul.scales li div {
    width: 3px;
    height: 25px;
    background: white;
    text-align: center;
}

ul.scales li div.active {
    background: linear-gradient(to bottom, #00ffab 0%, #03bbfe 50%, #4579f6 100%);
}

ul.labels {
    width: 912px;
    margin-top: 50px;
    padding-left: 28px;
    padding-right: 28px;
    height: 40px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
    list-style-type: none;
}

ul.labels li {
    // width: 75px;
    height: 50px;
    font-size: 36px;
    // font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 50px;
    letter-spacing: 1px;
    text-align: center;
}
</style>
  