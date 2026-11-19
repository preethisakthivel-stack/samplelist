import React from 'react'
import { useNavigate } from 'react-router-dom';
import shirtimg from '../assets/pexels-bymuratisikofficial-33762595.jpg'
import shortskirtimg from '../assets/pexels-ali-123-62577311-15359703.jpg'
import pantimg from '../assets/pexels-rehan-rashid-736233303-18487396.jpg'
import shirtstyleimg from '../assets/pexels-rubaitulazad-34976587.jpg'
import cottonimg from '../assets/pexels-moh-adbelghaffar-18476125.jpg'

 function Lists() {
  const navigate=useNavigate();
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
  return (
    <div>
    <div className='flex flex-wrap justify-around'>
       {
        Productlist.map(listofpro=>(
        <div className='border-[0px] bg-purple-400 hover:bg-pink-300 cursor-pointer hover:shadow-pink-400 shadow-xl shadow-purple-300 border-amber-900 w-[250px] h-[400px] my-[50px] rounded-2xl' onClick={()=>navigate(`/pagelist/${listofpro.Hintat}`)} >
        <img src={listofpro.imgurl} alt={listofpro.imgurl} className='w-[250px] h-[300px]   rounded-t-2xl rounded-b-none'/>
          <p className='pt-[10px] pl-[20px] text-[20px] text-white hover:text-teal-600'>{listofpro.name}</p>
        <p className='pl-[20px]'>{listofpro.prize}</p>
        <p className='pl-[20px]'>{listofpro.offer}</p>
        </div>
        ))
       }
        </div>
    </div>
  )
}
export default Lists;