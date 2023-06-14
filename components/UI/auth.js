async function authenticate(mode, email, password) {
  const url = `${mode} `;
  const result = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  //const token = result.data.iDToken;

  return "token";
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export async function login(email, password) {
  console.log("hello");
  //const token = await authenticate("signInWithPassword", email, password);

  return "token";
}
