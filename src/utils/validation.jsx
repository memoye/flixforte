import { BsXCircleFill } from 'react-icons/bs'
import * as Yup from 'yup'

export const validationSchema = Yup.object({
    username: Yup.string().required('Enter your username.'),
    password: Yup.string().required('Enter your password.')
        .min(4, 'Password can\'t be less than 4 characters.')
})

export function ErrorWrapper({ children }) {
    return (
        <span className='flex items-center gap-1 xl:text-xl'>
            <BsXCircleFill />
            { children }
        </span>
    )
}
