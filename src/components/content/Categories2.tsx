import React, { useEffect, useState } from 'react';
import Category2 from './Category2';
import axios from 'axios';

//category.name 이라는 값을 사용하는경우 타입을 정의해야한다                              
type CategoryProps = {
    name: string;
    count: number;
}

const Categories2: React.FC = () => {
    const [selected, setSelected] = useState('All');
    const handleSelected = (name: string) => {
        setSelected(name);
    }
    // 객체는 타입 지정 시 제너릭 사용 => useState<CategoryProps[]>([])
    const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);
    useEffect(() => {
        axios('data/category.json')
            .then(res => setCategoryList(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <ul className="categories">
            {categoryList && categoryList.map((category) =>
                <li>
                    <Category2 category={category}
                        click={handleSelected}
                        style={category.name === selected ?
                            'category category--selected'
                            : 'category'} />
                </li>
            )}
        </ul>
    );
}

export default Categories2;