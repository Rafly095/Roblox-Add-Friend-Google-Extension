const resultsEl = document.getElementById("results");
const statusEl = document.getElementById("status");

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.className = isError ? "error" : "success";
}

document.getElementById("search").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  if (!username) return setStatus("Masukkan username!", true);

  setStatus("Searching...");
  resultsEl.innerHTML = "";

  chrome.runtime.sendMessage({ type: "searchUser", keyword: username }, (response) => {
    if (!response.success) {
      return setStatus("Error: " + response.error, true);
    }

    if (response.users.length === 0) {
      return setStatus("No users found.", true);
    }

    setStatus(""); // clear
    resultsEl.innerHTML = "";

    response.users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";

      const info = document.createElement("div");
      info.className = "user-info";
      info.innerHTML = `
        <span class="display-name">${user.displayName}</span>
        <span class="username">@${user.name}</span>
      `;

      const btn = document.createElement("button");
      btn.className = "add-btn";
      btn.textContent = "Add Friend";
      btn.addEventListener("click", () => {
        setStatus("Sending friend request...");
        chrome.runtime.sendMessage({ type: "friendRequest", userId: user.id }, (res) => {
          if (res.success) {
            setStatus(`Friend request sent to @${user.name}!`);
          } else {
            setStatus("Failed: " + res.error, true);
          }
        });
      });

      card.appendChild(info);
      card.appendChild(btn);
      resultsEl.appendChild(card);
    });
  });
});
