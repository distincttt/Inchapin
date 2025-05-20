export function initModal() {
   const modal = document.getElementById("callbackModal");
   if (!modal) return;

   const closeButton = modal.querySelector(".modal__close");
   const phoneInput = document.getElementById("phone");
   const form = document.getElementById("callbackForm");

   document.querySelectorAll(".call-button").forEach((button) => {
      button.addEventListener("click", (e) => {
         e.preventDefault();
         openModal();
      });
   });

   closeButton?.addEventListener("click", closeModal);
   document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("show")) {
         closeModal();
      }
   });

   function openModal() {
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
   }

   function closeModal() {
      modal.classList.remove("show");
      document.body.style.overflow = "";
   }

   if (phoneInput) {
      IMask(phoneInput, { mask: "+7 (000) 000-00-00" });
   }

   if (form) {
      form.addEventListener("submit", (e) => {
         e.preventDefault();

         const formData = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
         };

         console.log("Form data:", formData);
         closeModal();
         form.reset();
         resetLabels();
      });
   }

   const inputs = modal.querySelectorAll(".form-group input");
   inputs.forEach((input) => {
      const label = input.nextElementSibling;
      if (!label) return;

      if (input.value) {
         label.classList.add("active");
      }

      input.addEventListener("focus", () => label.classList.add("active"));
      input.addEventListener("blur", () => {
         if (!input.value) {
            label.classList.remove("active");
         }
      });
   });

   function resetLabels() {
      inputs.forEach((input) => {
         const label = input.nextElementSibling;
         if (label) label.classList.remove("active");
      });
   }
}
