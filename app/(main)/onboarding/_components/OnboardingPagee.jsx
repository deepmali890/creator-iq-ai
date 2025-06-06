'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import useFetch from '@/hooks/use-fatch'
import { updateUser } from '@/action/user'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { onboardingSchema } from '@/lib/schema'

const OnboardingPage = ({ industries }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const router = useRouter()

  const { data: updateResult, fn: updateUserFn, loading: updateLoading, } = useFetch(updateUser)

  const { register, handleSubmit, formState: { errors }, setValue, watch, } = useForm({ resolver: zodResolver(onboardingSchema), })

  const watchIndustry = watch('industry')

  const onSubmit = async (value) => {
    try {
      const formettedIndustry = `${value.industry}-${value.subIndustry.toLowerCase().replace(/ /g, '-')}`
      await updateUserFn({
        ...value,
        industry: formettedIndustry,
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      toast.success('Profile Completed Successfully')
      router.push('/')
      router.refresh()
    }

  }, [updateResult, updateLoading])
  return (
    <>
      <div className="grid-background"></div>
      <div className="flex justify-center items-center">
        <Card className="w-full max-w-lg mt-10 mx-2 bg-white/30 backdrop-blur-3xl">
          <CardHeader>
            <CardTitle className="gradient-title text-4xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Select your industry to get personalized career insights and recommendations.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Industry Select */}
              <div className="w-full space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select
                  onValueChange={(value) => {
                    setValue('industry', value)
                    setSelectedIndustry(
                      (industries.find((ind) => ind.id === value))
                    );  
                    setValue('subIndustry', "")
                  }}
                >
                  <SelectTrigger id="industry" className="w-full">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {industries.map((ind) => (
                      <SelectItem key={ind.id} value={ind.id}>
                        {ind.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.industry && <p className="text-red-500 text-sm mt-2">{errors.industry.message}</p>}
              </div>

              {/* Sub Industry */}
              {watchIndustry && (
                <div className="w-full space-y-2 mb-6">
                  <Label htmlFor="subIndustry">Specialization</Label>
                  <Select
                    onValueChange={(value) => setValue('subIndustry', value)}
                    value={watch('subIndustry') || ''}
                    disabled={!selectedIndustry}
                  >
                    <SelectTrigger id="subIndustry" className="w-full">
                      <SelectValue placeholder="Select a sub-industry" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      {selectedIndustry?.subIndustries?.map((subInd) => (
                        <SelectItem key={subInd.trim()} value={subInd.trim()}>
                          {subInd.trim().replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.subIndustry && <p className="text-red-500 text-sm mt-2">{errors.subIndustry.message}</p>}
                </div>
              )}

              {/* Experience */}
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  type="number"
                  min="0"
                  max="50"
                  placeholder="Enter years of experience"
                  className="w-full"
                  {...register('experience')}
                />
                {errors.experience && (
                  <p className="text-red-500 text-sm mt-2">{errors.experience.message}</p>
                )}
              </div>

              {/* Skills */}
              <div className="space-y-2 my-2">
                <Label htmlFor="skills">Skills</Label>
                <Input
                  id="skills"
                  placeholder="e.g., Python, JavaScript, React, Node.js"
                  className="w-full"
                  {...register('skills')}
                />
                <p className="text-sm text-muted-foreground">Separate multiple skills with commas</p>
                {errors.skills && (
                  <p className="text-red-500 text-sm mt-2">{errors.skills.message}</p>
                )}
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your professional background"
                  className="w-full h-32"
                  {...register('bio')}
                />
                {errors.bio && (
                  <p className="text-red-500 text-sm mt-2">{errors.bio.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full cursor-pointer mt-4" disabled={updateLoading}>
                {
                  updateLoading ? (
                    <>
                      <Loader2 className=' mr-r h-4 w-4 animate-spin' />
                      Updating...
                    </>
                  ) : (

                    "Complete Profile"
                  )
                }
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default OnboardingPage
