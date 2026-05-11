export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const { idea } = await request.json();

    if (!idea || typeof idea !== "string" || !idea.trim()) {
        return new Response(JSON.stringify({ error: "Idea is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const apiKey = import.meta.env.GOOGLE_AI_API_KEY;

    if (!apiKey) {
        return new Response(
            JSON.stringify({ error: "API key not configured" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }

    const prompt = `
    Actúa como un Senior Product Manager de la agencia de software "Benai". 
    El usuario tiene esta idea de proyecto: "${idea}".
    
    Tu objetivo es "potenciar su visión".
    Responde en formato JSON con la siguiente estructura (sin markdown, solo el JSON puro):
    {
      "valueProp": "Una frase corta y potente que defina la propuesta de valor única.",
      "features": ["Feature clave 1", "Feature clave 2", "Feature clave 3"],
      "techStack": "Sugerencia de tecnologías modernas (ej. React, Node, AWS) y por qué."
    }
    Mantén el tono profesional, minimalista y empático de la marca Benai. Responde en Español.
  `;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        responseMimeType: "application/json",
                    },
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.text();
            console.error("Gemini API error:", errorData);
            return new Response(
                JSON.stringify({ error: "Error calling AI service" }),
                { status: 502, headers: { "Content-Type": "application/json" } }
            );
        }

        const data = await response.json();
        const result = JSON.parse(data.candidates[0].content.parts[0].text);

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error in refine endpoint:", error);
        return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};
