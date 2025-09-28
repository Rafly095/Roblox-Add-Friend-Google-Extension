// 🔎 Cari user berdasarkan keyword
async function searchUsers(keyword) {
  const res = await fetch(`https://users.roblox.com/v1/users/search?keyword=${encodeURIComponent(keyword)}&limit=10`);
  if (!res.ok) throw new Error("Search failed");
  const data = await res.json();
  return data.data || [];
}

// ➕ Kirim friend request
async function sendFriendRequest(userId) {
  let res = await fetch(`https://friends.roblox.com/v1/users/${userId}/request-friendship`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: "{}" // body kosong tetap perlu {}
  });

  if (res.status === 403) {
    const token = res.headers.get("x-csrf-token");
    res = await fetch(`https://friends.roblox.com/v1/users/${userId}/request-friendship`, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": token,
        "Content-Type": "application/json"
      },
      body: "{}"
    });
  }

  if (!res.ok) throw new Error("Friend request failed: " + res.status);
  return true;
}


// 🔗 Listener
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "searchUser") {
    (async () => {
      try {
        const users = await searchUsers(msg.keyword);
        sendResponse({ success: true, users });
      } catch (e) {
        sendResponse({ success: false, error: e.toString() });
      }
    })();
    return true;
  }

  if (msg.type === "friendRequest") {
    (async () => {
      try {
        const result = await sendFriendRequest(msg.userId);
        sendResponse({ success: result });
      } catch (e) {
        sendResponse({ success: false, error: e.toString() });
      }
    })();
    return true;
  }
});
