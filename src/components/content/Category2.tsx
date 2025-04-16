import React,{useState} from 'react';
import { Category } from '@interfaces/common'

type CategoryProps = {
    category: Category; 
    style: string;
    click: (name: string) => void;
}

const Category2: React.FC<CategoryProps> = ({category,style,click}) => {
    return (
        <button className={style}
            onClick={()=>{click(category.name)}}
        >{category.name}<span className="category__count">{category.count}</span></button>
    );
}

export default Category2;