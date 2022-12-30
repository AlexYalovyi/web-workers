console.log("Hello from main.js");

const worker = new Worker("worker.js");

worker.onmessage = (msg) => {
    console.log("Message from worker:", msg.data);
};

worker.postMessage("Message sent to worker");

console.log("end main.js");