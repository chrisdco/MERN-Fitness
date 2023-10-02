import React from 'react';
import Card from './Card'; // Adjust the path based on your folder structure

const WorkoutSlogans = () => {
  const slogans = [
    {
      slogan: 'From Sets to Success: ',
      description: 'Log Workouts, Achieve Greatness.',
      image: 'https://th.bing.com/th/id/R.3f4b4a586fde096f04f3b5d4709a0f4f?rik=A9tbZoSstjUm1Q&riu=http%3a%2f%2fglendalecherrycreek.com%2fwp-content%2fuploads%2f2018%2f10%2fFunctional-Strength-Training.jpg&ehk=6LQ396QBK1AfWobPUOnl%2f6QPCtrx%2fe56uRtHWS8gdQ8%3d&risl=&pid=ImgRaw&r=0', // Replace with the actual image path
    },
    {
      slogan: 'Maximize Movements, Optimize Nutrition:',
      description: 'Power Your Progress.',
      image: 'https://th.bing.com/th/id/OIP.sHNJvkR9xH7bgLssHWEyFAHaE8?pid=ImgDet&rs=1', // Replace with the actual image path
    },
    {
      slogan: 'Log Your Lifts, Fuel Your Gains:',
      description: 'Elevate Your Fitness Journey.',
      image: 'https://canyonechoes.org/wp-content/uploads/2019/02/yoga-1.jpg', // Replace with the actual image path
    },
  ];

  return (
    <section className="workout-slogans">
      <div className="card-container">
        {slogans.map((slogan, index) => (
          <Card
            key={index}
            slogan={slogan.slogan}
            description={slogan.description}
            image={slogan.image}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkoutSlogans;
