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
        },
    },
    setup(props) {
        const batteryBg = computed(() => {
            let level = props.batteryLevel;
            if (level >= 80) {
                return "high"
            } else if (level < 80 && level >= 20) {
                return "medium"
            } else if (level < 20 && level > 0) {
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