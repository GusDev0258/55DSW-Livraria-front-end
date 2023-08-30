import React, { Component } from 'react'
import { LuSearch } from 'react-icons/lu'


type Props = React.ComponentProps<'input'>


export default class SearchBar extends Component<Props> {

  render() {
    return (
      <div className='flex items-center relative w-96'>
        <input className='h-10 w-full bg-zinc-200 text-zinc-600 text-base rounded-xl p-4 px-4 placeholder:text-zinc-400 placeholder:px-1 outline-none focus:border-2 focus:border-emerald-400' {...this.props}/>
        <LuSearch className='absolute right-4 text-zinc-400' size='16px' />
      </div>
    )
  }
}