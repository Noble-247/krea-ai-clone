export function Footer() {
  return (
    <footer className='sm:px-6 py-3 sm:py-4 border-t border-border bg-primary'>
      <div className='max-w-[95%] mx-auto'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0'>
          <div className='flex items-center gap-2'>
            <div className='w-6 sm:w-8 h-6 sm:h-8 bg-black rounded flex items-center justify-center'>
              <span className='text-gray-100 text-lg sm:text-xl font-bold'>
                K
              </span>
            </div>
            <span className='text-background font-medium text-xl sm:text-2xl'>
              Krea AI
            </span>
          </div>

          <div className='flex items-center gap-2 text-lg sm:text-xl text-background'>
            <span>curated by</span>
            <div className='flex items-center gap-1'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-black rounded flex items-center justify-center'>
                <span className='text-gray-100 text-lg sm:text-xl font-bold'>
                  M
                </span>
              </div>
              <span className='text-background text-xl sm:text-2xl font-medium'>
                Mobbin
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
