import "./globals.css"
export default function Home(){
  return(
    <main className="max-w-[480px] mx-auto px-5 py-8 bg-[#FDFBF7] min-h-screen text-[#1A2E35]">
      <p className="text-[11px] tracking-[0.2em] uppercase opacity-60">Second Tour • Agences immo</p>
      <h1 className="text-[36px] font-black leading-[0.95] mt-6">Vos anciens clients vous ont oublié. Pas l'inverse.</h1>
      <p className="mt-4 text-[17px]">73% des estimations ne reviennent jamais. ~12 000€/mois perdus par oubli.</p>
      <div className="mt-8 bg-white border rounded-2xl p-5 shadow-sm">
        <ul className="space-y-2 text-[15px]"><li>✓ 5s au comptoir</li><li>✓ Rappel auto à 90 jours</li><li>✓ Compteur en € récupérés</li></ul>
        <a href="https://buy.stripe.com/test_00g3c8g6W6gXgA0cMM" className="mt-6 block w-full text-center bg-[#E86A33] text-white font-bold py-4 rounded-full">Activer - 25€/mois</a>
      </div>
    </main>
  )
}
