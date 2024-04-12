// authentication using jwt -->
// generate token, verify the username and password, verify the token, decode the token,
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "test123";

// verifing username and password -->
const valideInputs = (username, password) => {
  const zodUsername = zod.string().email();
  const zodPassword = zod.string().min(6);
  const usernameResponse = zodUsername.safeParse(username);
  const passwordResponse = zodPassword.safeParse(password);

  if (usernameResponse.success && passwordResponse.success) {
    return true;
  } else {
    return false;
  }
};

// generate token if inputs are valid
const generateJwtToken = (username, password) => {
  const validity = valideInputs(username, password);
  if (validity) {
    const token = jwt.sign({ username }, jwtPassword);
    console.log(token);
  } else {
    console.log("write correct format username and password");
  }
};


// decode the token -->

const decodeJwtToken = (token) => {
    const decode = jwt.decode(token);
    if (decode) {
        return true;
    } else {
        return false;
    }
};

// verify the token

const verifyJwtToken = (token) => {
    try {
        const verified = jwt.verify(token, jwtPassword);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }

}



