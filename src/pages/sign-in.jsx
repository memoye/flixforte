import { Fragment } from 'react'
import { tmdbLong } from '../assets'
import { Logo } from '../components'

export const SignInPage = () => {
    return (

        <div className='mx-auto'>
            <Logo className={ 'm-auto w-fit mb-4' } />
            <div className='grid gap-2 justify-center text-center'>
                <p className='text-xl italic'>Sign in with</p>
                <div className='w-full'>
                    <img className='w-3/4 mx-auto' src={ tmdbLong } alt="the movie database" />
                </div>
            </div>

            <form>
                <div className="join join-vertical space-y-2">
                    <input
                        className="input input-bordered w-full "
                        placeholder="Email"
                        type="text"
                        required
                    />
                    <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    <button className="btn join-item"> LOGIN</button>
                </div>
            </form>
        </div>
    )
}