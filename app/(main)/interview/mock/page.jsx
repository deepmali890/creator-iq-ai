import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Quiz from '../_components/Quiz'

const MockInterviewPage = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <div className='flex flex-col space-y-2 mx-2'>
        <Link href={'/interview'}>
        <Button className="gap-2 pl-0 cursor-pointer">
          <ArrowLeft className='h-4 w-4'/>
          Back To Interview Preparation
        </Button>
        </Link>

        <div>
          <h1 className='text-6xl font-extrabold'>Mock Interview</h1>
          <p className='text-muted-foreground text-2xl'>Test Your Knowledge with industry-specific questions</p>
        </div>
      </div>

      <Quiz/>
    </div>
  )
}

export default MockInterviewPage
