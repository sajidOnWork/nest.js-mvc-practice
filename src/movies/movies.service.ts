import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private moviesRepository: Repository<Movie>,
      ) {}

      findAll(): Promise<Movie[]> {
        return this.moviesRepository.find();
      }
    
      findOne(id: string): Promise<Movie> {
        return this.moviesRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.moviesRepository.delete(id);
      }

      async addMovie(body:any){
        let newMovie = this.moviesRepository.create(body);
        this.moviesRepository.save(newMovie);
      }

      async updateMovie(body:any){
        this.moviesRepository.update(body.id,body);
      }

      async allMovie(): Promise<Movie[]> {
        return await this.moviesRepository.find();
      }

      async deleteMovie(id: any): Promise<void> {
        await this.moviesRepository.delete(id);
      }
} 
