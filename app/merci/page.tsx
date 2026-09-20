export default function Merci() {
  return (
    <main className="min-h-screen bg-[#FFFBF5] text-slate-800 px-6 py-10 max-w-[480px] mx-auto">
      <p className="text-[11px] tracking-[0.3em] opacity-50 mb-6">SECOND TOUR • PAIEMENT CONFIRMÉ ✅</p>
      <h1 className="text-[36px] font-black leading-[0.95] text-slate-900">Paiement reçu.<br/>Bienvenue!</h1>
      <p className="mt-4 text-[17px] leading-7">Tu es abonné à <b>Second Tour à 25€/mois</b>. On active ton agence en 5 min.</p>

      <div className="mt-8 bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm">
        <h2 className="font-black text-[18px] mb-4">Installation en 3 étapes :</h2>
        <div className="space-y-4 text-[15px]">
          <div className="flex gap-3"><span className="bg-slate-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span><p><b>Envoie-moi un WhatsApp</b> avec le nom de ton agence.</p></div>
          <div className="flex gap-3"><span className="bg-slate-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span><p><b>Je te crée ton lien perso</b> du style second-tour.com/tonagence</p></div>
          <div className="flex gap-3"><span className="bg-slate-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span><p><b>Tu scannes la 1ère fiche</b> en 5s au comptoir. On s'occupe du reste à J+90.</p></div>
        </div>

        <a href="https://wa.me/33600000000?text=Salut%20Second%20Tour%20!%20Je%20viens%20de%20payer%20les%2025%E2%82%AC%2C%20mon%20agence%20est%20%3A" className="mt-6 flex w-full justify-center bg-[#25D366] text-white font-bold py-4 rounded-full text-[18px]">WhatsApp : Activer mon agence</a>
        <p className="text-center text-[11px] mt-3 opacity-60">Réponse en moins de 2h • 7j/7</p>
      </div>

      <div className="mt-8 bg-slate-900 text-white rounded-[24px] p-6">
        <p className="text-sm opacity-80">Reçu par email : taouil.s77@yahoo.com</p>
        <p className="text-[11px] mt-2 opacity-50">Facture Stripe envoyée automatiquement. Sans engagement, résiliable en 1 clic.</p>
      </div>

      <a href="/" className="mt-8 block text-center text-sm opacity-60">← Retour à l'accueil</a>
    </main>
  )
}
