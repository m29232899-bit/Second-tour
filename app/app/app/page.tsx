import "./globals.css"
export default function Home(){
  const paymentLink = "https://buy.stripe.com/test_00g3c8g6W6gXgA0cMM"
  return(
    <main className="max-w-[480px] mx-auto px-5 py-8 bg-[#FDFBF7] min-h-screen">
      <p className="text-[11px] tracking-[0.2em] uppercase opacity-60">Second Tour • Pour agences immobilières</p>
      <h1 className="text-[36px] font-black leading-[0.95] mt-6">Vos anciens clients vous ont oublié. Pas l'inverse.</h1>
      <p className="mt-4 text-[17px] leading-6 opacity-80">Une agence perd <b>73% des clients après une estimation sans suite</b>. Soit ~12 000€ de commission qui s'évaporent chaque mois. Pas par déception. Par oubli.</p>
      <div className="mt-8 bg-white border rounded-2xl p-5 shadow-sm">
        <h2 className="font-bold">Comment ça marche :</h2>
        <ul className="mt-3 space-y-3 text-[15px]">
          <li>✓ <b>5s au comptoir :</b> Vous notez le numéro au moment de l'estimation</li>
          <li>✓ <b>Rappel auto à 90 jours :</b> Le système relance tout seul</li>
          <li>✓ <b>Compteur en euros :</b> Vous voyez combien les rappels rapportent</li>
        </ul>
        <a href={paymentLink} className="mt-6 block w-full text-center bg-[#E86A33] text-white font-bold py-4 rounded-full text-[18px]">Activer Second Tour - 25€/mois</a>
        <p className="text-center text-[12px] mt-2 opacity-60">Sans engagement • Arrêt en 1 clic</p>
      </div>
      <div className="mt-10 text-[11px] opacity-50 flex gap-4 justify-center"><span>Mentions légales</span><span>CGV</span><span>Confidentialité</span></div>
    </main>
  )
}
