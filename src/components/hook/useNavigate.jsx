import { useNavigate } from "react-router-dom"
export const useNav = (initial)=>{
    const navigate = useNavigate()
    const BtnGoBackHandler = (event)=>{
        event.preventDefault()
        navigate( initial || '/product')
    }
    return{
        BtnGoBackHandler
    }
} 