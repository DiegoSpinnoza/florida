export function PageHeader({  title,  description, className = '' }) {
  return (
    <div className={`mb-8 md:mb-10 text-center max-w-3xl mx-auto pt-8 md:pt-12 pb-8 md:pb-10 ${className}`}>
      <h1 className="display-title mb-3 md:mb-4">
        <span className="text-[#f4e4c9]">{title}</span>
      </h1>
      {description && (
        <p className="text-neutral-500 text-sm md:text-base">{description}</p>
      )}
    </div>
  )
}

export default function PageLayout({ children, className = '' }) {
  return (
    <div className={`container-app pt-8 md:pt-12 pb-20 md:pb-32 relative ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
