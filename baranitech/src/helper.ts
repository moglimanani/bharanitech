export const validateEmail = (email: string) => {
    if (!email.trim()) {
        return 'Email is required.';
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address.';
    }
    return '';
};

export const validatePassword = (password: string): string => {
    if (!password.trim()) {
      return 'Password is required.';
    }
  
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
  
    if (!regex.test(password)) {
      return 'Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.';
    }
  
    return '';
  };

export const validateName = (name: string) => {
    if (!name.trim()) {
        return 'Name is required.';
    }
    return '';
};

export const validatePhone = (phone: string): string => {
    if (!phone.trim()) {
      return 'Phone number is required.';
    }
  
    // Basic international and local number format (e.g., +1234567890 or 1234567890)
    const phoneRegex = /^(\+?\d{6,15})$/;
  
    if (!phoneRegex.test(phone)) {
      return 'Please enter a valid phone number.';
    }
  
    return '';
  };