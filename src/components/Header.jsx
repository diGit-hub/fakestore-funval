import HandbagIcon from '../assets/handbag.svg'
import HeartIcon from '../assets/heart.svg'
import ShoppingCartIcon from '../assets/shopping-cart.svg'
import ProfilePicture from '../assets/profile-picture.svg'
import CategoryFilter from './CategoryFilter'
import { useNavigate, useParams } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
    const { category } = useParams()
    const handleSearch = (e) => {
        navigate(`/?search=${e.target.search.value}`)
    }
    return (
        <>
            <header className='flex justify-between items-center px-12 py-2 shadow'>
                <div className='flex gap-6'>
                    <div className='flex gap-2'>
                        <img src={HandbagIcon} alt="Logo image" />
                        <p>LUXE.</p>
                    </div>
                    <ul className="flex gap-4">
                        <CategoryFilter activeCategory={category} />
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <form className="max-w-md mx-auto" onSubmit={handleSearch}>
                        <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                                <button type="submit" className="cursor-pointer">
                                    <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                                </button>
                            </div>
                            <input type="search" id="search" className="block w-full p-3 ps-9 bg-neutral-secondary-medium rounded-2xl border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
                        </div>
                    </form>
                    <img src={HeartIcon} alt="Favorites"/>
                    <img src={ShoppingCartIcon} alt="Cart" />
                    <img src={ProfilePicture} alt="Avatar"/> 
                </div>
            </header>
        </>
    )
}
