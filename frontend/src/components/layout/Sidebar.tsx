'use client'

import {

  LayoutDashboard,

  FileText,

  Sparkles,

  Settings

} from 'lucide-react'

export default function Sidebar() {

  const navItems = [

    {
      title: 'Dashboard',
      icon: LayoutDashboard
    },

    {
      title: 'Assignments',
      icon: FileText
    },

    {
      title: 'AI Generator',
      icon: Sparkles
    },

    {
      title: 'Settings',
      icon: Settings
    }
  ]

  return (

    <div
      className="
      w-72
      bg-black
      text-white
      p-6
      flex
      flex-col
      justify-between
      "
    >

      <div>

        <div className="mb-12">

          <h1
            className="
            text-3xl
            font-bold
            "
          >
            VedaAI
          </h1>

          <p
            className="
            text-gray-400
            text-sm
            mt-2
            "
          >
            AI Assessment Platform
          </p>

        </div>

        <div className="space-y-3">

          {
            navItems.map(
              (item, index) => {

                const Icon =
                  item.icon

                return (

                  <div

                    key={index}

                    className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-2xl
                    hover:bg-gray-900
                    transition
                    cursor-pointer
                    group
                    "
                  >

                    <Icon
                      size={20}
                      className="
                      group-hover:scale-110
                      transition
                      "
                    />

                    <span className="font-medium">
                      {item.title}
                    </span>

                  </div>
                )
              }
            )
          }

        </div>

      </div>

      <div
        className="
        text-sm
        text-gray-500
        "
      >
        Powered by AI
      </div>

    </div>
  )
}