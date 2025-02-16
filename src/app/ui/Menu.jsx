import { Fragment } from 'react'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  SparklesIcon,
  ArrowsPointingInIcon
  
} from '@heroicons/react/24/outline'

const solutions = [
  // { name: 'Todo App - Next 14', description: 'Aplicación construida en Next, utilizando server actions y despliegue CI/CD con GitHub Actions. Testing con Jest', href: 'http://todos.jgxweb.site', icon: CursorArrowRaysIcon  },
  { name: 'JGx Agency - React', description: 'Desarrollo de sitio web para agencia de marketing. Desarrollada con React 18', href: 'https://agency.betacode.cl', icon: ChartPieIcon },
  { name: 'AI Chat Learning Assintant - Gemini - React ', description: "Aplicación Chat de inteligencia artificial creado con Google Gemini", href: 'https://asistente-js.vercel.app/', icon: SparklesIcon },
  { name: 'Star Wars API UI - React', description: 'Aplicación de React para consumir una API de Star Wars, manejo de contexto global de la aplicación con API Context, enrutado y datos locales.', href: 'https://star-wars-blog-chi.vercel.app/', icon: ArrowsPointingInIcon },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Sígueme en YouTube', href: 'https://www.youtube.com/channel/UCUVOMdP_TiQJY3cZk6HGd9A', icon: PlayCircleIcon, color: "text-red-700" },
  { name: 'Contacto', href: '/#contact', icon: PhoneIcon, color: "text-gray-700" },
]

export default function Menu() {
  return (
    <div className="bg-gray-800">
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
        <span>Proyectos</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
         className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-gray-800 text-sm text-white leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-600">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-800 text-white  hover:bg-gray-600">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold  bg-gray-800 text-white hover:bg-gray-600" target='_blank'>
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-white text-md">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className={"h-5 w-5 flex-none " + item.color} aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
    </div>
  )
}
