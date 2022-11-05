import Link from 'next/link';
import Button from '../Button';
type Props = {
    img: string,
    size : string,
    introText : string,
    link: string
}

function TopicCard({img,size,introText,link}: Props) {
    return (
        <div className={`h-[156px] overflow-hidden group relative cursor-pointer rounded-[10px] text-center ${size} hover:shadow-blue  hover:scale-105 ase-linear duration-300`}>
            <img className='absolute rounded-[10px] w-full z-1 h-[100%]'  src={img} alt="hehe"  />
            <div className="z-50 text-black bg-white absolute  rounded-[10px] p-1 text-xs translate-y-[-100%] group-hover:translate-y-[0%] duration-500 ">
                <p className='p-1' >{introText}</p>
                <Link href={`/${link}`}><Button size="w-full">Géc gô</Button></Link>
            </div>
          
        </div>
    );
}

export default TopicCard;