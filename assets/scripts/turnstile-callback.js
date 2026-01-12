function turnstileCallback(token) {
   const user = `hewwo`;
   const domain = `nuzzles.dev`;

   const email = document.getElementById(`email`);
   email.href = `mailto:${user}@${domain}`;

   const emailText = document.getElementById(`email-text`);
   emailText.innerText = `${user}@${domain}`;

   const turnstileContainer = document.getElementById(`turnstile-container`);
   $(turnstileContainer).fadeOut(2_000, `swing`, () => {

      email.style = null;
      email.id = null;

      const hiddenElements = document.getElementsByClassName(`hidden-for-email-turnstile`);
      for (const hiddenElement of hiddenElements)
         $(hiddenElement).fadeIn(1_000);
   });
};