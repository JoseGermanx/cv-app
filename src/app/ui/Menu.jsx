import { Fragment } from 'react'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  SparklesIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Habits Tracker', description: 'Apliación para el seguimiento de hábitos.', href: 'https://habits.betacode.cl', icon: ChartPieIcon },
  { name: 'AI Chat Learning Assistant', description: 'Aplicación Chat de IA creada con Google Gemini y React.', href: 'https://asistente-js.betacode.cl/', icon: SparklesIcon },
  { name: 'Star Wars API UI — React', description: 'Consumo de API con Context API, enrutado y datos locales.', href: 'https://star-wars-blog-chi.vercel.app/', icon: ArrowsPointingInIcon },
  { name: 'Code Tickets', description: 'Gestión de tickets para ingreso a eventos con sistema de qr.', href: 'https://codeticket.betacode.cl/', icon: ArrowsPointingInIcon },
  { name: 'Post It', description: 'Aplicación de notas adhesivas en línea.', href: 'https://post-it.jgxdev.com/', icon: ArrowsPointingInIcon },
]

const callsToAction = [
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCUVOMdP_TiQJY3cZk6HGd9A', icon: PlayCircleIcon, color: 'text-red-400' },
  { name: 'Contacto', href: '/#contact', icon: PhoneIcon, color: 'text-blue-400' },
]

export default function Menu() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200 outline-none">
        <span>Proyectos</span>
        <ChevronDownIcon className="h-4 w-4 transition-transform ui-open:rotate-180" aria-hidden="true" />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        <PopoverPanel className="absolute left-1/2 z-10 mt-3 flex w-screen max-w-md -translate-x-1/2 px-4">
          <div
            className="w-full overflow-hidden rounded-2xl text-sm leading-6 shadow-xl"
            style={{
              background: 'rgba(7, 9, 15, 0.95)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="p-3">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-x-4 rounded-xl p-4 hover:bg-white/[0.06] transition-colors duration-150"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.07] group-hover:border-blue-400/30 transition-colors">
                    <item.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200 group-hover:text-white transition-colors">
                      {item.name}
                    </p>
                    <p className="mt-1 text-slate-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
            <div
              className="grid grid-cols-2 divide-x"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)', divideColor: 'rgba(255,255,255,0.07)' }}
            >
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2 p-3 text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors font-medium border-white/[0.07]"
                >
                  <item.icon className={`h-4 w-4 flex-none ${item.color}`} aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}
