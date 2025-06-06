'use client';
import {
  Brain,
  Briefcase,
  LineChart,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import React from 'react'
import { format, formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Footer from '@/components/Common/Footer';

const DashboardView = ({ insights }) => {
  // Updated salary data with fresh tech roles and realistic ranges (in thousands)
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: (range.min / 1000).toFixed(1),
    median: (range.median / 1000).toFixed(1),
    max: (range.max / 1000).toFixed(1),
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'high':
        return 'bg-green-600';
      case 'medium':
        return 'bg-yellow-400';
      case 'low':
        return 'bg-red-600';
      default:
        return 'bg-gray-500';
    }
  }

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case 'positive':
        return {
          text: 'Market outlook looking strong 🚀',
          icon: TrendingUp,
          color: 'text-green-600',
        };
      case 'neutral':
        return {
          text: 'Market outlook is stable',
          icon: LineChart,
          color: 'text-yellow-400',
        };
      case 'negative':
        return {
          text: 'Market outlook slipping down 📉',
          icon: TrendingDown,
          color: 'text-red-600',
        };
      default:
        return {
          text: 'Market outlook unclear',
          icon: LineChart,
          color: 'text-gray-500',
        };
    }
  }

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const OutlookColor = getMarketOutlookInfo(insights.marketOutlook).color;
  const OutlookText = getMarketOutlookInfo(insights.marketOutlook).text;

  const lastUpdatedDate = format(new Date(insights.lastUpdated), 'dd-MM-yyyy');
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <>
      <div className='grid-background'></div>
      <div className=" space-y-6">
        <div className='flex justify-between items-center'>
          <Badge>Last Updated: {lastUpdatedDate}</Badge>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Card className="bg-white/20 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
              <OutlookIcon className={`h-4 w-4 ${OutlookColor}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{insights.marketOutlook}</div>
              <p className="text-xs text-muted-foreground">Next update {nextUpdateDistance}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Industry Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{insights.growthRate.toFixed(1)}%</div>
              <Progress value={insights.growthRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{insights.demandLevel}</div>
              <div className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(insights.demandLevel)}`} />
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                {insights.topSkills.map((skill) => (
                  <Badge key={skill} className="bg-white/40 text-black backdrop-blur-md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/20 backdrop-blur-md">
          <CardHeader>
            <CardTitle>Salary Ranges By Role</CardTitle>
            <CardDescription>
              Displaying minimum, maximum, and median salary (in thousands)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='h-[400px]'>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-md">
                          <p className="font-medium">{label}</p>
                          {payload.map((item) => (
                            <p key={item.name} className="text-sm">{item.name}: ${item.value}K</p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Bar dataKey="min" fill="#3b82f6" name="Min Salary (K)" />       {/* Blue */}
                  <Bar dataKey="median" fill="#2563eb" name="Median Salary (K)" />   {/* Darker Blue */}
                  <Bar dataKey="max" fill="#1e40af" name="Max Salary (K)" />         {/* Even Darker Blue */}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Card className="bg-white/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Key Industry Trends</CardTitle>
              <CardDescription>
                Current trends shaping the industry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {insights.keyTrends.map((trend, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                    <span>{trend}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Recommended Skills</CardTitle>
              <CardDescription>Skills to consider developing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {insights.recommendedSkills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default DashboardView
