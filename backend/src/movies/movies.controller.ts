import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common"
import { MoviesService } from "./movies.service"
import { CreateMovieDto } from "./dto/create-movie.dto"

@Controller("movies")
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAll()
  }

  @Get("tmdb")
  async getTmdb(
    @Query("title") @Query("primary_release_year") title: string,
    year: number,
  ) {
    return await this.moviesService.getTmdb(title, year)
  }

  @Get("omdb")
  async getOmdb(@Query("title") title: string) {
    return await this.moviesService.getOmdb(title)
  }

  @Get("/preview")
  getMovie(@Query("title") title: string, @Query("year") year: number) {
    return this.moviesService.preview(title, year)
  }

  // @Post("/seed")
  // seed() {
  //   return this.moviesService.seed()
  // }

  @Post()
  postMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.postMovie(createMovieDto)
  }

  @Delete()
  deleteMovie(@Body("id") id: string) {
    return this.moviesService.deleteMovie(id)
  }
}
