import { updateForm } from "./updateForm";
import { submitForm } from "./submitForm";
import { isInsertMode } from "./autoFill";

(function () {
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (e) {
            if (form.checkValidity() === false) {
              e.preventDefault();
              e.stopPropagation();
              form.classList.add("was-validated");
            } else {
              e.preventDefault();
              if (isInsertMode === "false") updateForm();
              submitForm();
            }
          },
          false
        );
      });
    },
    false
  );
})();
