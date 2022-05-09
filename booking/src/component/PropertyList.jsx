import React from 'react'
import useFetch from '../context/useFetch'

function PropertyList() {
    const {data,loading} = useFetch('http://localhost:8000/api/hotel/countByType')
    const images =[
        'https://static-ssl.businessinsider.com/image/5527f47fdd0895c44f8b459e-1423/chl-river-suite-bedroom-cmyk-mr.jp2',
        'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/03/trump-hotel-chicago-illinois-usa.jpg',
        'https://media.gq-magazine.co.uk/photos/5d139b394858d31acf005393/master/w_1920,h_1280,c_limit/Westminster-Suite-04-GQ-7Sep16_b.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojTHvCbg-xrJJJ3hG4BczJd3FKbAc7DyOhfiNlsqqyD-rKI58ThXR_qdR655yN1PzWu4&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_4w4tQ8JVcEdOAzkc4KNZqJdeUyDnC9Ns4ESiVMXuioS56kH2fAF8JNoqa07CBdtDBo&usqp=CAU'
    ]

  return (
    <div className='pList'>
        {loading ? "Loading wait":(

        <>
        {data && images.map((img,i)=>(
            <div className="plistItem" key={i}>
            <img src={img} alt='ddd' className='pListImg'/>
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h4>{data[i]?.count} {data[i]?.type}</h4>
                </div>
            </div>
        ))}
        </>
        )}
        </div>
  )
}

export default PropertyList