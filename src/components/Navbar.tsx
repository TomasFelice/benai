import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <span className="text-2xl font-semibold tracking-tight text-gray-900">
                            Benai<span className="text-[#0071E3]">.</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#servicios" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Servicios</a>
                        <a href="#ai-demo" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">AI Demo</a>
                        <a href="#filosofia" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Nosotros</a>
                        <a href="#casos" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Casos</a>
                        <a href="#carreras" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Carreras</a>
                        <a
                            href="#contacto"
                            className="ml-4 px-5 py-2.5 bg-[#0071E3] text-white text-sm font-medium rounded-full hover:bg-[#0077ED] transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                        >
                            Hablemos
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-gray-900 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                        <a href="#servicios" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">Servicios</a>
                        <a href="#ai-demo" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">AI Demo</a>
                        <a href="#filosofia" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">Nosotros</a>
                        <a href="#casos" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">Casos de Éxito</a>
                        <a href="#carreras" className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">Carreras</a>
                        <a href="#contacto" className="block w-full text-center mt-4 px-5 py-3 bg-[#0071E3] text-white font-medium rounded-lg">
                            Iniciar Proyecto
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
