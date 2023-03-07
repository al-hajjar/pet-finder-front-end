const Hero = () => {
    return ( 
        <>
            <div className="min-h-screen bg-hero bg-cover" 
                style={{
                        paddingTop: `10px`, 
                        paddingBottom: `10px` 
                    }}
                >
                <div className="flex flex-col justify-center items-center lg:my-24 md:my-16 my-6 md:px-48 px-8 text-center">
                    <h1 className="title">One Stop Pet's Shop</h1>
                    <h2 className="md:text-3xl text-2xl text-white uppercase md:font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt.
                    </h2>
                </div>
            </div>
        </>
     );
}
 
export default Hero;