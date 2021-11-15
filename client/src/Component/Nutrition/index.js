import React from 'react'
import NutritionCarousel from './NutritionCarousel';
import NutritionHeroCarousel from './NutritionHeroCarousel';
import NutritionCard from './NutritionCard';

function Nutrition() {
    return (
        <div className='px-3 lg:px-10 pb-5' >
            <NutritionHeroCarousel/>
            <div className='my-6 ' >
                <NutritionCarousel/>
            </div>
            <div className="flex flex-wrap">
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
      </div>
        </div>
    )
}

export default Nutrition
