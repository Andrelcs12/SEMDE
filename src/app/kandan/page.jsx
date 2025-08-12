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
    
          <h1>oiiiii</h1>
        </div>
    );
};

export default LoginPage;