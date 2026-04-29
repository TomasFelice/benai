import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300"
            aria-label="Navegación principal"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="/" className="flex-shrink-0 flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] rounded-sm" aria-label="Benai — inicio">
                        <span className="text-2xl font-semibold tracking-tight text-gray-900">
                            Benai<span className="text-[#0071E3]">.</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#servicios" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] rounded-sm">Servicios</a>
                        <a href="#ai-demo" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] rounded-sm">AI Demo</a>
                        <a href="#filosofia" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] rounded-sm">Nosotros</a>
                        <a href="#casos" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] rounded-sm">Casos</a>
                        <a href="#carreras" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] rounded-sm">Carreras</a>
                        <a
                            href="#contacto"
                            className="ml-4 px-5 py-2.5 bg-[#0071E3] text-white text-sm font-medium rounded-full hover:bg-[#0077ED] transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                        >
                            Hablemos
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] rounded-sm p-1"
                            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div id="mobile-menu" className="md:hidden bg-white border-b border-gray-100 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                        <a href="#servicios" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]">Servicios</a>
                        <a href="#ai-demo" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]">AI Demo</a>
                        <a href="#filosofia" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]">Nosotros</a>
                        <a href="#casos" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]">Casos de Éxito</a>
                        <a href="#carreras" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]">Carreras</a>
                        <a href="#contacto" className="block w-full text-center mt-4 px-5 py-3 bg-[#0071E3] text-white font-medium rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]">
                            Iniciar Proyecto
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
