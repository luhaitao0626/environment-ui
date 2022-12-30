<template>
    <div class="indicatorBox">
        <div class="levelBox">
            <span class="level" :style="[color, borderColor]">{{ level }}</span>
        </div>
        <div>
            <div class="pointer" :style="pointerStyle"></div>
            <ul class="gauge">
                <li v-for="(point, index) in options.range" :key="index">
                    <span>{{ point }}</span>
                </li>
            </ul>
        </div>
        <div class="indicator"></div>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
const options = {
    range: [0, 35, 75, 115, 150, 250, 500],
    levels: ["优", "良", "轻度污染", "中度污染", "重度污染", "严重污染"],
    colors: ["#00FFAB", "#01BBFE", "#467AF6", "#9B42F4", "#5D2DE1", "#FE00AA"]
}

export default defineComponent({
    name: "EIndicator",
    props: {
        name: {
            required: true,
            type: String,
            default: 'PM2.5',
        },
        value: {
            required: true,
            type: Number,
            default: 100,
        },
        options: {
            required: true,
            type: Object,
            default: options,
        },
    },
    setup(props) {
        const totLength = 330;

        // interval length
        const intervalLength = computed(() => {
            return totLength / (props.options.range.length - 1)
        });

        // gauge positions
        const position = computed(() => {
            let _position = 0;
            props.options.range.forEach((item: any, index: number, arr: any) => {
                // 找到this.value 所属的区间段
                if (props.value >= arr[index]) {
                    if (arr[index + 1]) {
                        if (props.value <= arr[index + 1]) {
                            //计算位置
                            _position =
                                // 前面的几段之和
                                index * intervalLength.value
                                // 本区间中的所占百分比长度
                                + ((props.value - arr[index]) / (arr[index + 1] - arr[index])) * intervalLength.value;
                        }
                    }
                    // //超过最大值，按最大值的位置
                    else {
                        _position = totLength
                    }
                }

            })
            return _position - 10;
        })

        // current value's level index
        const levelIndex = computed(() => {
            let _index = 0;
            if (props.value < props.options.range[0]) {
                _index = 0
            }
            else if (props.value > props.options.range[props.options.range.length - 1]) {
                _index = props.options.range.length - 2
            } else {
                props.options.range.forEach((_: any, index: number, arr: any) => {
                    console.log(_)
                    // 找到this.value 所属的区间段
                    if (arr[index + 1]) {
                        if (props.value >= arr[index] && props.value <= arr[index + 1]) {
                            _index = index
                        }
                    } else {
                        // this.levelIndex = this.points.length -1 - 1;
                    }
                });
            }

            return _index;
        });

        // current level;
        const level = computed(() => {
            return props.options.levels[levelIndex.value]
        });

        // current level color;
        const color = computed(() => {
            return {
                color: props.options.colors[levelIndex.value]
            }
        });

        // current level border color;
        const borderColor = computed(() => {
            return {
                'border': "2px solid " + props.options.colors[levelIndex.value]
            }
        });

        const pointerStyle = computed(() => {
            let color = "red";
            return {
                "border-top-color": color,
                "margin-left": JSON.stringify(position.value) + "px"
            }
        })

        return {
            totLength,
            level,
            color,
            borderColor,
            intervalLength,
            pointerStyle,
        }
    },
})
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.indicatorBox {
    width: 100%;
    height: 100%;
    padding: 5px 10px 5px 10px;
    box-sizing: border-box;
}

//右上角:等级盒子 优良中差
.levelBox {
    text-align: right;
    // padding-right: 31px;
}

.level {
    text-align: center;
    vertical-align: middle;
    min-width: 56px;
    height: 28px;
    border-radius: 15px;
    border: 2px solid #00ffab;
    padding: 0 5px 0 5px;
    padding-left: 22px;
    padding-right: 22px;
    font-size: 20px;
}

.level>span {
    font-size: 20px;
    font-weight: 400;
    color: #00ffab;
    line-height: 28px;
}

.levelColor {}

ul.gauge,
.indicator {
    width: 100%;
    padding:0;
}

ul.gauge {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 38px;
}

ul.gauge li {
    width: 16.6%;
    list-style: none;
    color: #92929e;
    text-align: left;
    // display: inline-block;
}

ul.gauge li:last-child {
    width: 20px;
    list-style: none;
    display: inline-block;
}

.indicator {
    height: 16px;
    background: linear-gradient(90deg,
            #ffff00 0%,
            #00ffab 20%,
            #03bbfe 42%,
            #4579f6 62%,
            #5d2de1 83%,
            #fe00aa 100%);
    border-radius: 35px;
}

.pointer {
    width: 0;
    height: 0;
    border-top: 20px solid;
    border-top-color: #ffff00;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    margin-left: -6px;
    margin-bottom: -58px;
    margin-left: 0px;
    margin-top: 38px;
    background-color: #27263f;
    // position: relative;
    // float: left;
    // z-index: 3;
}
</style>
  