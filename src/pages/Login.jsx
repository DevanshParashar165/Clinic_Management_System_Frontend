import React, { useState } from 'react'

function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,#f3e8ff,#fdf2f8_45%,#f5f3ff_100%)] px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
      <div className="blob blob-one" />
      <div className="blob blob-two" />
      <div className="blob blob-three" />

      <div className="relative mx-auto flex max-w-6xl flex-col overflow-hidden rounded-4xl border border-white/70 bg-white/30 p-2 shadow-[0_25px_90px_rgba(139,92,246,0.18)] backdrop-blur-2xl lg:flex-row">
        <div className="relative hidden flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br from-violet-600 via-fuchsia-500 to-purple-400 p-8 text-white lg:flex lg:w-[45%]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_38%)]" />
          <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-white/20" />
          <div className="relative z-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-100">
              Clinic 360
            </p>
            <h1 className="text-4xl font-bold leading-tight">
              A refined portal for calm, secure patient access.
            </h1>
          </div>

          <div className="relative z-10 rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-md">
            <p className="text-sm text-violet-50">
              Manage appointments, patient records, and secure sign-in with a luxurious experience built for care teams.
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-white/45 p-4 backdrop-blur-xl sm:p-6 lg:w-[55%] lg:p-10">
          <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
                {isLogin ? 'Login' : 'Register'}
              </p>
              <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">
                {isLogin ? 'Welcome back' : 'Create account'}
              </h2>
            </div>

            <div className="inline-flex rounded-full bg-violet-100 p-1 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isLogin ? 'bg-white text-violet-700 shadow' : 'text-violet-500'
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  !isLogin ? 'bg-white text-violet-700 shadow' : 'text-violet-500'
                }`}
              >
                Register
              </button>
            </div>
          </div>

          <div key={isLogin ? 'login' : 'register'} className="auth-fade">
            <form className="space-y-3 sm:space-y-4">
              {!isLogin && (
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <label className="rounded-2xl border border-violet-100 bg-white/70 px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
                    <span className="mb-1 block text-sm font-medium text-slate-600">First name</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Ava"
                        className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none"
                      />
                    </div>
                  </label>
                  <label className="rounded-2xl border border-violet-100 bg-white/70 px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
                    <span className="mb-1 block text-sm font-medium text-slate-600">Last name</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Grace"
                        className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none"
                      />
                    </div>
                  </label>
                </div>
              )}

              <label className="block rounded-2xl border border-violet-100 bg-white/70 px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
                <span className="mb-1 block text-sm font-medium text-slate-600">
                  {isLogin ? 'Username or email' : 'Username'}
                </span>
                <input
                  type="text"
                  placeholder={isLogin ? 'Enter your username or email' : 'Choose a username'}
                  className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none"
                />
              </label>

              {!isLogin && (
                <label className="block rounded-2xl border border-violet-100 bg-white/70 px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
                  <span className="mb-1 block text-sm font-medium text-slate-600">Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none"
                  />
                </label>
              )}

              <label className="block rounded-2xl border border-violet-100 bg-white/70 px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Password</span>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xs font-semibold text-violet-600 transition hover:text-violet-700"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-2xl bg-linear-to-r from-violet-600 via-fuchsia-500 to-purple-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            {isLogin ? 'New here?' : 'Already have an account?'}{' '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-violet-600 underline-offset-2 transition hover:underline"
            >
              {isLogin ? 'Create an account' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
