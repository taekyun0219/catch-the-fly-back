import { Body, Controller, Get, Param, Post, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

// Types
type Difficulty = 'easy' | 'medium' | 'hard';

interface GameRecord {
  username: string;
  difficulty: Difficulty;
  time: number;
}

interface Ranking {
  rank: number;
  username: string;
  time: number;
}

// DTOs
class SaveTimeDto {
  username: string;
  difficulty: Difficulty;
  time: number;
}

@Controller()
export class AppController {
  private gameRecords: GameRecord[] = [];

  constructor(private readonly appService: AppService) {}

  @Post('save-time')
  saveTime(@Body() saveTimeDto: SaveTimeDto) {
    // Validate difficulty
    if (!['easy', 'medium', 'hard'].includes(saveTimeDto.difficulty)) {
      throw new BadRequestException('유효하지 않은 난이도입니다.');
    }

    // Validate time
    if (typeof saveTimeDto.time !== 'number' || saveTimeDto.time <= 0) {
      throw new BadRequestException('유효하지 않은 시간입니다.');
    }

    // Save record
    this.gameRecords.push(saveTimeDto);

    // Calculate rank
    const currentRank = this.gameRecords
      .filter(record => record.difficulty === saveTimeDto.difficulty)
      .sort((a, b) => a.time - b.time)
      .findIndex(record => 
        record.username === saveTimeDto.username && 
        record.time === saveTimeDto.time
      ) + 1;

    return {
      message: '시간이 성공적으로 저장되었습니다.',
      rank: currentRank
    };
  }

  @Get('rankings/:difficulty')
  getRankings(@Param('difficulty') difficulty: Difficulty) {
    // Validate difficulty
    if (!['easy', 'medium', 'hard'].includes(difficulty)) {
      throw new BadRequestException('유효하지 않은 난이도입니다.');
    }

    // Get top 5 rankings for the specified difficulty
    const rankings: Ranking[] = this.gameRecords
      .filter(record => record.difficulty === difficulty)
      .sort((a, b) => a.time - b.time)
      .slice(0, 5)
      .map((record, index) => ({
        rank: index + 1,
        username: record.username,
        time: record.time
      }));

    return {
      difficulty,
      rankings
    };
  }
}
