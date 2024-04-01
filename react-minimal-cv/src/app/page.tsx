'use client'
import Image from 'next/image';
import './/globals.css'
import { title } from 'process';
import { useState, Fragment, useCallback } from 'react';

const TITILL = [
  {
    id: 0,
    title: "Sigurjón Halldórsson",
    description: "- Fársjúkur Manchester United stuðningsmaður",
  },
]
const DATA = [
  {
    id: 0,
    title: 'Framtíðin',
    subTitle: 'Nútíminn - Framtíðin',
    description:
      'Það sem hefur verið að hrjá Manchester í mjög langan tíma er að klúbburinn er í eigu trúðafjölskyldu sem vita ekkert um að reka íþróttafélag. Það má hinsvegar vona því að nýr eigandi var að stíga inn í klúbbinn og mun hjá um knattspyrnulega hlið. Það er búið að vera að ráða hæfa einstaklinga á bak við tjöldin svo vonandi verður klúbbnum komið aftur á réttann kjöl innan nokkurra ára.'
  },
  {
    id: 1,
    title: 'Nútíminn',
    subTitle: '2022-Núverandi',
    description:
      'Núna erum við með hollending sem skortir alla persónutöfra en er samt með aga á liðinu. Því miður eru margir leikmenn að spila undir getu og meiðsl hafa verið hrjá hópinn. Nokkra leikmenn hef ég ekki séð inn á vellinum í allt of langann tíma. Kosturinn er að hann neiðist til að gefa ungum leikmönnum sem koma í gegn um akademíu united tækifæir og nokkrir hafa stokkið á það og tekist að festa sér stað í byrjunarliðinu.'
  },
  {
    id: 2,
    title: 'Eftirleikurinn',
    subTitle: '2013-2022',
    description:
      'Eins og margir aðrir hafði maður fulla trú á því að þegar Ferguson gekk inn í stjórn félagsins að allt myndi nú líklega fara vel. En það sem kom í ljós var að Ferguson hafði tekist að ná mun meira úr leikmönnunum heldur en aðrir. Fallið var hátt og maður fagnaði því að keppast um meistaradeildarsæti í stað þess að fagna titlum. Þetta er búin að vera trúðasýning af leikmönnum og þjálfurum.'
  },
  {
    id: 3,
    title: 'Alex Ferguson tíminn',
    subTitle: '1986-2013',
    description: 'Þetta var gullöldin, ég gekk með kassann út og höfuðið hátt, yfirleitt með eitthvað merkt Manchester innan handar, átti margar treyjur með fyrirliðum liðsins og gerði mikið grín af öðrum klúbbum í Englandi. Fór á völlinn og sá liðið fagna titlum'


  },
]
type HeaderProps = {
  data: typeof TITILL
}

const Header = (props: HeaderProps) => {

  return (
    <div>
      {props.data.map(item => (
        <>
          <div className='pl-6'>
            <div key={item.id} className='text-3xl font-bold text-white'>{item.title}</div>
            <div key={item.id} className='text-xl text-white'>{item.description}</div>
          </div>
        </>
      ))}
    </div>
  )
}

type ContentProps = {
  data: typeof DATA
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.data.map(item => (
        <>
          <div key={item.id} className='pl-2 pt-4 text-2xl font-bold text-white'>{item.title}</div>
          <div key={item.id} className='pl-3 text-xl font-bold text-zinc-400'>{item.subTitle}</div>
          <div key={item.id} className='pl-4 text-lg text-white'>{item.description}</div>
        </>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className=''>
      <div className='flex justify-between w-full items-end P-3 border-b-4 border-solid border-blue-400'>
        <div className='py-3'>
          <Header data={TITILL} />
        </div>
        <div>
          <Image
            src="/Roy-Keane2.png"
            width={400}
            height={400}
            alt="Manchester United captain during the golden era"
          />
        </div>
      </div>
      <div>
        <Content data={DATA} />
      </div>
    </div>
  )
}