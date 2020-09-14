import Layout from '../components/newlayout';
import { gallerydb } from './gallery_img';
import { cloneDeep } from 'lodash';
export default function Gallery() {
    const [showPopup, setShowPopup] = React.useState(false);
    const [currentImgInfo, setCurrentImgInfo] = React.useState('');
    const [data, setData] = React.useState(gallerydb);
    const handleClick = (e, item, idx) => {
        setShowPopup(true);
        setCurrentImgInfo({ item:item, idx:idx });
    }

    const sliderHandler = (e, action) => {
        const gallerydb= cloneDeep(data);
        const getCount = gallerydb.length-1;
        const getCurrentIdx = currentImgInfo.idx;
        if (action == 'prev') {
            if (getCurrentIdx !== 0) {
               setCurrentImgInfo({ item: gallerydb[getCurrentIdx - 1], idx: getCurrentIdx - 1 })
            } else {
                setCurrentImgInfo({ item: gallerydb[getCount], idx: getCount });
            }
        } else {
            if (getCurrentIdx == getCount) {
                setCurrentImgInfo({ item: gallerydb[0], idx: 0 });
                
            } else {
                setCurrentImgInfo({ item: gallerydb[getCurrentIdx+1], idx: getCurrentIdx+1 });
            }
        }
    }
    return (
        <React.Fragment>
            <Layout>
                <div className="grid grid-flow-col-3 grid-cols-3 gap-4 px-20 py-10">
                    {gallerydb.map((item, idx) => (
                        <div className="rounded overflow-hidden shadow-lg h-64">
                            <img src={`/gallery/${item.src}`} style={{ 'width': '100%', 'height': '100%', 'cursor': 'pointer' }} onClick={(e) => { handleClick(e, item, idx) }} />
                        </div>))}
                </div>

                {showPopup ?

                    (<div class="grid grid-cols-1 w-full max-w-full z-1 top-0 r-0 l-0 h-screen fixed bg-gray-100">
                        <div className="m-auto w-3/4 p-4">
                            <div className=" w-3/4 absolute flex justify-end">

                        <button className="mr-8 focus:outline-none" onClick={()=>{ setShowPopup(false)}}  >
                                    <img src={`/images/close.png`} />
                                </button>
                            </div>
                            <div className="btnGroup flex justify-between  h-screen absolute w-3/4 mt-20 p-4 ">
                                <button onClick={(e) => { sliderHandler(e, 'prev') }} className="outline-none focus:outline-none">
                                    <img src={`/images/leftarrow.png`} />
                                </button>
                                <button className="mr-6 outline-none focus:outline-none" onClick={(e) => { sliderHandler(e, 'next') }} >
                                    <img src={`/images/rightarrow.png`} />
                                </button>
                            </div>
                            <div className="h-screen shadow ease-in">
                                <img src={`/gallery/${currentImgInfo.item.src}`} style={{ 'width': '100%', 'height': '100%' }} />
                            </div>
                        </div>
                    </div>)
                    : null}
            </Layout>
        </React.Fragment>
    )
}