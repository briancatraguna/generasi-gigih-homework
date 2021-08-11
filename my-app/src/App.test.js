import '@testing-library/jest-dom';
import React from 'react';
import { render,screen } from '@testing-library/react';
import SongItem from './components/SongItem/index';
import data from './utils/albumData'

for (let i = 0;i < data.length; i++){
  it(`Item ${i}: ${data[i].album.name}`,()=>{
  
    render(
      <SongItem
          status={false}
          id={"1"}
          imgUrl={data[i].album.images[0].url}
          songTitle={data[i].album.name}
          artist={data[i].artists[0].name}
          />
    )    
    
    //selectButton
    expect(screen.getByText("Select")).toBeInTheDocument();
    //imgUrl
    const albumImg = screen.getByRole('img');
    expect(albumImg).toHaveAttribute('src',data[i].album.images[0].url);
    //songTitle
    expect(screen.getByText(data[i].album.name)).toBeInTheDocument();
    //artist
    expect(screen.getByText(data[i].artists[0].name))
  });
}
