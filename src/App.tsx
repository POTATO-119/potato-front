import { useState } from 'react'
import WelcomePage from '@/pages/WelcomePage'
import LoginPage from '@/pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'
import ForgotPasswordPage from '@/pages/ForgotPasswordPage'
import VerifyCodePage from '@/pages/VerifyCodePage'
import ResetPasswordPage from '@/pages/ResetPasswordPage'
import HomePage from '@/pages/HomePage'

type Page = 'welcome' | 'login' | 'signup' | 'forgotPassword' | 'verifyCode' | 'resetPassword' | 'home'

export default function App() {
  const [page, setPage] = useState<Page>('welcome')

  if (page === 'home') return <HomePage />

  if (page === 'resetPassword')
    return <ResetPasswordPage onBack={() => setPage('verifyCode')} onSave={() => setPage('login')} />

  if (page === 'verifyCode')
    return <VerifyCodePage onBack={() => setPage('forgotPassword')} onVerify={() => setPage('resetPassword')} />

  if (page === 'forgotPassword')
    return <ForgotPasswordPage onBack={() => setPage('login')} onConfirm={() => setPage('verifyCode')} />

  if (page === 'login')
    return (
      <LoginPage
        onBack={() => setPage('welcome')}
        onLogin={() => setPage('home')}
        onSignup={() => setPage('signup')}
        onForgotPassword={() => setPage('forgotPassword')}
      />
    )

  if (page === 'signup')
    return (
      <SignUpPage
        onBack={() => setPage('welcome')}
        onLogin={() => setPage('login')}
      />
    )

  return (
    <WelcomePage
      onLogin={() => setPage('login')}
      onSignup={() => setPage('signup')}
    />
  )
}
