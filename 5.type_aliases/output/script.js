"use strict";
const userDetails = (id, user) => {
    console.log(`User id is ${id}, user name is ${user === null || user === void 0 ? void 0 : user.name} & email is ${user === null || user === void 0 ? void 0 : user.email}`);
};
userDetails(1, { name: "saifur", email: "saifur.rahman1193@gmail.com" });
userDetails("user-100", { name: "saifur", email: "saifur.rahman1193@gmail.com" });
