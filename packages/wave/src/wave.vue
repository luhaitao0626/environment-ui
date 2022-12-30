<template>
    <div id="container">
        <canvas ref="canvas" class="canvas"></canvas>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue';
export default defineComponent({
    name: "EWave",
    props: {
        percent: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const canvas = ref<HTMLCanvasElement>() as any;
        let rId: any;
        let draw: Function;
        const waveEffect = () => {
            var ctx = canvas.value!.getContext("2d"),
                width = (canvas.value!.width = canvas.value!.offsetWidth),
                height = (canvas.value!.height = canvas.value!.offsetHeight);

            var A = 4,
                W = 2 * Math.PI / width,
                Q = 0,
                H = height * (1 - props.percent);

            var A2 = 4,
                W2 = 2 * Math.PI / width,
                Q2 = 0,
                H2 = height * (1 - props.percent);

            var speed = -0.02 * 2;
            var speed2 = -0.025 * 2;

            var lingrad: any;
            var lingrad2: any;

            if (H || H == 0) {
                lingrad = ctx!.createLinearGradient(0, H, 0, height);
                lingrad2 = ctx!.createLinearGradient(0, H2, 0, height);
            }
            else {
                lingrad = ctx!.createLinearGradient(0, height, 0, height);
                lingrad2 = ctx!.createLinearGradient(0, height, 0, height);
            }

            if (props.percent >= 0.2) {
                lingrad.addColorStop(0, "#00FFAA");
                lingrad.addColorStop(0.48, "#03BBFE");
                lingrad.addColorStop(1, "#4579f6");

                lingrad2.addColorStop(0, "#4579f6");
                lingrad2.addColorStop(0.48, "#03BBFE");
                lingrad2.addColorStop(1, "#00FFAA");

            } else {
                lingrad.addColorStop(0, "#FE00AA");
                lingrad.addColorStop(0.54, "#9745F6");
                lingrad.addColorStop(1, "#4579F6");

                lingrad2.addColorStop(0, "#4579F6");
                lingrad2.addColorStop(0.48, "#9745F6");
                lingrad2.addColorStop(1, "#FE00AA");
            }

            function draw() {
                rId = window.requestAnimationFrame(draw);
                ctx!.clearRect(0, 0, width, height);

                // 画出左下方的反光
                ctx!.beginPath();
                ctx!.fillStyle = "#DDDDDD";
                ctx!.moveTo(4, 125);
                ctx!.lineTo(14, 125);
                ctx!.lineTo(14, 165);
                ctx!.lineTo(4, 165);
                ctx!.lineTo(4, 125);
                ctx!.fill();
                ctx!.closePath();

                // 画出右上方的反光
                ctx!.beginPath();
                ctx!.fillStyle = "#DDDDDD";
                ctx!.moveTo(110, 17);
                ctx!.lineTo(111, 17);
                ctx!.lineTo(111, 41);
                ctx!.lineTo(110, 41);
                ctx!.lineTo(110, 17);
                ctx!.fill();
                ctx!.closePath();

                // 绘制波浪1
                ctx!.beginPath();
                ctx!.fillStyle = lingrad;
                ctx!.moveTo(0, height);
                //绘制第一个波形
                Q += speed;
                for (let x = 0; x <= width; x++) {

                    //   var s = 0.1 * Math.sin(x / 150) + 1;
                    let y = A * Math.sin(W * x + Q) + H;
                    //   y = y ;
                    ctx!.lineTo(x, y);
                }
                ctx!.lineTo(width, height);
                ctx!.lineTo(0, height);
                ctx!.fill();
                ctx!.closePath();
                //设置重叠效果
                ctx!.globalCompositeOperation = "destination-over";


                //绘制第二个波形
                ctx!.beginPath();
                ctx!.fillStyle = lingrad2;
                Q2 += speed2;
                for (let x = 0; x < width; x++) {
                    let y = A2 * Math.sin((x - Math.PI / W2) * W2 + Q2) + H2;
                    ctx!.lineTo(x, y);
                }
                ctx!.lineTo(width, height);
                ctx!.lineTo(0, height);
                ctx!.fill();
                ctx!.closePath();


            }
            return draw;
        }

        onMounted(() => {
            console.log(canvas)
            draw = waveEffect();
            rId && window.cancelAnimationFrame(rId);
            draw()
        });

        onUpdated(() => {
            rId && window.cancelAnimationFrame(rId);
            draw()
        });

        return { canvas }
    },
})
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.canvas {
    border-radius: 20px;
}
</style>
  