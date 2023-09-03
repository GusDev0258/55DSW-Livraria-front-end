import Woman from '../../../../assets/woman-hd.jpg';
import Library from '../../../../assets/white-library-2.jpg';
import Logo from '../../../../assets/logo2.svg';
export const Login = () => {
  return (
    <div className='flex items-center justify-center w-full h-[48rem] rounded-md'>
      <div className='w-[1200px] h-[720px] bg-slate-50 grid grid-cols-2 items-center justify-center rounded-lg shadow-lg'>
        <section className='h-full w-full flex items-center justify-center' style={{
          backgroundImage: `url(${Library})`,
        }}>
          <img src={Woman} alt="" width='440' height='620' className='rounded-md shadow-md'/>
        </section>
        <section className='w-full h-full bg-slate-50 p-10 flex flex-col items-center justify-center'>
          <div className='h-[520px] w-[440px] flex items-center justify-center bg-slate-50 flex-col gap-4'>
          <img src={Logo} alt="" width='200' height='200' className=''/>
            <h1 className='text-4xl font-bold text-zinc-600'>Login</h1>
            <p className='text-xs text-zinc-400'>Entre para poder cadastrar livros e realizar compras</p>
            <div className='mt-5'>
              <form action="" className='flex flex-col items-center justify-center gap-4'>
                <input type="text" placeholder='Email' className='w-80 h-10 bg-transparent border-solid border-2 border-emerald-400 rounded-md p-4 my-2'/>
                <input type="password" placeholder='Senha' className='w-80 h-10 bg-transparent border-solid border-2 border-emerald-400 rounded-md p-4 my-2'/>
                <button className='w-80 h-10 bg-emerald-300 rounded-md text-emerald-500 font-bold'>Entrar</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      </div>
  );
};

export default Login;
