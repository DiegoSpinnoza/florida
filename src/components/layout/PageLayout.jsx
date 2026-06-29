import TopHeader from './TopHeader';

export function PageHeader({ label, title, highlight, description, className = '' }) {
  return (
    <div className={`mb-2 md:mb-8 text-center max-w-3xl mx-auto pt-2 md:pt-4 pb-6 md:pb-8 ${className}`}>
      {label && (
        <div className="section-label justify-center mb-3 md:mb-4">
          {label}
        </div>
      )}
      <h1 className="display-title mb-3 md:mb-4">
        <span className="text-[#f4e4c9]">{title}</span>
        {highlight && (
          <span className="text-[#c7a86b]"> {highlight}</span>
        )}
      </h1>
      {description && (
        <p className="text-neutral-400 text-xs sm:text-sm md:text-base">{description}</p>
      )}
    </div>
  )
}

export default function PageLayout({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <TopHeader />
      <div className="container-app pt-2 md:pt-4 pb-12 md:pb-24 relative">
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}
