
const apiURL = "https://jsonplaceholder.typicode.com/posts/1";

fetch(apiURL)
  .then((response) => {

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json();
  })
  .then((data) => {

    console.log("✅ API Response:", data);
  })
  .catch((error) => {

    console.error("❌ Fetch Error:", error);
  });
