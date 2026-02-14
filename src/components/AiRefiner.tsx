import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

const callGeminiRefiner = async (userIdea: string) => {
    try {
        const response = await fetch("/api/refine", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idea: userIdea }),
        });

        if (!response.ok) throw new Error("API Error");
        return await response.json();
    } catch (error) {
        console.error("Error refining idea:", error);
        return null;
    }
};

interface RefinedResult {
    valueProp: string;
    features: string[];
    techStack: string;
}

export default function AiRefiner() {
    const [idea, setIdea] = useState("");
    const [result, setResult] = useState<RefinedResult | null>(null);
    const [loading, setLoading] = useState(false);

    const handleRefine = async () => {
        if (!idea.trim()) return;
        setLoading(true);
        setResult(null);
        const data = await callGeminiRefiner(idea);
        setResult(data);
        setLoading(false);
    };

    return (
        <section id="ai-demo" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#0071E3] ring-1 ring-inset ring-blue-700/10 mb-6">
                        <Sparkles className="w-3.5 h-3.5 mr-2" />
                        Benai Intelligence
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Refina tu Visión.
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Prueba nuestra tecnología. Cuéntanos tu idea en una frase y deja que nuestra IA estructure un alcance preliminar profesional para ti.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="p-6 sm:p-8">
                            <label htmlFor="idea" className="block text-sm font-semibold text-gray-900 mb-2">
                                ¿Qué quieres construir hoy?
                            </label>
                            <div className="relative">
                                <textarea
                                    id="idea"
                                    rows={3}
                                    className="block w-full rounded-xl border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0071E3] sm:text-sm sm:leading-6 resize-none bg-gray-50/50"
                                    placeholder="Ej: Una app para conectar paseadores de perros con dueños ocupados..."
                                    value={idea}
                                    onChange={(e) => setIdea(e.target.value)}
                                />
                                <button
                                    onClick={handleRefine}
                                    disabled={loading || !idea.trim()}
                                    className="absolute bottom-3 right-3 inline-flex items-center rounded-lg bg-[#0071E3] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0077ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                                            Analizando...
                                        </>
                                    ) : (
                                        <>
                                            Potenciar con AI <Sparkles className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* AI Result Area */}
                        {result && (
                            <div className="bg-slate-50 border-t border-gray-100 p-6 sm:p-8 animate-in">
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#0071E3] mr-2"></span>
                                    Análisis de Benai
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">Propuesta de Valor</h4>
                                        <p className="text-gray-900 font-medium text-lg leading-relaxed">
                                            &ldquo;{result.valueProp}&rdquo;
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500 mb-2">Funcionalidades Clave</h4>
                                            <ul className="space-y-2">
                                                {result.features?.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start text-sm text-gray-700">
                                                        <span className="text-[#0071E3] mr-2">•</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500 mb-2">Stack Recomendado</h4>
                                            <div className="bg-white p-3 rounded-lg border border-gray-200 text-sm text-gray-600">
                                                {result.techStack}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                                    <p className="text-xs text-gray-500">Generado por Gemini AI • Revisado por Benai</p>
                                    <a href="#contacto" className="text-sm font-semibold text-[#0071E3] hover:text-[#005bb5]">
                                        Hacer realidad este proyecto →
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
