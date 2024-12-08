export const checkValidation = (name, email, password) => {
  // Name validation: only letters, spaces, hyphens, and apostrophes allowed, and length between 2-50
  const isNameValid =
    /^[a-zA-Z]+(?:['\-\s][a-zA-Z]+)*$/.test(name) &&
    name.length >= 2 &&
    name.length <= 50;
  const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) {
    return "Name is not valid. Ensure it contains only letters, spaces, or allowed symbols, and is 2-50 characters long.";
  }

  if (!isEmailValid) {
    return "Email Id is not valid.";
  }

  if (!isPasswordValid) {
    return "Password is not valid. Ensure it includes at least one uppercase letter, one lowercase letter, one number, and is 8+ characters long.";
  }

  return null;
};
