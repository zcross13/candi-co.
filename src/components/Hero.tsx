const Hero = () => {
    return (
        <section className="hero h-screen flex items-center justify-center bg-[#F5F5F5] text-center text-[#333333]">
            <div className="hero-content">
                <h1 className="text-4xl font-bold text-[#00B4B6]">Shop the Best Purse</h1>
                <p className="text-lg mt-4">Explore our curated collection of stylish and durable purses, just for you</p>
                <button className="bg-[#FF6F61] text-white py-2 px-6 rounded-lg text-lg hover:bg-[#FF6F61]">
                    Shop Now
                </button>
            </div>
        </section>
    )
}

export default Hero;
