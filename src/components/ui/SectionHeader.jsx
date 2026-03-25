export default function SectionHeader({ label, title, center = true, dark = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <p className={`font-bold text-sm uppercase tracking-widest mb-3 ${dark ? 'text-teal-100' : 'text-[var(--brand-blue)]'}`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
    </div>
  )
}
