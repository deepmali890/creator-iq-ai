'use client';

import React from 'react';
import styled from 'styled-components';

const reviews = [
    {
        name: 'Alice Kumar',
        title: 'UI/UX Designer',
        message: 'This platform helped me streamline my entire learning journey. The interface is super intuitive and smooth.',
    },
    {
        name: 'Ravi Singh',
        title: 'Frontend Developer',
        message: 'I was able to track my skills and progress easily. The personalized recommendations are a game-changer!',
    },
    {
        name: 'Nisha Patel',
        title: 'Data Analyst',
        message: 'Finally found a tool that actually adapts to my learning pace. I feel more confident preparing for interviews.',
    },
    {
        name: 'Mohit Verma',
        title: 'Software Engineer',
        message: 'Super impressed with the clean design and AI features. I use it daily to stay updated with my learning goals.',
    },

];

const ReviewSection = () => {
    return (
        <>
            <div className=" text-center py-5 text-4xl font-bold">What People Are Saying</div>
            <CardGrid>
                {reviews.map((review, index) => (
                    <div key={index} className="card ">
                        <div className="card-header">
                            <div className="dots">
                                <span className="red" />
                                <span className="yellow" />
                                <span className="green" />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2>{review.name}</h2>
                            <h4>{review.title}</h4>
                            <p>{review.message}</p>
                        </div>
                    </div>
                ))}
            </CardGrid>
        </>
    );
};

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;

  .card {
    width: clamp(270px, 90vw, 320px);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    border: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(8px);
    color: black;
    overflow: hidden;
    transition: transform 0.3s ease;
    padding: 1.2rem;
  }

  .card:hover {
    transform: scale(1.03);
  }

  .card-header .dots {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.8rem;
  }

  .dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }

  .red { background-color: #ff605c; }
  .yellow { background-color: #ffbd44; }
  .green { background-color: #00ca4e; }

  .card-body h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .card-body h4 {
    margin: 0.3rem 0 0.8rem;
    font-size: 0.95rem;
    color: black;
  }

  .card-body p {
    font-size: 0.9rem;
    line-height: 1.4;
    color: gray;
  }

  @media (max-width: 480px) {
    padding: 1rem;

    .card {
      padding: 1rem;
    }

    .card-body h2 {
      font-size: 1.1rem;
    }

    .card-body p {
      font-size: 0.85rem;
    }
  }
`;

export default ReviewSection;
