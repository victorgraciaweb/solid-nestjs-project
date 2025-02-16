import { Module } from '@nestjs/common';
import { SingleResponsibilityModule } from './modules/single-responsibility/single-responsibility.module';
import { OpenClosedModule } from './modules/open-closed/open-closed.module';
import { LiskovSubstitutionModule } from './modules/liskov-substitution/liskov-substitution.module';
import { InterfaceSegregationModule } from './modules/interface-segregation/interface-segregation.module';
import { DependencyInversionModule } from './modules/dependency-inversion/dependency-inversion.module';

@Module({
  imports: [
    SingleResponsibilityModule,
    OpenClosedModule,
    LiskovSubstitutionModule,
    InterfaceSegregationModule,
    DependencyInversionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
