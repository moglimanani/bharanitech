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

export const validateTitle = (prop: {name: string, value: string, minLength:number, maxLength: number}) => {
    if (!prop.value.trim()) {
        return `${prop.name} is required.`;
    }
    if (prop.value.length < prop.minLength || prop.value.length < prop.maxLength) {
      return `${prop.name} must be at least 3 characters.`;
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

 export const getYouTubeEmbedUrl = (url: string): string | null => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/
    );
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  export const getLanguageType = [{
    id: 0, name: 'English'},
    {id: 1, name: 'தமிழ்'}
  ]

  export interface YouTubeCategoryType {
    id: number;
    category: number; // 0 or 1
    title: string;
  }

  export const toInputDateFormat = (dateStr: string): string => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return ''; // invalid date
    return date.toISOString().split('T')[0]; // "YYYY-MM-DD"
  };
