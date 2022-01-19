document.addEventListener("DOMContentLoaded", function (e) {
  let emailButtons = document.getElementsByClassName("show-email");
  for (let i = 0; i < emailButtons.length; i++) {
    emailButtons[i].addEventListener("click", showEmail);
  }

  let copyButtons = document.getElementsByClassName("copy-to-clipboard");
  for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", copyToClipboard);
  }
});

function showEmail(e) {
  let target = e.target;
  let email = "";
  email = email.concat(target.dataset.name);
  email = email.concat("@");
  email = email.concat(target.dataset.domain);
  email = email.concat(".");
  email = email.concat(target.dataset.tld);

  let children = target.children;
  let copyButton;
  for (let i = 0; i < children.length; i++) {
    if (children[i].classList.contains("copy-to-clipboard")) {
      copyButton = children[i];
      break;
    }
  }
  copyButton.classList.add("block");
  copyButton.classList.remove("hidden");
  copyButton.dataset.emailToCopy = email;

  let buttonLabel = copyButton.previousElementSibling;
  buttonLabel.innerHTML = email;
}

async function copyToClipboard(e) {
  e.stopPropagation();
  let emailCopyButton = e.target.closest("span");
  let emailToCopy = emailCopyButton.dataset.emailToCopy;
  let copySuccess = emailCopyButton.nextElementSibling;
  if (emailToCopy) {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      copySuccess.classList.replace("opacity-0", "opacity-100");
    } catch (err) {
      console.error("Error copying", err.message);
    }
  }
  setTimeout(() => {
    copySuccess.classList.replace("opacity-100", "opacity-0");
    copySuccess.classList.replace("duration-100", "duration-500");
  }, 3000);
}
