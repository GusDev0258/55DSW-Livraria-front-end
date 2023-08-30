import {ComponentProps, Component} from 'react';
import { LuPhoneCall, LuMail, LuInstagram, LuLinkedin } from 'react-icons/lu'
export type InformationHeaderProps = ComponentProps<'div'> 

export default class InformationHeader extends Component<InformationHeaderProps> {
  public render() {
    return (
      <>
       <div className='bg-zinc-950 text-sm text-zinc-50 flex items-center justify-around h-9 w-screen'>

        <div className='information-container flex justify-center items-center gap-6'>
          <div className='flex items-center justify-center gap-1'>
          <LuPhoneCall className='mr-2'/>
          <a href='tel:+55 99 99999-9999'><p>+55 (99) 99999-9999</p></a>
          </div>
          <div className='flex items-center justify-center gap-1'>
          <LuMail className='mr-2'/>
          <a href='mailTo: info@lgc.com'><p>info@lgc.com</p></a>
          </div>
        </div>
        <div className='social-media-container flex items-center justify-center'>
          <a href='https://www.instagram.com' className='p-4' target='_blank'><LuInstagram className='mr-2'/></a>
          <a href='https://www.linkedin.com' className='p-4' target='_blank'><LuLinkedin className='mr-2'/></a>
        </div>
       </div>
      </>
    );
  }
}
