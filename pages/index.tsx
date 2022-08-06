import type { NextPage } from 'next'
import { Button } from 'reactstrap';
import styles from 'styles/Home.module.scss'
import useLocalize from 'i18n/i18n';

import HomePageHeaderCarousel from 'components/HomePageCarousel/HomePageCarousel';
import HomePageActionCard from 'components/HomePageActionCard/HomePageActionCard'
import HomePageAppActionCard from 'components/HomePageAppActionCard/HomePageAppActionCard'
import HomePageStores from 'components/HomePageStores/HomePageStores'
import HomePageCustomerReview from 'components/HomePageCustomerReview/HomePageCustomerReview'

const Home: NextPage = () => {
  const { localize } = useLocalize();

  
  const elements = [{image: "/assets/home-page/image_11.png", HeadText: "Get Doorstep Delivery Across India.", headSubTtext: "", ImageSize:"169", button: "Order now",color: "light",ButtonColour: "bg00683D"},
  {image: "/assets/home-page/image_11.png", HeadText: "Upload prescription to order medicines", headSubTtext: "", button: "Upload now",ImageSize:"169", color: "light", ButtonColour: "bg00683D"},
  {image: "/assets/home-page/IMG-20220627-WA00131.png", HeadText: "know more about Generics", headSubTtext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, enim animi, recusandae officiis harum doloribus, optio omnis ducimus dolorem qui facilis. Ab odio molestiae obcaecati fugiat hic ex tempora neque.",ImageSize:"220", button: "Click here",  color: "bgbeige", ButtonColour: "bg89642E"},
  {image: "/assets/home-page/IMG-20220627-WA0015-removebg.png", HeadText: "Compare medicine with Generic Medicine", headSubTtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", button: "Compare now",ImageSize:"220", color: "bgFFE9EB", ButtonColour: "BgB67271"}
];
                   


  return (
    <>
      {/* <div className={styles.container}>
        <h1>{localize('welcome', { name: 'Medkart' })}</h1>
      </div> */}
      <div className='mt-2' style={{margin: '80px'}}>
        {/*  HomePageHeaderCarousel */}
        <div className=''>
          <HomePageHeaderCarousel />
        </div>

        {/* HomePageActionCard */}
        <div className='d-table w-100 mt-3'>
         <div className='d-table-cell w-50'>
       <HomePageActionCard 
       Image= {elements[0].image}
       HeadText= {elements[0].HeadText}
       ImageSize= {elements[0].ImageSize}
       button={elements[0].button}
       color= {elements[0].color}
       ButtonColour= {elements[0].ButtonColour}
       />
        </div>
        <div className='d-table-cell w-50'>
        <HomePageActionCard 
       Image= {elements[1].image}
       HeadText= {elements[1].HeadText}
       ImageSize= {elements[1].ImageSize}
       button={elements[1].button}
       color= {elements[1].color}
       ButtonColour= {elements[1].ButtonColour}
       />
        </div>
        </div>
        <div className='d-table w-100 mt-3'>
        <div className='d-table-cell w-50'>
        <HomePageActionCard 
       Image= {elements[2].image}
       HeadText= {elements[2].HeadText}
       ImageSize= {elements[2].ImageSize}
       headSubTtext= {elements[2].headSubTtext}
       button={elements[2].button}
       color= {elements[2].color}
       ButtonColour= {elements[2].ButtonColour}
       />
        </div>
        <div className='d-table-cell w-50' style={{background: "#FFE9EB"}}>
        <HomePageActionCard 
       Image= {elements[3].image}
       HeadText= {elements[3].HeadText}
       ImageSize= {elements[3].ImageSize}
       headSubTtext= {elements[3].headSubTtext}
       button={elements[3].button}
       color= {elements[3].color}
       ButtonColour= {elements[3].ButtonColour}
       />
        </div>
       </div>

        {/* HomePageStorescard */}
        <HomePageStores />

        {/* HomePageCustomerReviewcard */}
        <HomePageCustomerReview />

        {/* HomePageAppActionCard  */}
        <HomePageAppActionCard />
      </div>
    </>
  )
}

export default Home
