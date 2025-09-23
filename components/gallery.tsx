import { CircleDollarSign, Scale } from 'lucide-react';
import React from 'react';

export function Gallery() {
  return (
    <section className='relative flex justify-between items-center mt-4 sm:mt-6 max-w-[95%] mx-auto font-bold py-5 px-4'>
      <div className='text-xl pl-1'>Gallery</div>
      <div className='flex space-x-4 text-md'>
        <div className='flex items-center gap-1'>
          <Scale /> <span>Legal</span>
        </div>
        <div className='flex items-center gap-1 pr-2'>
          <CircleDollarSign /> <span>Pricing</span>
        </div>
      </div>
    </section>
  );
}
