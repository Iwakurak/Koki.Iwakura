const copyButton = document.querySelector("[data-copy-email]");
const emailAddress = document.getElementById("email-address");
const copyStatus = document.querySelector(".copy-status");

if (copyButton && emailAddress && copyStatus && navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    copyButton.disabled = true;
    try {
      await navigator.clipboard.writeText(
        emailAddress.textContent.trim().replace("(at)", "@")
      );
      copyStatus.textContent = copyButton.dataset.copySuccess;
    } catch {
      copyStatus.textContent = copyButton.dataset.copyError;
    } finally {
      copyButton.disabled = false;
    }
  });
}
