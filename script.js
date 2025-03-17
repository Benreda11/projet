document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("dark-mode-toggle");
  toggleButton.textContent = "🌙/🔆";
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  });

  if (localStorage.getItem("dark-mode") === "true") {
      document.body.classList.add("dark-mode");
  }
});

function toggleAdmin() {
  let password = prompt("أدخل كلمة المرور للمسؤول:");
  if (password === "0000") {
      alert("تم تفعيل وضع المسؤول");
      document.querySelectorAll(".editable").forEach(el => el.contentEditable = true);
  } else {
      alert("كلمة المرور غير صحيحة");
  }
}

function logoutAdmin() {
  alert("تم تعطيل وضع المسؤول");
  document.querySelectorAll(".editable").forEach(el => el.contentEditable = false);
}


