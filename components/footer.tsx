export function Footer() {
  return (
    <footer className="px-6 py-4 border-t border-border bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-gray-100 text-xl font-bold">K</span>
            </div>
            <span className="text-background font-medium text-2xl">Krea AI</span>
          </div>

          <div className="flex items-center gap-2 text-xl text-background">
            <span>curated by</span>
            <div className="flex items-center gap-1">
               <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-gray-100 text-xl font-bold">M</span>
            </div>
              <span className="text-background text-2xl font-medium">Mobbin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
