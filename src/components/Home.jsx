import React from 'react'

import { Carousel, Typography, Button } from "@material-tailwind/react";
import {Link } from 'react-router-dom';
import Loader from './Loader';

export default function Home() {
  return (
    <div>
      <Carousel className="rounded-xl w-fit m-auto mt-10 border border-amber-200 shadow-amber-200 shadow-2xl ">
        <div className="relative ">
          <img
              src='https://images.squarespace-cdn.com/content/v1/52d6d1ede4b0b322e9c7a2ea/1585757840597-2O3BWHS9NZJOPRKOO8ST/reddit.jpg?format=2500w'
              alt="image 1"
            className="h-fit w-fit m-auto"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Book Tickets For your Favourite Movies!
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
              Signup to book tickets for your favourite movies 
              </Typography>
              <div className="flex justify-center gap-2">
                <Link to="/login">
                <Button size="lg" color="amber">
                  Login
                </Button></Link>
                <Link to="/signup">
                <Button size="lg" color="white" variant="text">
                  Signup
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      {/* <Loader message={"please wait.."}/> */}
    </div>
  )
}
