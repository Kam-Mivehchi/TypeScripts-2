import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'

const Navigation = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <nav className='w-2/3 hidden lg:flex justify-between mx-auto py-10 items-start  text-white pb-4'>


                <div className="flex flex-col items-end pt-2">

                    <Link className='mx-1 text-3xl font-black leading-5' to="/">TypeScripts </Link>
                    <Link className='mx-1 text-3xl font-black text-pink-500' to="/">2.0</Link>
                </div>
                <div className='flex  text-2xl h-full font-medium' id="navLinks">
                    <Link className='mx-6 my-2' to="/type">Type!</Link>
                    <Link className='mx-6 my-2' to="/highscore">Highscores</Link>
                    <Link className='ml-4 bg-pink-500 mt-2  px-6 pt-1 rounded text-xl' to="/login">Login</Link>
                </div>

            </nav>
            <nav className='w-11/12 flex lg:hidden justify-between mx-auto pt-6 items-start text-white pb-4'>
                <div className="flex flex-col items-end pt-3">

                    <Link className='mx-1 text-2xl font-black leading-5' to="/">TypeScripts </Link>
                    <Link className='mx-1 text-2xl font-black text-pink-500' to="/">2.0</Link>
                </div>

                <div className="flex items-center" >
                    <Link className='mx-1 px-3  mt-1 font-black bg-pink-500 rounded' to="/login">Login</Link>

                    <Hamburger className="" toggled={isOpen} toggle={setOpen} onToggle={toggled => {
                        if (toggled) {
                            // open a menu
                            document.getElementById('dropdown').classList.remove('hidden')
                        } else {
                            // close a menu
                            document.getElementById('dropdown').classList.add('hidden')
                        }
                    }} />
                    <div className='mx-4 hidden absolute top-16 right-10 grid grid-col-1 border rounded-8' id="dropdown">
                        <Link className='mx-1 border-b' to="/type" onClick={() => {
                            document.getElementById('dropdown').classList.add('hidden');
                            setOpen(false)
                        }}>Type!</Link>
                        <Link className='mx-1 border-b' to="/highscore" onClick={() => {
                            document.getElementById('dropdown').classList.add('hidden')
                            setOpen(false)
                        }}>Highscores</Link>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navigation