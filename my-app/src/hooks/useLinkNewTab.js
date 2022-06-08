import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
    const ref = useRef(null);
    useEffect(() => {
        console.log(ref.current);
        const links = ref.current.querySelectorAll("a");
        links.length > 0 && links.forEach(element => {
            element.setAttribute("target","_blank");
        });
    },[]);
    return{
        blogRef : ref
    }
}