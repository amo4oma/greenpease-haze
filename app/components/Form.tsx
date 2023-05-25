

export default function From (){

    return(
        <>
            <div className="container bg-white bg-opacity-[0.5] w-[50%] rounded-2xl p-10 mr-[30px]">
                <p>A monthly donation helps us fight even harder.</p>
                <div className="w-[100%] ">
                    <button className="bg-[#66CC00] text-white w-[100px] focus:bg-[#D9D9D9] focus:text-black p-5">One-off</button>
                    <button className="focus:bg-[#66CC00] w-[100px] focus:text-white bg-[#D9D9D9] text-black p-5">Monthly</button>
                </div>
            </div>
        </>
    )
}