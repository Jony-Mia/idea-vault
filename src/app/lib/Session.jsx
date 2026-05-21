"use client"
import {  useSession } from '@/lib/auth-client';
// import React from 'react';

const Session =  () => {
    const {data,user} =   useSession()
    console.log(data);
    
   return data;
};

export default Session;
