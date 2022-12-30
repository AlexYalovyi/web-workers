console.log('Hello from worker.js');

self.onmessage = (msg) => {
    console.log('Message from main', msg.data);
    postMessage('Message sent by worker');
};
