export function Footer() {
  return (
    <footer className='sm:px-6 py-3 sm:py-4 border-t border-border/60 bg-primary transition-colors duration-200'>
      <div className='max-w-[95%] mx-auto'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0'>
          <div className='flex items-center gap-2 group cursor-pointer'>
            <div className='w-6 sm:w-8 h-6 sm:h-8 bg-background rounded flex items-center justify-center transition-transform duration-200 group-hover:scale-105'>
              <span className='text-primary text-lg sm:text-xl font-extrabold'>
                K
              </span>
            </div>
            <span className='text-background font-medium text-xl sm:text-2xl group-hover:opacity-80 transition-opacity duration-200'>
              Krea AI
            </span>
          </div>

          <div className='flex items-center gap-2 text-lg sm:text-xl text-background/90'>
            <span>curated by</span>
            <div className='flex items-center gap-1 group cursor-pointer'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-background rounded flex items-center justify-center transition-transform duration-200 group-hover:scale-105'>
                <span className='text-primary text-lg sm:text-xl font-bold'>
                  M
                </span>
              </div>
              <span className='text-background text-xl sm:text-2xl font-medium group-hover:opacity-80 transition-opacity duration-200'>
                Mobbin
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
