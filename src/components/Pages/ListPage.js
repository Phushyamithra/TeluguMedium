import React, { useState, useEffect } from 'react';
import '../../styles/listpage.css';
import TemplatePage from './TemplatePage';
import tee from '../../Assets/clothes/ph31.jpeg';
import Card from '../UI/Card';
import bg from '../../Assets/bg/listpage.jpg';
import axios from 'axios';
import items from '../Data/items';


const ListPage = ({ category }) => {
    const [products, setProducts] = useState(items);
    console.log(products);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [sortOption, setSortOption] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             setIsLoading(true);
    //             const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category}/products`);
    //             setProducts(response.data);
    //         } catch (error) {
    //             console.log("Something is messed up while fetching data", error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchProducts();
    // }, [category]);

    const handleFilterChange = (filterCategory, filterValue) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterCategory]: prevFilters[filterCategory]?.includes(filterValue)
                ? prevFilters[filterCategory].filter((value) => value !== filterValue)
                : [...(prevFilters[filterCategory] || []), filterValue],
        }));
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const filteredProducts = products.filter(product => {
        return Object.keys(selectedFilters).every(key =>
            !selectedFilters[key].length || selectedFilters[key].includes(product[key])
        );
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOption === 'price-asc') {
            return a.price - b.price;
        } else if (sortOption === 'price-desc') {
            return b.price - a.price;
        } else {
            return 0;
        }
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const filters = {
        'Product Type': ['Bomber Neck Polos', 'Mandarin Polos', 'Men Rugby Polos', 'Oversized Polos', 'Polos', 'Zipper Polos'],
        'Themes': ['DC Comics', 'Deadpool', 'Dungeons & Dragons', 'FC Barcelona', 'Harry Potter', 'ISRO', 'Looney Tunes', 'Manchester City FC', 'Marvel', 'Minions'],
    };

    const sortOptions = [
        { value: '', label: 'Default' },
        { value: 'price-asc', label: 'Price: Low to High' },
        { value: 'price-desc', label: 'Price: High to Low' },
    ];


    return (
        <TemplatePage src={bg} type='image'>
            <div className="listpage-container">
                <div className="filters-container">
                    {Object.keys(filters).map(filterCategory => (
                        <div key={filterCategory} className="filter-category">
                            <h4 className="filter-title">{filterCategory}</h4>
                            {filters[filterCategory].map(filterValue => (
                                <div key={filterValue} className="filter-option">
                                    <input
                                        type="checkbox"
                                        className="filter-checkbox"
                                        checked={selectedFilters[filterCategory]?.includes(filterValue) || false}
                                        onChange={() => handleFilterChange(filterCategory, filterValue)}
                                    />
                                    <label>{filterValue}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="products-container">
                    <div className="sorting-container">
                        <div>
                            <select
                                value={sortOption}
                                onChange={handleSortChange}
                                className="sort-select"
                            >
                                {sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="product-cards-container">
                        {sortedProducts.map(product => (
                            <Card key={product.id} image={product.image} title={product.title} price={product.price}></Card>
                        ))}
                    </div>
                </div>
            </div>
        </TemplatePage>
    );
};

export default ListPage;
