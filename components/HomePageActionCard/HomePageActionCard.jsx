import React from 'react'
import Image from 'next/image'
import styles from './HomePageActionCard.module.scss'

export default function HomePageActionCard(props) {
 const background = props.color
  return (
    <>
         <div  className= {`${props.color}`}>
          <div className='d-flex'>
            <div className={`${styles.Image_size}`}>
            <img
             src={props.Image}
             width={props.ImageSize}
             height={props.ImageSize}
            //  height={100}
             layout="responsive"
             objectFit="contain"
             />
             </div>
            <div className={`${styles.ml_15} pl-4`}>
                <div className={`${styles.head_text} mt-4`}>{props.HeadText}</div>
                <div className={`${styles.headSub_text} mt-3 mb-1`}>
                     {props.headSubTtext}
                    </div>
                <div>
                    <button className= {`${styles.ActionCard_btn, props.ButtonColour} mt-3 mb-4`}>{props.button}</button>
                </div>
            </div>
          </div>
        </div>
     </>
  )
}
