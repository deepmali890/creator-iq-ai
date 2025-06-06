import { redirect } from "next/navigation";
import React from 'react'
import DashboardView from './_components/dashboard-view';
import { getUserOnboardingStatus } from '@/action/user';
import { getIndustryInsights } from "@/action/dashboard";



const IndustryInsightPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  
  // If not onboarded, redirect to onboarding page
  // Skip this check if already on the onboarding page
  if (!isOnboarded) {
    redirect("/onboarding");
  }
  const insights = await getIndustryInsights()
  return (
    <div className='container mx-auto'>
      <DashboardView insights={insights}/>
    </div>
  )
}

export default IndustryInsightPage
