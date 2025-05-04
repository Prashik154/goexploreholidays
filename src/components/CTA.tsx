export function CTA() {
    return (
      <section className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/cta-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h2 className="text-3xl font-bold">Ready to Embark on a New Journey?</h2>
          <p className="mt-2">Contact us at (123) 456‑7890 or visit our HQ.</p>
        </div>
      </section>
    )
  }