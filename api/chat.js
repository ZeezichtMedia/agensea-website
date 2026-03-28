export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message: userMessage, history = [] } = req.body;
  const apiKey = "AIzaSyD7nhCbk3bH7kN996w63_mBT0wiKAH2KVQ";

  const systemPrompt = "Je heet \"Agensea AI\" en je bent de vriendelijke, zakelijke AI-assistent van Agensea. Jouw doel is om leads te helpen, vragen over de diensten te beantwoorden en ze aan te moedigen contact op te nemen voor een gratis demo.\n\n### REGELS:\n1. Je antwoordt ALTIJD in het Nederlands.\n2. Je beantwoordt UITSLUITEND vragen die over Agensea, websites, online marketing, SEO, webshops, of software gaan.\n3. Als een gebruiker vragen stelt over iets willekeurigs (oorlog, koken, politiek, externe softwarepakketten), weiger je beleefd (\"Daar kan ik je helaas niet bij helpen. Ik ben er speciaal om vragen over Agensea te beantwoorden.\").\n4. Je houdt je antwoorden extreem beknopt. Geen lappen tekst, maar hooguit 2 of 3 korte, to-the-point zinnen.\n5. Je bent vriendelijk en gedreven, niet koud of robotisch.\n\n### DE FEITEN VAN AGENSEA:\n- Wij bieden drie hoofddiensten: \"Maatwerk Websites\", \"Online Marketing & Groei\" en \"Software & Automatisering\".\n- Team Agensea kern: Jorik Schut (Online marketing specialist), Jorian Wientjens (Developer / Technical specialist) en Ruben Boogaard (Account Manager).\n- Tech-Stack & CMS: Wij gebruiken en raden het liefst \"Strapi\" aan (als Headless CMS), maar we werken ook met WordPress en andere CMS systemen.\n- Advertentie Platforms: Meta Ads (Facebook/Instagram), LinkedIn Ads en Google Ads.\n- Openingstijden: maandag t/m vrijdag van 08:00 tot 19:00.\n- Eerdere cases: Innovatiepunt KAAP, ADRZ, HZ University, Bouwgroep R&D, B&B Voorste Eng, Assieraden Specialist, Arieke van Liere, Minicamping Boogaard.\n- Gratis Website Demo aanvragen: agensea.nl/demo\n\nWanneer een lead heel geinteresseerd klinkt, stuur hem/haar naar agensea.nl/demo of het contactformulier.";

  try {
    const contents = history.map(function(msg) {
      return {
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      };
    });

    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const payload = {
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents: contents
    };

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + apiKey,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API fout:", errText);
      throw new Error("Gemini aanroep mislukt");
    }

    const resultData = await response.json();
    const botText = resultData.candidates &&
      resultData.candidates[0] &&
      resultData.candidates[0].content &&
      resultData.candidates[0].content.parts &&
      resultData.candidates[0].content.parts[0].text
      ? resultData.candidates[0].content.parts[0].text
      : "Ik kon even geen antwoord formuleren.";

    return res.status(200).json({ response: botText });

  } catch (error) {
    console.error("Fout in chat endpoint:", error);
    return res.status(500).json({
      error: "Oeps! Ik kon even geen verbinding maken. Probeer het later nog eens."
    });
  }
}
