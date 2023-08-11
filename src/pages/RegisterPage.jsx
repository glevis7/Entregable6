import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import './styles/RegisterPage.css'

const RegisterPage = () => {

    const { register, reset, handleSubmit } = useForm()
    const { createUser } = useAuth()
    const navigate = useNavigate()

    const submit = data => {
        createUser (data, navigate)
        reset({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
        })
    }

    return (
        <form className="form__reg" onSubmit={handleSubmit(submit)}>
            <div>
                <label className="form__label__fn" htmlFor="firstname">First Name</label>
                <input className="form__input__fn" {...register('firstName')} type="text" id="firstname" />
            </div>
            <div>
                <label className="form__label__ln" htmlFor="lastname">Last Name</label>
                <input className="form__input__ln" {...register('lastName')} type="text" id="lastname" />
            </div>
            <div>
                <label className="form__label__em1" htmlFor="email">Email</label>
                <input className="form__label__em2" {...register('email')} type="email" id="email" />
            </div>
            <div>
                <label className="form__label__ps1" htmlFor="password">Password</label>
                <input className="form__label__ps2" {...register('password')} type="password" id="password" />
            </div>
            <div>
                <label className="form__label__ph1" htmlFor="phone">Phone</label>
                <input className="form__label__ph2" {...register('phone')} type="text" id="phone" />
            </div>

            <div className="form__check__reg">
                <input className="box__reg" type="checkbox" name="" id="" />
                <span>Remind me</span>
            </div>
            
            <button className="btn__reg">Sign up</button>

            <h4>Already have an account? <Link to={'/login'} className="log_in">Log in</Link> </h4>
        </form>
    )
}

export default RegisterPage