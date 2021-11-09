import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [ProductModule, TopPageModule, ReviewModule, AuthModule],
})
export class AppModule {}