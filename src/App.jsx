function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <section className="mx-auto max-w-2xl rounded-2xl border border-cyan-400/30 bg-slate-900 p-8 shadow-2xl shadow-cyan-950/40 sm:p-12">
        <div className="mb-8 inline-flex rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
          Tailwind is working
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          ProofTracker
        </h1>
        <p className="mt-4 max-w-lg text-lg leading-8 text-slate-300">
          This screen is styled entirely with Tailwind CSS utility classes.
        </p>
        <button
          type="button"
          className="mt-8 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-300"
        >
          Test hover state
        </button>
      </section>
    </main>
  )
}

export default App
