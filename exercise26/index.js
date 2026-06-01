// Blocking version
function blockingDelay() {
  const start = Date.now();

  while (Date.now() - start < 2000) {
    // Blocks the thread for 2 seconds
  }

  return "Blocking function finished after 2 seconds";
}

console.log("Before blocking");
console.log(blockingDelay());
console.log("After blocking");

// Non-blocking version
function nonBlockingDelay(callback) {
  setTimeout(() => {
    callback("Non-blocking function finished after 2 seconds");
  }, 2000);
}

console.log("Before non-blocking");

nonBlockingDelay((message) => {
  console.log(message);
});

console.log("After non-blocking");













