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

export const AdminGalleryAddSchema = yup.object({
    title: yup
        .string()
        .required("Title is required")
        .nullable()
        .transform(value => (value === '' ? null : value))
        .notRequired()
        .min(3, 'At least 3 characters'),

    description: yup.string()
        .required("Title is required")
        .nullable()
        .transform(value => (value === '' ? null : value))
        .notRequired()
        .min(10, 'At least 10 characters'),

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
})

export const AdminJobAddSchema = yup.object().shape({
    title: yup.string().required('Job title is required'),
    total_vacancy: yup.number().typeError('Total vacancy must be a number')
        .transform((_value, originalValue) => {
            return originalValue === '' ? undefined : Number(originalValue);
        })
        .moreThan(0, 'Total vacancy must be greater than 0')
        .required('Total Vacancy is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    country: yup.string().required('Country is required'),
    company: yup.string().required('Company is required'),
    description: yup.string().required('Description is required'),
    type: yup.string().required('Category is required'),
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
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    tableOfContents: yup.string().required(),
    location: yup.string().required(),
});