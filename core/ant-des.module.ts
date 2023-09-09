import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerComponent, NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { registerLocaleData } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
@NgModule({
  declarations: [],
  imports: [CommonModule, NzDividerModule],
  exports: [
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzImageModule,
    NzDividerModule,
    NzDividerComponent,
    NzDrawerModule,
    NzButtonModule,
    NzTableModule,
    NzBadgeModule,
    NzDropDownModule,
    NzFormModule,
    NzInputModule,
    NzAlertModule,
    NzSpinModule,
    NzModalModule,
    NzRadioModule,
    NzCardModule,
    NzAvatarModule,
    NzTagModule,
    NzSelectModule,
    NzCheckboxModule,
    NzTreeModule,
    NzSkeletonModule,
    NzUploadModule,
    NzTableModule,
    NzTabsModule,
    NzPopconfirmModule,
    NzNotificationModule,
    NzMessageModule,
    NzPageHeaderModule,
    NzGridModule,
    NzSpaceModule,
    NzEmptyModule,
  ],
  providers   : [
    { provide: NZ_I18N,useValue: en_US }
  ]

})
export class AntDesModule {}




// NzFormModule,
// NzTableModule,
// NzDropDownModule,
// NzMenuModule,
// NzPopoverModule,
// NzGridModule,