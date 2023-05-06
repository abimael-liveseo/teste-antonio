import img01 from '../assets/img/img01.svg'
import img02 from '../assets/img/img02.svg'
import img03 from '../assets/img/img03.svg'
import img04 from '../assets/img/img04.svg'
import img05 from '../assets/img/img05.svg'
import img06 from '../assets/img/img06.svg'
function ImagemLista() {
    return (
        <div>
            <div className="flex flex-col w-full">
                <img src={img01} alt="" />
            </div>
            <div className="flex flex-col w-full">
                <img src={img02} alt="" />
            </div>
            <div className="flex flex-col w-full">
                <img src={img03} alt="" />
            </div>
            <div className="flex flex-col w-full">
                <img src={img04} alt="" />
            </div>
            <div className="flex flex-col w-full shadow-lg">
                <img src={img05} alt="" />
            </div>
            <div className="flex flex-col w-full shadow-md">
                <img src={img06} alt="" />
            </div>
        </div>
    )
}

export default ImagemLista
