<template>
    <!-- 电池盒子 -->
    <div class="batteryBox">
        <!-- 电池体 -->
        <div class="batteryBody">
            <div class="batteryLevelBar" :class="batteryBg" :style="{width: batteryLevel+'%'}"></div>
        </div>
        <!-- 电池头部：突出的正极 -->
        <div class="batteryHead" :class='batteryBg'></div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'EBattery',
    props: {
        batteryLevel: {
            type: Number,
            required: true,
            default: 100,
            validator(value: number) {
                return value >= 0 && value <= 100;
            }
        },
    },
    setup(props) {
        // if (!(props.batteryLevel >= 0 && props.batteryLevel <= 100)) throw new Error('the value of battery level must between 0-100')
        const level = computed(()=> {
            if(typeof props.batteryLevel !== 'number'){
                return 100;
            }else{
                if(props.batteryLevel >= 0 && props.batteryLevel <= 100){
                    return props.batteryLevel;
                }else{
                    return 0;
                }
            }
        })
        const batteryBg = computed(() => {
            if (level.value >= 80) {
                return "high"
            } else if (level.value < 80 && level.value >= 20) {
                return "medium"
            } else if (level.value < 20 && level.value > 0) {
                return "low"
            } else {
                return ""
            }
        });
        return {
            batteryBg
        }
    }
})
</script>
<style scoped lang="scss">
.batteryBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 45px;
    height: 21px;
    margin-left: 10px;
}

.batteryBody {
    width: 35px;
    height: 100%;
    border: 1px solid black;
    padding: 2px;
    border-radius: 4px;
}

.batteryLevelBar {
    width: 80%;
    height: 100%;
    border-radius: 4px;
    box-sizing: content-box;

}

.high {
    background: rgb(0, 255, 128);
}

.medium {
    background: #ece250;
}

.low {
    background: rgb(182, 5, 5);
}

.batteryHead {
    width: 3px;
    height: 10px;
}
</style>