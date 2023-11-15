import { Suspense, useEffect, useState } from 'react'
import { TbAlertCircle, TbArrowBack, TbBrandGoogle, TbEye, TbEyeClosed } from 'react-icons/tb'
import { google, tmdbLong, tmdbSquare } from '../assets'
import { Logo, TextInput } from '../components'
import { Await, Form, defer, redirect, useActionData, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { handleShowPassword, noInternet, validate } from '../utils/misc_utils'
import { request as axiosRequest } from '../utils/axios-utils'
import { getTMDbRequestToken, validateWithLogin } from '../utils/auth'
import axios from 'axios'
import { HelpfulError } from '../components/others/Misc'
import localforage from 'localforage'


export const SignInPage = () => {
    const navigate = useNavigate()

    const data = useActionData()

    useEffect(() => { data && console.log(data, 'from router') }, [data])

    return (
        <>
            <div className="hero w-[90vw] h-[100svh] max-w-md mx-auto">
                <div className="flex justify-start flex-col w-full border-opacity-50">
                    <div className='capitalize font-black text-3xl text-center mb-8 flex justify-between'>
                        <TbArrowBack size={ 24 } onClick={ () => navigate(-1) } className='hover:text-red-500' />
                        <Logo className={ 'w-fit' } text={ false } />
                    </div>
                    <div className='capitalize font-black text-3xl text-center mb-2'>
                        sign in
                    </div>

                    <div className='italic text-center mb-4'>
                        Enter&nbsp;<a href='https://www.themoviedb.org/' target='_blank' className='link link-hover text-info'>TMDB</a>&nbsp;credentials
                    </div>

                    <div>
                        {
                            data?.response && data?.response?.status !== 200 ?
                                <div className='alert alert-error items-start'>
                                    <TbAlertCircle />
                                    <HelpfulError string={ data?.response?.data?.status_message } />
                                </div> : ''
                        }
                        <SignInForm data={ data } />
                    </div>

                    <div className="divider">OR</div>

                    <div className="grid h-20 card bg-base-100 rounded-box place-items-center">
                        <button
                            // value={}
                            className='border btn w-full btn-neutral'>
                            <img src={ google } className='h-2/4' alt="google sign in" />
                            sign in with
                            google
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export function SignInForm({ data }) {

    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
    })

    useEffect(() => {
        if (data) setIsLoading(false)
        else {
            setIsLoading(false)
        }
    }, [data])

    // const isError = false

    return (
        <div>
            <Form

                method='post'
                className="card-body p-0"
            >
                <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text text-lg">Username</span>
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="username"
                        placeholder="username"
                        className={ `input input-bordered ${formik.errors.username ? 'outline outline-error' : ''}` }
                        onChange={ formik.handleChange }
                        value={ formik.values.username }
                        required
                    />
                    <label className="label">
                        <p className="label-text-alt text-error">{ formik.errors.username }</p>
                    </label>
                </div>

                <div className="form-control mt-1">
                    <label className="label font-semibold">
                        <span className="label-text text-lg">Password</span>
                    </label>
                    <div className='w-full relative'>
                        <input
                            id="password"
                            name="password"
                            type={ showPassword ? 'text' : 'password' }
                            placeholder="password"
                            className={ `input input-bordered ${formik.errors.password ? 'outline outline-error' : ''} w-full` }
                            onChange={ formik.handleChange }
                            value={ formik.values.password }
                            required
                        />
                        <label className="swap w-fit absolute top-1/2 -translate-y-1/2 right-4">
                            <input type="checkbox" id='eyeToggle' defaultChecked={ showPassword } />
                            <TbEye className='swap-on'
                                onClick={ () => handleShowPassword(setShowPassword) }
                            />
                            <TbEyeClosed className='swap-off' onClick={ () => setShowPassword(false) } />
                        </label>
                    </div>
                    <label className="label">
                        <p className="label-text-alt text-error min-h-6">{ formik.errors.password }</p>
                    </label>


                </div>

                <div className="form-control mt-1 mb-4">
                    <button
                        type='submit'
                        onClick={ () => setTimeout(() => setIsLoading(true)) }
                        className={ `btn btn-secondary text-lg` }
                        disabled={
                            isLoading === true ||
                            formik.errors.username ||
                            formik.values.password.length < 4
                        }
                    >
                        {
                            isLoading ?
                                <span className="loading loading-bars loading-md" />
                                : <div className='flex gap-2 items-center justify-end w-full relative '>
                                    <div className=' absolute left-1/2 -translate-x-1/2'>login</div>
                                    <div className={ `w-fit ${formik.errors.username || formik.values.password.length < 4 ? 'opacity-10' : 'opacity-90'} scale-75` }>
                                        <p className='label-text-alt min-w-max italic lowercase'>powered by</p>
                                        <img src={ tmdbSquare } className='h-3/5' alt="Sign in with TMDb account" />
                                    </div>
                                </div>
                        }
                    </button>
                    <label className="label justify-between">
                        <a href="https://www.themoviedb.org/reset-password" target='_blank' className="link link-hover">Forgot password?</a>
                        <a href="https://www.themoviedb.org/signup" target='_blank' className="link link-hover">Create TMDB account</a>
                    </label>
                </div>
            </Form>
        </div>
    )
}

export async function action({ request }) {
    const formData = await request.formData()
    const login = Object.fromEntries(formData)

    const online = navigator.onLine

    if (!online) return noInternet

    await validateWithLogin(login)
    return redirect('/')
}
