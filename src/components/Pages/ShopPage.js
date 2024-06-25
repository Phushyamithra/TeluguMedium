import React, { useEffect } from 'react';
import '../../styles/shoppage.css';
import TemplatePage from './TemplatePage.js';
import tee_side from '../../Assets/shop-assets/tee_side.png';
import shirt_side from '../../Assets/shop-assets/shirt_side.png';
import sweat_side from '../../Assets/shop-assets/sweat_side.png';
import hoodie_side from '../../Assets/shop-assets/hoodie_side.png';
import bg from '../../Assets/bg-assets/wall2.jpg';
import dropImage1 from '../../Assets/shop-assets/drop_2.jpg';
import dropImage2 from '../../Assets/shop-assets/drop_3.jpg';
import dropImage3 from '../../Assets/shop-assets/drop_4.jpeg';
import Slider from '../UI/Slider.js';

// Import ColorThief here
import ColorThief from 'colorthief';

const ShopPage = () => {
    useEffect(() => {
        const categoryItems = document.querySelectorAll('.category-item');

        categoryItems.forEach(item => {
            const img = item.querySelector('img');
            if (img.complete) {
                applyStyles(img, item);
            } else {
                img.addEventListener('load', () => {
                    applyStyles(img, item);
                });
            }
        });

        function applyStyles(img, item) {
            const colorThief = new ColorThief();
            const dominantColor = colorThief.getColor(img);
            const luminance = getLuminance(dominantColor);
            const textColor = luminance > 0.5 ? '#000' : '#fff';

            item.style.backgroundColor = `rgb(${dominantColor.join(',')})`;
            item.querySelector('h3').style.color = textColor;
        }

        function getLuminance(color) {
            const [r, g, b] = color.map(c => c / 255.0);
            const a = [r, g, b].map(v => {
                if (v <= 0.03928) {
                    return v / 12.92;
                }
                return Math.pow((v + 0.055) / 1.055, 2.4);
            });
            return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
        }
    }, []);

    const dropImages = [
        { img: dropImage1, name: 'Batman' },
        { img: dropImage2, name: 'Rocky' },
        { img: dropImage3, name: 'Spiderverse' }
    ];

    return (
        <>
            <TemplatePage src={bg} type='image'>
                <div className="shop-content">
                    <h2 className='headings'>Categories</h2>
                    <section className="categories">
                        <div className="category-item">
                            <h3 >Hoodies</h3>
                            <img src={hoodie_side} alt="Hoodies" />
                        </div>
                        <div className="category-item">
                            <h3>Sweatshirts</h3>
                            <img src={sweat_side} alt="Sweatshirts" />
                        </div>
                        <div className="category-item">
                            <h3>Shirts</h3>
                            <img src={shirt_side} alt="Shirts" />
                        </div>
                        <div className="category-item">
                            <h3>Tees</h3>
                            <img src={tee_side} alt="Tees" />
                        </div>
                    </section>
                    <h2 className='headings'>Drops</h2>
                    <section className="drops">
                        <Slider slides={dropImages} />
                    </section>
                </div>
            </TemplatePage>
        </>
    );
};

export default ShopPage;
