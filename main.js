const themeSelect = document.getElementById("theme");
const notificationsSelect = document.getElementById("notifications");
const fontSizeSelect = document.getElementById("fontSize");
const saveBtn = document.getElementById("saveBtn");

const defaultValues = {
  theme: localStorage.getItem("theme") || "Dark",
  notifications: localStorage.getItem("notifications") || "Enabled",
  fontSize: localStorage.getItem("fontSize") ?? "16",
}

themeSelect.value = defaultValues.theme;
notificationsSelect.value = defaultValues.notifications;
fontSizeSelect.value = defaultValues.fontSize;

const currentTheme = document.getElementById("currentTheme");
const currentNotifications = document.getElementById("currentNotifications");
const currentFontSize = document.getElementById("currentFontSize");

currentTheme.textContent = defaultValues.theme;
currentNotifications.textContent = defaultValues.notifications === "true" ? "Enabled" : "Disabled";
currentFontSize.textContent = defaultValues.fontSize;

function checkForm(){
  const isDisabled = themeSelect.value && notificationsSelect.value && fontSizeSelect.value ? false : true;
  if(isDisabled){
    saveBtn.disabled = true;
    saveBtn.classList.add("disabled");
  }
  else {
    saveBtn.disabled = false;
    saveBtn.classList.remove("disabled");
  }
}

themeSelect.addEventListener("change", checkForm);
notificationsSelect.addEventListener("change", checkForm);
fontSizeSelect.addEventListener("input", checkForm);
saveBtn.addEventListener("click", () => {
  localStorage.setItem("theme", themeSelect.value);
  localStorage.setItem("notifications", notificationsSelect.value);
  localStorage.setItem("fontSize", fontSizeSelect.value);
  currentTheme.textContent = themeSelect.value;
  currentNotifications.textContent = notificationsSelect.value === "true" ? "Enabled" : "Disabled";
  currentFontSize.textContent = fontSizeSelect.value;
})

checkForm();