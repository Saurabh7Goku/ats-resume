"use client"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import AuthButton from '@/components/AuthButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Target,
  Shield,
  TrendingUp,
  CheckCircle2,
  Star,
  Users,
  Clock,
  Award,
  FileText,
  Search,
  Brain,
  Zap,
  ArrowRight,
  Play,
  BarChart3,
  Briefcase,
  Eye
} from 'lucide-react';

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return null;
  }

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "ATS Compatibility Score",
      description: "Get an instant compatibility score showing how well your resume matches ATS requirements"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Keyword Optimization",
      description: "Identify missing keywords and optimize your resume for specific job descriptions"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Suggestions",
      description: "Receive AI-powered recommendations to improve your resume's performance"
    }
  ];

  const stats = [
    { number: "500K+", label: "Resumes Scanned", icon: <FileText className="w-5 h-5" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "30sec", label: "Avg Scan Time", icon: <Clock className="w-5 h-5" /> },
    { number: "4.9★", label: "User Rating", icon: <Star className="w-5 h-5" /> }
  ];

  const benefits = [
    { text: "Beat 98% of applicant tracking systems", icon: <Shield /> },
    { text: "Increase interview callbacks by 40%", icon: <TrendingUp /> },
    { text: "Professional formatting recommendations", icon: <FileText /> },
    { text: "Industry-specific keyword suggestions", icon: <Target /> },
    { text: "Real-time compatibility scoring", icon: <BarChart3 /> },
    { text: "Expert-level resume analysis", icon: <Award /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                #1 ATS Resume Scanner
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
                Beat Every
                <span className="text-blue-400"> ATS System</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Scan your resume in seconds and discover exactly what hiring managers and ATS systems are looking for.
                Get personalized recommendations to land more interviews.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <AuthButton />
                <button className="flex items-center justify-center px-6 py-4 border border-gray-700 rounded-xl text-gray-300 hover:bg-gray-800 transition-colors">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center text-sm text-gray-400">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-black"></div>
                  ))}
                </div>
                Trusted by 500,000+ job seekers
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Resume Analysis</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border transition-all duration-500 ${activeFeature === index
                        ? 'bg-blue-600/20 border-blue-500/50'
                        : 'bg-gray-800/50 border-gray-700'
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${activeFeature === index ? 'text-blue-400' : 'text-gray-400'
                          } transition-colors`}>
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{feature.title}</h4>
                          <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400">ATS Compatibility Score</span>
                    <span className="text-2xl font-bold text-green-400">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-blue-400">ResumeATS</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced AI technology analyzes your resume like real ATS systems do,
              giving you the edge you need to get noticed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="text-green-400 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-gray-200">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-400">Get your resume optimized in just 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Resume",
                description: "Upload your resume and paste the job description you're targeting",
                icon: <FileText className="w-8 h-8" />
              },
              {
                step: "02",
                title: "AI Analysis",
                description: "Our AI scans your resume against ATS requirements and job keywords",
                icon: <Brain className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Get Results",
                description: "Receive detailed feedback and actionable recommendations to improve",
                icon: <Award className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful job seekers who've optimized their resumes with ResumeATS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AuthButton />
            <button className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white rounded-xl hover:bg-white/20 transition-colors">
              <Eye className="w-5 h-5 mr-2" />
              View Sample Report
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">No credit card required • Free forever plan available</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ResumeATS</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 ResumeATS. All rights reserved. Built to help you succeed.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}