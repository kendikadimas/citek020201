import React from 'react';
import Card2 from './Card2';
import FoodCycle from '../assets/FoodCycle.png';
import FoodSharing from '../assets/FoodSharing.png';
import EduWise from '../assets/EduWise.png';

/**
 * Komponen ProgramWise menampilkan tiga program utama dari Food Wise
 * Masing-masing program diwakili oleh komponen Card2
 * dengan properti image, title, description, followers, dan status
 */
const ProgramWise = () => {
    return (
        <section className="flex flex-wrap justify-center gap-4 p-5">
            <Card2
                image={FoodCycle}
                title="Food Cycle"
                description="Merupakan sebuah program daur ulang produk dari sisa makanan"
                followers="350"
                status="Best Program"
            />
            <Card2 
                image={FoodSharing}
                title="Food Sharing"
                description="Program volunteer dari kolaborasi komunitas untuk berbagi makanan"
                followers="232"
                status=""
            />
            <Card2 
                image={EduWise}
                title="Edu Wise"
                description="Berisi konten edukasi tentang pentingnya kesadaran Food Waste di masyarakat"
                followers="187"
                status=''
            />
        </section>
    );
};

export default ProgramWise;
