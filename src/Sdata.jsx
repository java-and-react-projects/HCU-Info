

import web from '../src/Images/scis.jpeg';
import app from '../src/Images/mba.png';
import sale from '../src/Images/math.jpg';
import mar from '../src/Images/IGM.jpg';
import bank from '../src/Images/lifeScience.jpg';
import soft from '../src/Images/research.jpg';


const Sdata =[
    {
        imgsrc:web,
        title: "School of Computer and Information Sciences",
        visit:"/scis",
    },
    {
        imgsrc:mar,
        title: "Indira Gandhi Memorial Library",
        visit:"/igm",
    },
   
    {
        imgsrc:app,
        title: "School Of Management Studies",
        visit:"/mba",
    },
    
    {
        imgsrc:sale,
        title: "School of Mathematics & statistics",
        visit:"/mathmetics",
    },
    {
        imgsrc:soft,
        title: "Research and  Innovation",
        visit:"/research",
    },
    {
        imgsrc:bank,
        title: "School of Life Sciences",
        visit:"/lifescience",
    },
]
export default Sdata;