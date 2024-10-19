import cors from "../../../public/cors_1.jpg"
import me from "../../../public/me.jpg"
import corsBanner from "../../../public/banner/img_cors.jpg"
import cv from "../../../public/banner/cv.jpg"
import skills from "../../../public/cv/skills.png"
import edu from "../../../public/cv/education.png"
import exp from "../../../public/cv/experiences.png"
export const tabCategories =["design","astuce","story","advice","nextjs","css","javaScript"]
 const images = [
    {
        path:"/cors",
        src:cors
    },
    {
        path:"/profil",
        src:me
    },
    {
        path:"/corsBanner",
        src:corsBanner,
        isBanner:true
    },
    {
        path:"/skills",
        src:skills,
        
    },
    {
        path:"/edu",
        src:edu,
        
    },
    {
        path:"/exp",
        src:exp,
        
    },
    {
        path:"/cv",
        src:cv,
        isBanner:true
        
    },
 ]
 export default images