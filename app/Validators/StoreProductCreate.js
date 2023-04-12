"use strict";

class StoreProductCreate {
  get rules() {
    return {
      name: "required",
      price: "required",
      description: "required",
      thumbnail: "required",
    };
  }

  get messages() {
    return {
      "email.required": "You must provide a email address.",
      "email.email": "You must provide a valid email address.",
      "email.unique": "This email is already registered.",
      "password.required": "You must provide a password",
    };
  }
  /* async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  } */
}

module.exports = StoreProductCreate;
