import HandbagIcon from '../assets/handbag.svg'
import HeartIcon from '../assets/heart.svg'
import ShoppingCartIcon from '../assets/shopping-cart.svg'
import ProfilePicture from '../assets/profile-picture.svg'

export default function Header() {
    return (
        <>
            <header className='flex justify-between items-center px-12 py-2 shadow'>
                <div className='flex gap-6'>
                    <div className='flex gap-2'>
                        <img src={HandbagIcon} alt="Logo image" />
                        <p>LUXE.</p>
                    </div>
                    <ul className='flex gap-4'>
                        <a>Electronics</a>
                        <a>Jewelry</a>
                        <a>Men's</a>
                        <a>Women's</a>
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <form class="max-w-md mx-auto">
                        <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                            </div>
                            <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium rounded-2xl border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
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
