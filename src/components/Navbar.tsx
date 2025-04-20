const Navbar = () => {
    return (
        <nav className="shadow-md p-4" style={{ backgroundColor: '#00B4B6' }}>
            <div className="container mx-auto flex justify-between items-center">
                <div style={{ color: '#FF6F61' }} className="text-2xl font-extrabold tracking-wide">
                    CandieCo
                </div>
                <div className="space-x-6">
                    <a href="#" style={{ color: '#333333' }} className="hover:text-[#FF6F61] font-medium">Home</a>
                    <a href="#" style={{ color: '#333333' }} className="hover:text-[#FF6F61] font-medium">Shop</a>
                    <a href="#" style={{ color: '#333333' }} className="hover:text-[#FF6F61] font-medium">Cart</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
