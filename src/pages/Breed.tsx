import React from 'react';
import { Center } from '../components/Center';
import { useParams } from "react-router-dom";

export function Breed() {
  const { breed } = useParams();
  
  return (
    <Center>
      <h1>{(breed) ? breed : "asd"}</h1>
    </Center>
  )
}
