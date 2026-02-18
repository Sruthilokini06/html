
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Promise is resolved successfully!");
  } else {
    reject("Promise is rejected!");
  }
});

myPromise
  .then((message) => {
    console.log("✅ Then:", message);
  })
  .catch((error) => {
    console.log("❌ Catch:", error);
  });
