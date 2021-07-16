export const formContact = {
  init: ({ acronym, email, name, message, button }) => {
    const $email = document.querySelector(`#${email}`);
    const $name = document.querySelector(`#${name}`);
    const $message = document.querySelector(`#${message}`);
    const $button = document.querySelector(`#${button}`);
    console.log($email);
    console.log($name);
    console.log($message);
    console.log($button);

    formContact.eventClick({
      acronym,
      button: $button,
      email: $email,
      message: $message,
      name: $name,
    });
  },

  eventClick: ({ acronym, button, email, name, message }) => {
    const regex = /^.+@[a-z0-9]+\.[a-z]+(\.[a-z]+)*$/i;

    button.addEventListener("click", (e) => {
      e.preventDefault();

      if (email.value.match(regex) && name != "") {
        formContact.submit({
          email: email.value,
          message: message.value,
          name: name.value,
          acronym: acronym,
        });
      } else if (name.value === "") {
        console.log("nome vazio");
      }
    });
  },

  submit: async ({ email, message, name, acronym }) => {
    const data = {
      email,
      message,
      name,
    };
    console.log(data);

    try {
      await fetch(
        `https://emporiodadario.myvtex.com/api/dataentities/${acronym}/documents`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      ).then(console.log("postado com sucesso"));
    } catch (e) {
      console.log("não postado");
    }
  },
};

formContact.init({
  acronym: "FC",
  email: "fcEmail",
  name: "fcName",
  message: "fcMsg",
  button: "fcBtn",
});
