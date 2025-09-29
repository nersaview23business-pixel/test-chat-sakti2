// Lokasi: src/app/login/page.tsx
"use client";

import Logo from '../components/Logo';
import Link from 'next/link';

export default function LoginPage() {

  return (
    <div className="flex min-h-screen bg-white">
      {/* Kolom Kiri - Form */}
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          
          <div className="mb-10">
            <Logo />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Log in to access your dashboard.
          </p>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <button
                  type="button"
                  className="flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg className="h-5 w-5 mr-3" viewBox="0 0 48 48">
                     <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.082,5.571l6.19,5.238C44.434,36.337,48,30.651,48,24C48,22.659,47.862,21.35,47.611,20.083z"></path>
                  </svg>
                  Login with Google
                </button>
                
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
                  <div className="relative flex justify-center text-sm"><span className="bg-white px-2 text-gray-500">OR</span></div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"/>
                </div>

                <div>
                  <label htmlFor="password"  className="block text-sm font-medium text-gray-700">Password</label>
                  <input id="password" name="password" type="password" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"/>
                </div>
                
                <div>
                  <button type="submit" className="flex w-full justify-center rounded-lg bg-black py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800">
                    Continue
                  </button>
                </div>
              </form>
              <p className="mt-8 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="font-medium text-black hover:underline">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Kolom Kanan - Animasi */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full object-cover dotted-bg flex items-center justify-center p-12">
            <div className="bg-white p-8 rounded-2xl custom-shadow border w-full max-w-md flex flex-col space-y-4">
                <div className="typing-animation text-lg text-gray-800">I want to analyze my data...</div>
                <div className="animated-gradient-line rounded-full"></div>
            </div>
        </div>
      </div>
    </div>
  );
}