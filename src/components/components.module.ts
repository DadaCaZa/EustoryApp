import { NgModule } from '@angular/core';
import { UserComponent } from './user/user';
import { ThematicComponent } from './thematic/thematic';
import { CityComponent } from './city/city';
import { CountryComponent } from './country/country';
import { PoiComponent } from './poi/poi';
import { TagComponent } from './tag/tag';
import { YincanaComponent } from './yincana/yincana';
import { EvaluationComponent } from './evaluation/evaluation';

@NgModule({
	declarations: [UserComponent,
    ThematicComponent,
    CityComponent,
    CountryComponent,
    PoiComponent,
    TagComponent,
    YincanaComponent,
    EvaluationComponent,],
	imports: [],
	exports: [UserComponent,
    ThematicComponent,
    CityComponent,
    CountryComponent,
    PoiComponent,
    TagComponent,
    YincanaComponent,
    EvaluationComponent,]
})
export class ComponentsModule {}
