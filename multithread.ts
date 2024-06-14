import { Worker, isMainThread, parentPort } from "worker_threads";
import { cpus } from "os";

if (isMainThread) {
  // This code runs in the main thread
  const startTime = Date.now();
  const numCPUs = cpus().length;
  const workers = [];
  let workersCompleted = 0;

  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker("./multithread.js");
    workers.push(worker);

    // Communicate with the worker
    worker.on("message", (message) => {
      console.log("\nMessage from worker:", message);

      workersCompleted++;
      if (workersCompleted === numCPUs) {
        const endTime = Date.now();
        console.log("Total time taken by main thread:", endTime - startTime, "ms");
      }

      // Terminate the worker after receiving the message
      worker.terminate();
    });

    worker.postMessage(`\nHello from main thread! Worker ${i + 1}`);
  }
} else {
  // This code runs in each worker thread
  parentPort!.on("message", (message) => {
    console.log("Message from main thread:", message);

    // Simulate a time-consuming task
    // setTimeout(() => {
    // Send a message back to the main thread
    parentPort!.postMessage(`Hello from worker thread! ${message}`);

    // Worker terminates after completing its task
    // }, 2000); // Simulating a 2-second task
  });
}
