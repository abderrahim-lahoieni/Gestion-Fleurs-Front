import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import '../PagesCss/Sign.css'
import axios from "axios";
function SignUp() {
    const[users,setUsers]=useState({name:'',email:''});
    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/users')
            .then(res=>{
                console.log(res.data)
                setUsers(res.data[0])
            })
            .catch(err=>console.log(err))
    }, []);
    const schema = yup.object({
       name: yup.string().required(),
        familyName: yup.string().required(),
        username: yup.string().test('len', 'Le nom est plus court', (val) => val.length >= 5),
        email: yup.string().email("L'adresse email est requise").matches(/^[A-Za-z0-9._%+-]+@gmail\.com$/, "L'adresse e-mail doit être un compte Gmail"),
        password: yup.string().test('len', 'Le mot de passe doit comporter au moins 6 caractères', (val) => val.length >= 6),
        c_password: yup.string().oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre'),
    });
    const{formState:{errors,isSubmitted,isValid,submitCount},register,handleSubmit}=useForm({
        resolver: yupResolver(schema),
        defaultValues:{
            name:'lahoieni',
            familyName:'abderrahim',
            username:'LhAbdderrahim',
            phoneNumber:'0635230623',
            email:'lahoieniabderrahim@gmail.com',
            password:'abd200102',
            c_password:'abd200102'
        }
    });
    const OnSubmit=(data)=>{
        console.log("data :",data);
    }
    return (
        <>
        <div>
            {submitCount>3 ?(
                <div className="flexitems-centerjustify-centerh-screen">
                <strong className="text-3xl text-red-500" >You are Blocked!!!!!please Contact the administrator</strong>
                </div>
                ) :
                (
                <section>
                <form  onSubmit={handleSubmit(OnSubmit)} className="flex form-container">
                    <div className="w-1/2    before:animate-pulse    " ></div>
                    <div className="w-1/2 " >
                        <div id="myDIV">
                            <div className="   w-[40vw] h-[40vh] px-5 sm:px-5 flex items-center   float-left" >
                                <div className="w-full sm:w-1/2 lg:2/3 px-3 bg-opacity-20 bg-clip-padding   text-white z-50 py-4 " style={{ border: '1px solid #EBA9AA'}}>
                                    <div className="w-full font-bold flex justify-center text-[#854D4E] text-xl mb:2 md:mb-5" >
                                        Sign Up
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-[#EBA9AA] text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Name"
                                            value={users.name.firstname}
                                            {...register('name')}
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-[#EBA9AA] text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Family name"
                                            value={users.name.lastname}
                                            {...register('familyName')}
                                            required
                                        />
                                    </div>
                                        <div className="mb-6">
                                            <input
                                                type="email"
                                                className="bg-gray-50 border border-[#EBA9AA] text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="YourEmail@gmail.com"
                                                // value={users.email}
                                                {...register('email')}
                                                required
                                            />
                                            {errors.email && <h1 className="font-bold" style={{color:'red'}}>{errors.email.message}</h1>}

                                        </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-[#EBA9AA] text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="06XXXXXXXX"
                                            value={users.phone}
                                            {...register('phoneNumber')}
                                            required
                                        />
                                        {errors.phoneNumber &&   <h1 className="font-bold" style={{color:'red'}}>{errors.phoneNumber.message}</h1>}
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="texte"
                                            className="bg-gray-50 border border-[#EBA9AA] text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Username"
                                            value={users.username}
                                            {...register('username')}
                                            required
                                        />
                                        {errors.username && <h1 className="font-bold" style={{color:'red'}}> {errors.username.message} </h1>}
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            className="bg-gray-50 border border-[#EBA9AA] text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Password"
                                            value={users.password}
                                            {...register('password')}
                                            required
                                        />
                                        {errors.password && <h1 className="font-bold" style={{color:'red'}}>{errors.password.message} </h1>}
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            className="bg-gray-50 border border-[#EBA9AA] text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Confirm Password"
                                            value={users.password}
                                            {...register('c_password')}
                                            required
                                        />
                                        {errors.c_password && <h1 className="font-bold" style={{color:'red'}}>{errors.c_password.message} </h1>}
                                    </div>
                                    <button className="mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl bg-rose-300 py-2 rounded-md">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

        </section>
                )}
            </div>
        </>

    );
}

export default SignUp;