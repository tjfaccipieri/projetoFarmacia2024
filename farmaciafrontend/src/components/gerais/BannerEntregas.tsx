import { ReactNode } from 'react'


interface bannerProps {
  texto: string,
  textoBold: string,
  icone: ReactNode
}

function BannerEntregas(props: bannerProps) {
  return (
    <div className='flex gap-6 items-center bg-slate-100 p-4 px-6 rounded-lg flex-1 text-2xl'>
      <div className='text-5xl'>
        {props.icone}
      </div>
      <p>{props.texto} <br /><span className='font-bold'>{props.textoBold}</span></p>
    </div>
  )
}

export default BannerEntregas