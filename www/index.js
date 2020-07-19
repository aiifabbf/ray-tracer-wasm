import * as wasm from "../pkg";

wasm.init_panic_hook();

let world = wasm.finalScene();

let eye = wasm.Vec3.new(555 / 2 + 200, 555 / 2, - 600);
let center = wasm.Vec3.new(555 / 2, 555 / 2, 0);
let up = wasm.Vec3.new(0, 1, 0);

function toRadians(degree) {
    return degree * 2 * Math.PI / 360;
}

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let buffer = context.createImageData(width, height);

let camera = wasm.PerspectiveCamera.new(eye, center, up, toRadians(40), width / height, 10, 0);

let round = 0;
let y = height - 1;

let subPixelSamplingCount = 100;

let paused = true;
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", e => {
    paused = !paused;
    if (!paused) {
        toggle.innerHTML = "pause"
        onDraw();
    } else {
        toggle.innerHTML = "start"
    }
})

function onDraw() {
    if (paused) {
        return;
    }

    for (let x = 0; x < width; x++) {
        let r = 0;
        let g = 0;
        let b = 0;

        for (let sub = 0; sub < subPixelSamplingCount; sub++) {
            let u = (x + Math.random()) / width;
            let v = (y + Math.random()) / height;
            let ray = camera.ray(u, v);
            let color = wasm.color(ray, world, 20);
            ray.free();

            r += color.x();
            g += color.y();
            b += color.z();
            color.free();
        }

        r = r / subPixelSamplingCount;
        g = g / subPixelSamplingCount;
        b = b / subPixelSamplingCount;
        let pixel = [r, g, b];

        let row = height - 1 - y;
        let column = x;

        for (let i = 0; i < 3; i++) {
            let rgb = Math.min(pixel[i] * 255, 255);
            let old = buffer.data[row * width * 4 + column * 4 + i];
            buffer.data[row * width * 4 + column * 4 + i] = (old * round + rgb) / (round + 1);
        }

        buffer.data[row * width * 4 + column * 4 + 3] = 255;
    }

    context.putImageData(buffer, 0, 0);

    y -= 1;
    if (y < 0) {
        y = height - 1;
        round += 1;
        console.log("start round" + round);
    }

    requestAnimationFrame(onDraw);
}

onDraw();