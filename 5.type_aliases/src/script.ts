type stringOrNumber = string | number;
type userType = { name: string, email: string }

const userDetails = (id:stringOrNumber, user:userType) => {
    console.log(`User id is ${id}, user name is ${user?.name} & email is ${user?.email}`);
}

userDetails(1, { name: "saifur", email: "saifur.rahman1193@gmail.com" })

userDetails("user-100", { name: "saifur", email: "saifur.rahman1193@gmail.com" })