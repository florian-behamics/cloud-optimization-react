export const validateLoginForm = (email, password) => {
  let errors = [];

  if (!email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = 'Invalid email format.';
  }

  if (!password) {
    errors.password = 'Password is required.';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  } else {
    errors.password = 'Passwords must match.';
  }
  //   else if (!/[A-Z]/.test(password)) {
  //     errors.password = 'Password must contain at least one uppercase letter.';
  //   } else if (!/[a-z]/.test(password)) {
  //     errors.password = 'Password must contain at least one lowercase letter.';
  //   } else if (!/[0-9]/.test(password)) {
  //     errors.password = 'Password must contain at least one digit.';
  //   } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
  //     errors.password = 'Password must contain at least one special character.';
  //   }

  return errors;
};
