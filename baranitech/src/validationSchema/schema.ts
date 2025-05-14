import * as yup from 'yup';

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
    classification:  yup.string().required('Classification is required'),
    ctype:  yup.string().required('Type is required'),
    title: yup.string().required('Title is required'),
    url: yup.string()
        .required('YouTube URL is required')
        .matches(youtubeUrlRegex, 'Enter a valid YouTube URL'),
    description: yup.string().required('Description is required'),
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