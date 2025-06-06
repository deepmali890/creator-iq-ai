// OnBoardingPage.js (server component, async, no 'use client')
import industries from '@/data/industries'
import { redirect } from 'next/navigation'
import OnboardingPage from './_components/OnboardingPagee'
import { getUserOnboardingStatus } from '@/action/user'

const OnBoardingPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus()

  if (isOnboarded) {
    redirect('/dashboard')
  }

  return (
    <main>
      <OnboardingPage industries={industries} />
    </main>
  )
}

export default OnBoardingPage
