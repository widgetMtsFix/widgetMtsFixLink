import "./index.css";

//------------------------------------------------Переменные-----------------------------------------------------------//
const banner = document.querySelector(".banner");
const iframe = document.querySelector(".iframe");

banner.addEventListener("click", () => {
  iframe.classList.add("iframe_open");
  iframe.src = "https://urmdf-canary.ssl.mts.ru/widget/";
  setTimeout(() => {
    const message = {
      token:
        "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFJS0hBTUlEVUwiLCJ1cm1kOk9yZ2FuaXphdGlvbklkIjoiMDEwMTAxODgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJub3JlcGx5QG10cy5ydSIsInVybWQ6RklPIjoi0JLQuNC00LbQtdGCINCi0JXQodCiIiwiZXhwIjoxNjk3NjEzMjA0LCJpc3MiOiJEZWFsZXJQb3J0YWxXaWRnZXQifQ.D8CEMkiKbZ2K4TFguCihPENtirVTqM63BCcF5MzvyVdn79YJHJpI93VsiRectYREmIYIQ-Fw5q7bX_paGbjERQ",
      actions: [{ type: "close_widget", value: false }],
      address: "Энгельс",
    };

    this._iframe.contentWindow.postMessage(
      `${JSON.stringify(message)}`,
      "https://urmdf-canary.ssl.mts.ru/widget/"
    );
  }, 1000);
});

const readMessage = (event) => {
  if (event.data === false) {
    iframe.classList.remove("iframe_open");
  }
};

window.addEventListener("message", readMessage, false);
