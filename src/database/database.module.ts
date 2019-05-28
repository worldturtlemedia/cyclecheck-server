import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'
import { PlaceEntity } from '../location/place.entity'

export const DATABASE_NAME = 'cyclecheck.db'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'sqlite',
        database: join(configService.config.dataDir, DATABASE_NAME),
        logging: true,
        entities: [PlaceEntity],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
