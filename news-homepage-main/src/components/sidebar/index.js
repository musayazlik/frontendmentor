import React from 'react'
import SidebarCard from '../sidebarCard'

const Sidebar = () => {
  return (
    <>
      <h2 className='font-bold text-6xl text-p-orange mb-10 '>New</h2>
      <div className='list'>
        <SidebarCard
          title='Hydrogen VS Electric Cars'
          text='Will hydrogen-fueled cars ever catch up to EVs?'
        />
        <SidebarCard
          title='The Downsides of AI Artistry'
          text='What are the possible adverse effects of on-demand AI image generation?'
        />
        <SidebarCard
          title='Is VC Funding Drying Up?'
          text='Private funding by VC firms is down %50 YOY. We take a look at what that means.'
        />
      </div>
    </>
  )
}

export default Sidebar
