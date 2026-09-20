import "./globals.css"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBF5] text-slate-800 px-6 py-10 max-w-[480px] mx-auto">
      <p className="text-[11px] tracking-[0.3em] opacity-50 mb-6">SECOND TOUR • AGENCES IMMO</p>
      <h1 className="text-[36px] font-black leading-[0.95] text-slate-900">Vos anciens clients vous ont oublié.<br/>Pas l'inverse.</h1>
      <p className="mt-4 text-[17px] leading-7">73% des estimations ne reviennent jamais. <b>~12 000€/mois perdus par oubli.</b><br/>Second Tour les rappelle pour vous, à 90 jours, automatiquement.</p>
      <div className="mt-8 bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm">
        <ul className="space-y-2 text-[15px]">
          <li>✓ 5s au comptoir : on scanne la fiche</li>
          <li>✓ Rappel auto à 90 jours par SMS</li>
          <li>✓ Compteur en € récupérés</li>
          <li>✓ 0 saisie • 0 RGPD : vous envoyez</li>
        </ul>
        <a href=https://buy.stripe.com/bJe7sK0WmcaFbeh5dvffy02" className="mt-6 flex w-full justify-center bg-[#F06A2E] text-white font-bold py-4 rounded-full text-[18px]">Activer - 25€/mois</a>
        <p className="text-center text-[11px] mt-3 opacity-60">Sans engagement • Installé en 5 min</p>
      </div>
      <div className="mt-10">
        <h2 className="font-black text-[18px]">Comment ça marche?</h2>
        <div className="mt-3 space-y-3 text-sm">
          <div className="bg-white p-4 rounded-xl border"><b>1. Vous estimez</b> - comme d'habitude.</div>
          <div className="bg-white p-4 rounded-xl border"><b>2. On scanne en 5s</b> - photo de la fiche, pas de saisie.</div>
          <div className="bg-white p-4 rounded-xl border"><b>3. On relance à J+90</b> - SMS au nom de votre agence.</div>
        </div>
      </div>
      <p className="mt-12 text-center text-[11px] opacity-40">© 2026 Second Tour - Bussy / Val d'Europe</p>
    </main>
  )
}
