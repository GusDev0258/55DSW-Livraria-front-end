import {useEffect, useState} from 'react'
import { LuBookOpen, LuChevronDown } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { CategoryModel } from '../../../../domain/models/category/category-model';
import { getAllCategories } from '../../../../infra/http/request-category'

type Props = React.ComponentProps<'nav'>

export const NavBar = (props: Props) => {

  const [categoryList, setCategoryList] = useState<CategoryModel[]>([])

  useEffect(() => {
      getAllCategories().then((categories) => {
        if(categories) {
          setCategoryList(categories);
        }
      }).catch((error) => {
        console.error("Erro ao buscar categorias", error);
      });
  }, []);

  function handleCategoryShow(): void {
    document.querySelector('.category-nav')?.classList.toggle('hidden')
  }

    return (
      <nav className='grid grid-cols-3 h-14 w-full bg-zinc-50 text-zinc-600' {...props}>
        <section className='flex items-center justify-center relative'>
          <button type='button' className='px-4 py-2 bg-emerald-600 text-zinc-200 font-bold rounded-md flex items-center justify-center gap-2 hover:bg-emerald-800 hover:text-zinc-100' onClick={handleCategoryShow}>
            Categorias
            <LuChevronDown size='16px' /> 
          </button>
          {categoryList && (
            <div className='hidden category-nav absolute w-auto top-14 left-8' onMouseLeave={handleCategoryShow}>
            <ul className='top-7 w-auto h-auto grid grid-cols-5
             bg-zinc-50 text-zinc-600 text-base items-center justify-start gap-2 border-2 border-emerald-600 border-solid rounded-md'>
              {categoryList.map((category) => (
                <li key={category.id} className='p-2 m-2 h-auto hover:bg-emerald-600 hover:text-zinc-100 text-sm cursor-pointer rounded text-center' ><Link to={`/book/category/${category.id}`}>
                {category.name}</Link> </li>
              ))}
            </ul>
            </div>
          )}
        </section>
        <ul className='flex items-center justify-center gap-3'>
          <li ><Link className='p-4 hover:bg-emerald-600 hover:text-zinc-100 rounded' to={'/'}>Home</Link></li>
          <li ><Link className='p-4 hover:bg-emerald-600 hover:text-zinc-100 rounded' to={'/books'}>Livros</Link></li>
          <li ><Link className='p-4 hover:bg-emerald-600 hover:text-zinc-100 rounded' to={'/contact'}>Fale Conosco</Link></li>
          <li ><Link className='p-4 hover:bg-emerald-600 hover:text-zinc-100 rounded' to={'/about'}>Sobre nós</Link></li>
        </ul>
        <section className='flex items-center justify-center gap-2'>
          <div className='bg-transparent border-2 border-emerald-600 border-solid rounded-full p-1 text-emerald-700'>
          <LuBookOpen size='24px'/>
          </div>
          <div className='flex flex-col items-center justify-center text-sm text-emerald-600 font-bold'>
            <span>A leitura transforma vidas</span>
            <span className='text-xs text-zinc-600 self-start'>Leia sempre!</span>
          </div>
        </section>
      </nav>
    )
  }

export default NavBar