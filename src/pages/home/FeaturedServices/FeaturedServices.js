import React from 'react';
import cn from './FeaturedServices.module.scss';
import CosmeticDentistry from 'assets/home/services/cosmetic_dentistry.png';
import ImplantRestoration from 'assets/home/services/implant_restoration.png';
import RemovableProstho from 'assets/home/services/removable_prosthodontics.png';
import RestorativeDentistry from 'assets/home/services/restorative_dentistry.png';

const FeaturedServices = () => {
  return (
    <>
      <div className={cn.FeaturedServices}>
        <div className={cn.Text}>
          <span className={cn.Header}>FEATURED SERVICES</span>
          <hr className={cn.Break}></hr>
          <span className={cn.Caption}>Handcrafted artistry meets cutting-edge dentistry</span>
        </div>

        <div className={cn.Images}>
          <img src={RestorativeDentistry}></img>
          <img src={RemovableProstho}></img>
          <img src={CosmeticDentistry}></img>
          <img src={ImplantRestoration}></img>
        </div>
      </div>
    </>
  )
}

export default FeaturedServices