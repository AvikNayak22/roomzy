"use server";

async function createSession(previousState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      error: "Please fill all the fields",
    };
  }

  console.log(email, password);
}

export default createSession;
