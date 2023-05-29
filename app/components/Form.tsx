import Button from "./Button";


export default function From (){

    return(
        <>
            <div className="container bg-white bg-opacity-[0.5] w-[100%] rounded-2xl p-10 mr-[30px]">
                <p>A monthly donation helps us fight even harder.</p>
                <div className="w-[100%] grid grid-cols-2 ">
                    <button className="bg-[#66CC00] text-white w-[100%] focus:bg-[#D9D9D9] focus:text-black p-5">One-off</button>
                    <button className="focus:bg-[#66CC00] w-[100%] focus:text-white bg-[#D9D9D9] text-black p-5">Monthly</button>
       
                </div>
                <hr className="bg-[#fff] mt-3 " />
                <div className="w-[100%] grid grid-cols-3 ">
                    <button className="bg-[#66CC00] text-white w-[100%] focus:bg-[#D9D9D9] focus:text-black p-5">One-off</button>
                    <button className="focus:bg-[#66CC00] w-[100%] focus:text-white bg-[#D9D9D9] text-black p-5">Monthly</button>
       
                    <button className="focus:bg-[#66CC00] w-[100%] focus:text-white bg-[#D9D9D9] text-black p-5">Monthly</button>
       
                </div>
                <hr className="bg-[#fff] mt-3 " />
                <div className="w-[100%] grid grid-cols-1 ">
                
                    <button className="focus:bg-[#66CC00] w-[100%] focus:text-white bg-[#D9D9D9] text-black p-5">Monthly</button>
       
                </div>
                <div className="w-full text-center">
                <p className="text-[12px] text-center text-[#fff] mt-3">Greenpeace doesn’t accept money from governments or corporations. All so we can act, speak, and act independently. 
Monthly donations help us maintain our independence,
integrity, and lets us fight harder.</p>
            <Button w={100} bg={'bg-[#F36B35]'} title={'DONATE'} /> 
                </div>
 
            </div>
        </>
    )
}