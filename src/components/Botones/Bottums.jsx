import React from 'react'
import { Button } from '@material-tailwind/react';


const Bottums = () => {
  return (
    <div className='  border border-[#CCAC5E] rounded-lg flex mb-2 m-4 gap-8  p-4'>
      <h2 className='text-black  font-semibold'>Modelo de casa</h2>
    <Button className="bg-[#B78D4E] hover:bg-[#CCAC5E] text-white font-bold py-2 px-4 border  rounded">Aureo </Button>
    <Button className="bg-[#B78D4E] hover:bg-[#CCAC5E] text-white font-bold py-2 px-4 border  rounded">Aureo Plus</Button>

  </div>
  )
}

export default Bottums