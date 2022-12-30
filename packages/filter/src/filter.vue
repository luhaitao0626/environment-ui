<template>
    <div class="filterInfo_box">
        <div class="myFilterPlugin">
            <div class="emptyPart"></div>
            <div>
                <Wave :percent="percent" />
            </div>
        </div>
        <div class="Info">
            <div class="instruction">
                <div>?</div>
            </div>
            <div class="value">
                <div>{{ filterUsage }}<span>天</span></div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from "vue";
import Wave from "@env/wave";
export default defineComponent({
    name: "EFilter",
    components: {
        Wave,
    },
    props: {
        max: {
            required: true,
            type: Number,
        },
        filterUsage: {
            required: true,
            type: String
        }
    },
    setup(props) {

        const percent = computed(() => {
            return parseInt(props.filterUsage) / props.max;
        })

        const percentageClass = computed(() => {
            let leftDay = parseInt(props.filterUsage)
            let style;
            let height = (leftDay / 150) * 205 + "px";
            if (leftDay == 150) {
                style = {
                    background: "linear-gradient(180deg, #00FFAA 0%, #03BBFE 48%, #4579F6 100%)",
                    height: "205px"
                }
            } else if (leftDay >= 30 && leftDay < 150) {
                style = {
                    background: "linear-gradient(180deg, #00FFAA 0%, #03BBFE 48%, #4579F6 100%)",
                    height: height
                }
            } else if (leftDay <= 30) {
                style = {
                    background: "linear-gradient(360deg, #FE00AA 0%, #9745F6 54%, #4579F6 100%)",
                    height: height
                }
            } else {
                style = {

                }
            }
            return style;
        });

        return {
            percent,
            percentageClass
        }
    }
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @keyframes rotate{
// 	from{transform: rotate(0deg)}
// 	to{transform: rotate(360deg)}
// }

.filterInfo_box {
    padding: 35px 20px 34px 50px;
    display: flex;
    flex-direction: row;
    width: 512px;
    height: 300px;
    background: #27263f;
    border-radius: 30px;
    box-sizing: border-box;
    // padding: 20px;
    /* background: linear-gradient( to right bottom, #4579F6 0%, #03BBFE 50%， #00FFAA 100%) */
}

.myFilterPlugin {
    width: 120px;
    height: 205px;
    border-radius: 32px;
    border: 4px solid #33334b;
    padding: 15px;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    z-index: 400;
}

.myFilterPlugin :nth-child(1) {
    width: 120px;
    height: 100%;
    flex: 1;
    // border-radius: 50%;
    background: #27263f;
    // background:purple;
    // animation: rotate 8s linear infinite;
}

.myFilterPlugin :nth-child(2) {
    width: 120px;
    height: 205px;
    border-radius: 16px;
    background: linear-gradient(180deg, #00ffaa 0%, #03bbfe 48%, #4579f6 100%);
    // border: 4px solid #33334B;
}

.Info {
    flex: 1;
    display: flex;
    flex-direction: column;
    // background-color: ivory;
}

// ?问号，跳转到替换滤芯的安装说明
.instruction div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #92929e;
    float: right;
    text-align: center;
    vertical-align: middle;
    font-size: 30px;
}

.value {
    flex: 1;
}

.value div {
    margin-left: 50px;
    //   width: 171px;
    //   height: 140px;
    font-size: 100px;
    // font-family: "PingFangSC-Regular, PingFang SC";
    font-weight: 400;
    color: #ffffff;
    line-height: 140px;
    letter-spacing: 3px;
    // -webkit-background-clip: text;
    //   -webkit-text-fill-color: transparent;
}

.value div span {
    font-size: 30px;
    // font-family: "PingFangSC-Regular, PingFang SC";
    font-weight: 400;
    color: #ffffff;
    margin-left: 10px;
}
</style>
  