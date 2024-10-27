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
        <div>
            {
                faqs.map((faq, index) => <FAQ key={index} {...faq} />)
            }
        </div>
    );
};

export default FAQS;