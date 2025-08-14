// app/(auth)/login/page.jsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const router = useRouter();

    const handleSubmit = (e) => {
        
    };

    return (
        <div className='flex w-full min-h-screen font-sans'>
    
            

            <div className='w-full min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8'>

                <div className='w-full  2xl:w-2/5 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg bg-white'>
                    <div className='flex items-center justify-center mb-8 gap-3 sm:gap-4'>
                        <Image src="/logo-estado.png" alt="Logo do Estado de Sergipe" width={50} height={50} className='w-12 h-12 sm:w-16 sm:h-16' />
                        
                    </div>


                    <h3 className=' text-2xl font-bold text-gray-700 text-center'>Intranet SEMDE</h3>
                    <h2 className='text-xl  text-gray-700 mb-8 text-center'>Secretaria de Desenvolvimento Econômico e Inovação</h2>

                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div className='relative'>
                            <Mail className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
                            <label htmlFor="email" className=''>E-mail</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className='w-full pl-12 pr-4 py-3 border items-center border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-base md:text-lg bg-white'
                                required
                            />
                        </div>
                        <div className='relative'>
                            <Lock className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
                            <label htmlFor="password" className='sr-only'>Digite sua senha</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                placeholder='Digite sua senha'
                                className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200  text-base md:text-lg bg-white'
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className='w-full cursor-pointer bg-blue-600 text-white md:py-3.5 py-3 rounded-lg font-semibold md:text-lg text-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md hover:shadow-lg'
                        >
                            Entrar
                        </button>

                        <div className='text-center text-base md:mt-5'>
                            <a href="#" className='text-blue-600 hover:underline font-medium'>Esqueceu sua senha?</a>
                        </div>

                        <div className='text-center text-base text-gray-600 md:mt-8'>
                            Não tem uma conta?{' '}
                            <a href="/cadastro" className='text-blue-600 hover:underline font-medium  underline '>Crie sua conta</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;