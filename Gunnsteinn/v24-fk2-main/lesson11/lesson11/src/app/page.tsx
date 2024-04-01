'use client'
import Image from 'next/image'
import { useState, Fragment, useCallback } from 'react'

const DATA = [
  {
    id: 0,
    title: 'Pied Piper',
    subTitle: 'November 2018 - present',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
  },
  {
    id: 1,
    title: 'Pied Piper 2',
    subTitle: 'November 2018 - present',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
  },
  {
    id: 2,
    title: 'Pied Piper 3',
    subTitle: 'November 2018 - present',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
  }
]

type JobProps = {}

const Job = (props: JobProps) => {
  return <div></div>
}

type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return <div></div>
}

type ContentProps = {
  data: typeof DATA
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default function Home () {
  return (
    <div>
      <Header />
      <Content data={DATA} />
    </div>
  )
}

// type Props = {

//   state: number
//   handleClick: () => void
// }

// const ChildComponent = ({ state, handleClick }: Props) => {
//   const click = () => {
//     handleClick()
//   }

//   return (
//     <>
//       <p>{state}</p>
//       <button onClick={click} className='bg-neutral-700	'>
//         Button
//       </button>
//     </>
//   )
// }

// const ParentComponent = () => {
//   const [state, setState] = useState(0)
//   const handleClick = () => {
//     setState(s => s + 1)
//   }

//   return (
//     <>
//       <ChildComponent state={state} handleClick={handleClick} />
//     </>
//   )
// }
