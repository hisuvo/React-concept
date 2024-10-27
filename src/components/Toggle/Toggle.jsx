import { useState } from "react"

const Toggle = () => {
    const [toggle, setToggle] = useState(true)

    console.log(toggle)

    return (
        <>
            <div className="min-h-[15rem] border-2 m-4 flex justify-center items-center">
                {
                    toggle && (
                        <p className="p-4 bg-teal-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione sequi distinctio alias ipsum voluptate dolorem tenetur reprehenderit vel dolor. Ipsam explicabo, totam tempore autem officiis distinctio consequuntur! Maiores repellendus id nisi dignissimos odio!
                        </p>
                    )
                }
            </div>
            <div className="flex justify-center font-bold items-center gap-2">
                <button onClick={() => { setToggle(!toggle) }} className="toggle_btn ">Show</button>
            </div>
        </>
    )
}

export default Toggle