import * as yup from 'yup';

const today = new Date();
const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
export const ContactUsFormSchema = yup.object({
    username: yup.string().required("User name is required").min(3, 'At least 3 characters'),
    email: yup
        .string()
        .required('Email address is required.')
        .email('Invalid Email address.'),
    subject: yup.string().required('Title is required').min(10, 'At least 10 characters'),
    message: yup.string().required('Description is required').min(10, 'At least 10 characters'),
    phone: yup
        .string()
        .required('Phone number is required.')
        .matches(
            /^(\+?\d{1,4}?[-.\s]?)?(\(?\d{3}\)?|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
            'Invalid phone number'
        ),
    occupation: yup.string().required('Occupation is required.'),
    dob: yup.string()
        .required('Date of birth is required')
        // .transform((value) => (value === '' ? null : value))
        .test('valid-date', 'Invalid date', (value) => {
            const date = new Date(value!);
            return !isNaN(date.getTime());
        })
        .test('min-age', 'You must be at least 18 years old', (value) => {
            if (!value) return false;
            const date = new Date(value);
            return date <= eighteenYearsAgo;
        })
})
export const TrainingRegisterFormSchema = yup.object().shape({
    user_name: yup.string().required('Name is required'),
    user_occupation: yup.string().required('Occupation is required'),
    user_age: yup
      .number()
      .typeError('Age must be a number')
      .positive()
      .integer()
      .required('Age is required'),
    user_phone: yup
      .string()
      .matches(/^\+?[0-9]{10,15}$/, 'Enter a valid phone number')
      .required('Phone number is required'),
    user_address: yup.string().required('Address is required'),
    user_city: yup.string().required('City is required'),
    user_state: yup.string().required('State is required'),
    user_country: yup.string().required('Country is required'),
    user_email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    requirements: yup.string().required('Please enter your requirements'),
    training_id: yup
      .number()
      .typeError('Training ID must be a number')
      .required('Training ID is required'),
  });
  export const JobsRegisterFormSchema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
    phone: yup
    .string()
    .matches(/^\+?[0-9]{10,15}$/, 'Enter a valid phone number')
    .required('Phone number is required'),
    job_id: yup
    .number()
    .typeError('Job ID must be a number')
    .required('Job ID is required'),
    occupation: yup.string().required('Occupation is required'),
    age: yup
      .number()
      .typeError('Age must be a number')
      .positive()
      .integer()
      .required('Age is required')
      .test('min-age', 'You must be at least 18 years old', (value) => {
        if (!value) return false;
        return +value > 17;
    }),
    address: yup.string(),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    country: yup.string().required('Country is required'),
    min_salary: yup.number().min(0).required("Minimum salary is required"),
    max_salary: yup
      .number()
      .min(yup.ref("min_salary"), "Maximum salary must be greater than minimum")
      .required("Maximum salary is required"),
    experience: yup.number().required("Experience is required"),
    skills: yup.string().required("Skills are required"),
  });

export const AdminGalleryAddSchema = yup.object({
    title: yup
        .string()
        .required("Title is required")
        .transform(value => (value === '' ? null : value))
        .min(3, 'At least 3 characters'),

    description: yup.string()
        .nullable()
        .optional()
        .transform(value => (value === '' ? null : value)),

    photos: yup.array()
        .of(
            yup.object({
                file: yup
                    .mixed()
                    .optional()
                    .test('is-file', 'Photo must be a valid file', (value) => {
                        return !value || value instanceof File;
                    }),
                url: yup.string().required('URL is required'),
            })
        )
        .min(1, 'At least one photo is required')
        .required('At least one photo is required')
})

export const LoginFormSchema = yup.object().shape({
    email: yup
        .string()
        .required('Invalid Email address.')
        .email('Email is required.'),
    password: yup
        .string()
        .required('Password address.')
        .min(6, 'Password must be min 8 characters long.')
        .matches(/[a-z]/, 'Password must include at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must include at least one uppercase letter')
        .matches(/\d/, 'Password must include at least one number')
        .matches(/[@$!%*?&#^()_\-+=]/, 'Password must include at least one special character')
})
// Regex to match YouTube URLs
const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
export const AdminResourceAddSchema = yup.object().shape({
    // category: yup.string().required('Category is required'),
    classification: yup.string().required('Classification is required'),
    ctype: yup.string().required('Type is required'),
    title: yup.string().required('Title is required'),
    url: yup.string()
        .required('YouTube URL is required')
        .matches(youtubeUrlRegex, 'Enter a valid YouTube URL'),
    description: yup.string().required('Description is required'),
    language: yup.string().required('Language is required'),
})

export const AdminJobAddSchema = yup.object().shape({
    title: yup.string().required('Job title is required'),
    total_vacancy: yup.number().typeError('Total vacancy must be a number')
        .transform((_value, originalValue) => {
            return originalValue === '' ? undefined : Number(originalValue);
        })
        .moreThan(0, 'Total vacancy must be greater than 0')
        .required('Total Vacancy is required'),
    city: yup.string().nullable().optional(),
    state: yup.string().nullable().optional(),
    country: yup.string().nullable().optional(),
    company: yup.string().nullable().optional(),
    description: yup.string().required('Description is required'),
    type: yup.string().required('Category is required'),
    salary:  yup.number()
    .typeError('Salary must be a number')
    .min(1, 'Salary must be some number')
    .nullable()
})

export const RegisterUserSchema = yup.object().shape({
    email: yup
        .string()
        .required('Invalid Email address.')
        .email('Email is required.'),
    password: yup
        .string()
        .required('Password is required.')
        .min(6, 'Password must be min 8 characters long.')
        .matches(/[a-z]/, 'Password must include at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must include at least one uppercase letter')
        .matches(/\d/, 'Password must include at least one number')
        .matches(/[@$!%*?&#^()_\-+=]/, 'Password must include at least one special character'),
    confirmPassword: yup
        .string()
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    username: yup
        .string()
        .required('Username is required.')
        .min(6, 'Username must be min 6 characters long.'),
    phone: yup
        .string()
        .required('Phone number is required.')
        .matches(
            /^(\+?\d{1,4}?[-.\s]?)?(\(?\d{3}\)?|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
            'Invalid phone number'
        )
})

export const AdminTrainingAddSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    startDate: yup.string().required('Start date is required'),
    type: yup.string().required('Type is required'),
    endDate: yup
        .string()
        .required('End date is required')
        .test('is-after-start', 'End date must be after start date', function (value) {
            const { startDate } = this.parent;
            return !value || !startDate || new Date(value) >= new Date(startDate);
        }),
    classification: yup.string().oneOf(['0', '1']).required(),
    totalHours: yup.number().positive().required(),
    totalPrice: yup.number().positive().required(),
    city: yup.string().when('classification', {
        is: "0", //online
        then: schema => schema.required('City is required'),
        otherwise: schema => schema.notRequired(),
      }),
    state: yup.string().when('classification', {
        is: "0", //online
        then: schema => schema.required('City is required'),
        otherwise: schema => schema.notRequired(),
      }),
    country: yup.string().when('classification', {
        is: "0", //online
        then: schema => schema.required('City is required'),
        otherwise: schema => schema.notRequired(),
      }),
    tableOfContents: yup.string().required(),
    location: yup.string().when('classification', {
        is: "0", //online
        then: schema => schema.required('Location is required'),
        otherwise: schema => schema.notRequired(),
      }),
});