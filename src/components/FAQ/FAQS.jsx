import { useEffect, useState } from "react";
import FAQ from "./FAQ";

const FAQS = () => {
    const [faqs, serFaqs] = useState([])

    useEffect(() => {
        fetch("./faq-data.json")
            .then(res => res.json())
            .then(data => serFaqs(data))
    }, [])

    return (
        <div className="max-w-[700px] mx-auto p-6 border bg-gray-100 md:mt-16">
            <h2 className="text-2xl font-bold mb-6">FAQS:</h2>
            {
                faqs.map((faq, index) => <FAQ key={index} {...faq} />)
            }
        </div>
    );
};

export default FAQS;