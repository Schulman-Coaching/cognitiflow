'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Sparkles,
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  FileText,
  Settings,
  Bell,
  LogOut,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Calendar,
  Users,
  BarChart3,
  ChevronRight
} from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Customer Service Chatbot',
    status: 'in_progress',
    progress: 65,
    nextMilestone: 'Beta Testing',
    dueDate: '2024-02-15',
    team: ['JR', 'ES']
  },
  {
    id: 2,
    name: 'Invoice Processing Automation',
    status: 'completed',
    progress: 100,
    nextMilestone: 'Completed',
    dueDate: '2024-01-30',
    team: ['JR']
  },
  {
    id: 3,
    name: 'Sales Forecasting Model',
    status: 'pending',
    progress: 0,
    nextMilestone: 'Discovery Phase',
    dueDate: '2024-03-01',
    team: ['ES']
  }
]

const recentActivity = [
  { type: 'update', message: 'Chatbot training completed', time: '2 hours ago', project: 'Customer Service Chatbot' },
  { type: 'comment', message: 'New feedback on invoice processing', time: '5 hours ago', project: 'Invoice Processing Automation' },
  { type: 'milestone', message: 'Discovery phase approved', time: '1 day ago', project: 'Sales Forecasting Model' },
  { type: 'update', message: 'Integration tests passing', time: '2 days ago', project: 'Customer Service Chatbot' }
]

const upcomingMeetings = [
  { title: 'Weekly Progress Review', date: 'Tomorrow, 10:00 AM', participants: 3 },
  { title: 'Chatbot Demo Session', date: 'Feb 12, 2:00 PM', participants: 5 },
  { title: 'Q1 Strategy Planning', date: 'Feb 15, 11:00 AM', participants: 4 }
]

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700'
      case 'in_progress': return 'bg-blue-100 text-blue-700'
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in_progress': return 'In Progress'
      case 'pending': return 'Pending'
      default: return status
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-slate-900 text-white">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-cyan-500 to-violet-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Cognitiflow</span>
          </Link>
        </div>

        <nav className="px-4 space-y-1">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { id: 'projects', icon: FolderOpen, label: 'Projects' },
            { id: 'messages', icon: MessageSquare, label: 'Messages' },
            { id: 'documents', icon: FileText, label: 'Documents' },
            { id: 'analytics', icon: BarChart3, label: 'Analytics' },
            { id: 'settings', icon: Settings, label: 'Settings' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === item.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-semibold">
              AC
            </div>
            <div className="flex-1">
              <div className="font-medium">Acme Corp</div>
              <div className="text-sm text-slate-400">Client Portal</div>
            </div>
            <button className="text-slate-400 hover:text-white">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, Acme Corp</h1>
            <p className="text-slate-600">Here&apos;s what&apos;s happening with your AI projects</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-600 hover:text-slate-900">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
              <Plus className="w-5 h-5" />
              New Project
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Projects', value: '3', icon: FolderOpen, color: 'bg-indigo-500' },
            { label: 'Tasks Completed', value: '24', icon: CheckCircle2, color: 'bg-green-500' },
            { label: 'Hours Saved', value: '156', icon: Clock, color: 'bg-cyan-500' },
            { label: 'ROI Generated', value: '$45K', icon: BarChart3, color: 'bg-violet-500' }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Projects */}
          <div className="col-span-2 bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-900">Your Projects</h2>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
                  View All
                </button>
              </div>
            </div>
            <div className="divide-y divide-slate-200">
              {projects.map((project) => (
                <div key={project.id} className="p-6 hover:bg-slate-50 transition cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{project.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                        {getStatusLabel(project.status)}
                      </span>
                    </div>
                    <div className="flex -space-x-2">
                      {project.team.map((member, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-xs font-medium text-indigo-600">
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Next: {project.nextMilestone}</span>
                    <span>Due: {project.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Upcoming Meetings */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-bold text-slate-900">Upcoming Meetings</h2>
              </div>
              <div className="p-4 space-y-4">
                {upcomingMeetings.map((meeting, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 truncate">{meeting.title}</div>
                      <div className="text-sm text-slate-600">{meeting.date}</div>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Users className="w-4 h-4" />
                      {meeting.participants}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
              </div>
              <div className="p-4 space-y-4">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'milestone' ? 'bg-green-500' :
                      activity.type === 'comment' ? 'bg-blue-500' : 'bg-slate-400'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-slate-900">{activity.message}</div>
                      <div className="text-xs text-slate-500">{activity.project} &bull; {activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-indigo-100">Schedule a call with your dedicated success manager</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Schedule Call
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
