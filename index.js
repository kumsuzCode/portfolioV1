let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  if (!contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
  contrastToggle = !contrastToggle;
}

function contact(event) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  event.preventDefault();
  emailjs
    .sendForm(
      "service_d2rjl62",
      "template_4zsjayd",
      event.target,
      "OlXdFyGgrCiATevTu"
    )
    .then(() => {
      console.log("hello");
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on mkumsuz1@gmail.com"
      );
    });
}

function toggleModal() {
  // If the modal is open, we remove it.
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
