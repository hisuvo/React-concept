import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
const FAQ = ({ id, faqtion, answer }) => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = (tgl) => {
        setToggle(tgl)
    }

    return (
        <div>
            <section className="p-4 mb-4 bg-gray-50 border-2 rounded-lg">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold">{faqtion}</h2>
                    <button onClick={() => handleToggle(!toggle)} className="text-2xl font-bold">
                        {
                            toggle ?
                                <CiCircleMinus /> :
                                <CiCirclePlus />
                        }


                    </button>
                </div>
                <div>
                    {
                        toggle && <p className="text-lg mt-4">{answer}</p>
                    }
                </div>
            </section>
        </div>
    );
};

export default FAQ;