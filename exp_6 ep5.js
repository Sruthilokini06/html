

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("✅ Fetched user");
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`✅ Fetched posts for user ${userId}`);
      resolve([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" }
      ]);
    }, 1000);
  });
}

function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`✅ Fetched comments for post ${postId}`);
      resolve(["Great post!", "Thanks for sharing"]);
    }, 1000);
  });
}


fetchUser()
  .then((user) => fetchPosts(user.id))
  .then((posts) => fetchComments(posts[0].id))
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error("❌ Error:", error);
  });
