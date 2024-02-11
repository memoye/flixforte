import { useState } from "react";
import { TbAlertCircle, TbArrowBack, TbEye, TbEyeClosed } from "react-icons/tb";
import { google, tmdbLong, tmdbSquare } from "../assets";
import { Logo, TextInput } from "../components";
import { Navigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { handleShowPassword, noInternet, validate } from "../utils/misc_utils";
import { HelpfulError } from "../components/others/Misc";
import { ErrorWrapper, validationSchema } from "../utils/validation";
import { useMutation } from "@tanstack/react-query";
import { tmdbLogin } from "../services/tmdb_identity";
import { useDispatch, useSelector } from "react-redux";

export const SignInPage = () => {
  const { login_error, logged_in } = useSelector((state) => state.user);

  if (logged_in) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="hero w-[90vw] h-[100svh] max-w-md mx-auto">
        <div className="flex justify-start flex-col w-full border-opacity-50">
          <div className="capitalize font-black text-3xl text-center mb-8 flex justify-between">
            <TbArrowBack
              size={24}
              onClick={() => navigate(-1)}
              className="hover:text-red-500"
            />
            <Logo className={"w-fit"} text={false} />
          </div>
          <div className="capitalize font-black text-3xl text-center mb-2">
            sign in
          </div>

          <div className="italic text-center mb-4">
            Enter&nbsp;
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              className="link link-hover text-info"
            >
              TMDB
            </a>
            &nbsp;credentials
          </div>

          <div>
            {login_error ? (
              <div className="alert alert-error items-start">
                <TbAlertCircle />
                <HelpfulError string={login_error} />
              </div>
            ) : (
              ""
            )}
            <SignInForm />
          </div>

          <div className="divider">OR</div>

          <div className="grid h-20 card bg-base-100 rounded-box place-items-center">
            <button
              // value={}
              className="border btn w-full btn-neutral"
            >
              <img src={google} className="h-2/4" alt="google sign in" />
              sign in with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={async (values) => tmdbLogin(values, dispatch)}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className="card-body p-0">
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-lg">Username</span>
            </label>
            <Field
              id="username"
              name="username"
              type="text"
              placeholder="username"
              className={`input input-bordered`}
            />
            <label className="label p-0 pt-1">
              <small className="label-text-alt text-error flex items-center min-h-[1rem] self-start">
                <ErrorMessage component={ErrorWrapper} name={"username"} />
              </small>
            </label>
          </div>

          <div className="form-control mt-1">
            <label className="label font-semibold">
              <span className="label-text text-lg">Password</span>
            </label>
            <div className="w-full relative">
              <Field
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className={`input input-bordered w-full bg-transparent pr-10 
                                    placeholder:font-sans placeholder:tracking-normal xl:text-2xl font-mono tracking-widest`}
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              />
              <label className="swap w-fit absolute top-1/2 -translate-y-1/2 right-4">
                <input
                  type="checkbox"
                  id="eyeToggle"
                  onChange={() => setShowPassword(!showPassword)}
                  defaultChecked={showPassword}
                />
                <TbEye className="swap-on" />
                <TbEyeClosed className="swap-off" />
              </label>
            </div>
            <label className="label p-0 pt-1">
              <small className="label-text-alt text-error flex items-center min-h-[1rem] self-start">
                <ErrorMessage component={ErrorWrapper} name={"password"} />
              </small>
            </label>
          </div>

          <div className="form-control mt-1 mb-4">
            <button
              type="submit"
              className={`btn btn-secondary text-lg`}
              disabled={
                formik.isSubmitting ||
                formik.errors.username ||
                formik.values.password.length < 4
              }
            >
              {formik.isSubmitting ? (
                <span className="loading loading-bars loading-md" />
              ) : (
                <div className="flex gap-2 items-center justify-end w-full relative ">
                  <div className=" absolute left-1/2 -translate-x-1/2">
                    login
                  </div>
                  <div
                    className={`w-fit ${
                      formik.errors.username ||
                      formik.values.password.length < 4
                        ? "opacity-10"
                        : "opacity-90"
                    } scale-75`}
                  >
                    <p className="label-text-alt min-w-max italic lowercase">
                      powered by
                    </p>
                    <img
                      src={tmdbSquare}
                      className="h-3/5"
                      alt="Sign in with TMDb account"
                    />
                  </div>
                </div>
              )}
            </button>
            <label className="label justify-between">
              <a
                href="https://www.themoviedb.org/reset-password"
                target="_blank"
                className="link link-hover"
              >
                Forgot password?
              </a>
              <a
                href="https://www.themoviedb.org/signup"
                target="_blank"
                className="link link-hover"
              >
                Create TMDB account
              </a>
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
}
