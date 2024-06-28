import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { tabAtom } from "../store/atoms/tabs"
import { useRecoilValue } from "recoil"

export const useTab = () => {
    const tab = useRecoilValue(tabAtom)
    const navigate = useNavigate()
    useEffect(() => {
        if(tab != "dashboard") {
            navigate(`/dashboard/${tab}`)
        }
    }, [tab])
}