
const apiURL = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData() {
  try {
    const response = await fetch(apiURL);

   
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }

    const data = await response.json();
    console.log("✅ API Response:", data);

  } catch (error) {
    console.error("❌ Fetch Error:", error);
  }
}

fetchData();
