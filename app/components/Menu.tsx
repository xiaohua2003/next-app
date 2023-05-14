import Link from 'next/link';

const Menu = () => {
    return ( 
    <div className="fixed top-0 right-0  w-full flex justify-center pt-4 mb-32">
        <div className="w-2/4 flex justify-end space-x-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/comment">Comment</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </div> );
}
 
export default Menu;