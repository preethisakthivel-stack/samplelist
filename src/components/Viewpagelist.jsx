import React from 'react'
import { useParams } from 'react-router-dom'
import shirtimg from '../assets/pexels-bymuratisikofficial-33762595.jpg'
import shortskirtimg from '../assets/pexels-ali-123-62577311-15359703.jpg'
import pantimg from '../assets/pexels-rehan-rashid-736233303-18487396.jpg'
import shirtstyleimg from '../assets/pexels-rubaitulazad-34976587.jpg'
import cottonimg from '../assets/pexels-moh-adbelghaffar-18476125.jpg'


export default function Viewpagelist() {
    const {names}=useParams();
     const Productlist=[
    {
      id:1,
      name:'Dress-t-shirts',
      prize:'455-550',
      catogory:'kids wear',
      Hintat:'kids-dress-t-shirts',
      offer:'10%',
      stock:'Available',
      quality:'no-1',
      size:'sm-xxl',
      imgurl:shirtimg,
    },
    {
      id:2,
      name:'Dress-short-skirts',
      prize:'455-850',
      catogory:'kids wear',
      Hintat:'kids-dress-short-skirts',
      offer:'50%',
      stock:'Available',
      quality:'no-1',
      size:'sm-xxl',
      imgurl:shortskirtimg,
    },
    {
      id:3,
      name:'Dress-half-pants',
      prize:'255-500',
      catogory:'kids wear',
      Hintat:'kids-dress-half-pants',
      offer:'10%',
      stock:'Available',
      quality:'no-1',
      size:'sm-xxl',
      imgurl:pantimg,
    },
    {
      id:4,
      name:'Dress-shirt-style',
      prize:'400-500',
      catogory:'kids wear',
      Hintat:'kids-dress-shirt-style',
      offer:'10%',
      stock:'Available',
      quality:'no-1',
      size:'sm-xxl',
      imgurl:shirtstyleimg
    },
    {
      id:5,
      name:'Dress-cotton-set',
      prize:'220-999',
      catogory:'kids wear',
      Hintat:'kids-dress-cotton-set',
      offer:'10%',
      stock:'Available',
      quality:'no-1',
      size:'sm-xxl',
      imgurl:cottonimg
    },
  ]
 
  const currentstock=Productlist.find((listofpros)=>listofpros.Hintat===names)
  return (
    <div>
      <div className='flex gap-[10%] ml-[200px] mt-[50px]'>
        <div>
        <img src={currentstock.imgurl} alt={currentstock.imgurl} 
        className='w-[610px] rounded-[60px] h-[550px] hover:scale-[1.1] cursor-pointer shadow-2xl shadow-purple-400 hover:shadow-teal-600'/>
      </div>
        <div className='text-[30px] mt-[50px]'>
          <p className='text-[40px] font-bold text-emerald-400 italic ' style={{textShadow:'2px 3px 15px  orange'}}>{currentstock.name}</p>
        <p>{currentstock.prize}</p>
        <p>{currentstock.offer}</p>
      <p>{currentstock.catogory}</p>
      <p>{currentstock.quality}</p>
      <p>{currentstock.size}</p>
      <p>{currentstock.stock}</p>
        </div>
      </div>
    </div>
  )
}
