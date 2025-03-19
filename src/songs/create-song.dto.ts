import { Injectable } from '@nestjs/common';
import { title } from 'process';

// create songs dan update songs 

export class CreateSongDTO {
    title : string;
    artist : string;
    
}