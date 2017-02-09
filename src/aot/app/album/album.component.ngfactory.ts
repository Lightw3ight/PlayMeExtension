/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/album/album.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/router/src/router_state';
import * as import9 from '../../../app/api/album.service';
import * as import10 from '../../../app/api/queue.service';
import * as import11 from '@angular/common/src/location/location';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from './album.component.css.shim';
import * as import15 from '../../../app/now-playing/zone-selector/zone-selector.component';
import * as import16 from '../../../app/shared/search-bar/search-bar.component';
import * as import17 from '../../../app/shared/breadcrumbs/breadcrumbs.component';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '../now-playing/zone-selector/zone-selector.component.ngfactory';
import * as import21 from '../../../app/api/audio-zone.service';
import * as import22 from '../shared/search-bar/search-bar.component.ngfactory';
import * as import23 from '@angular/router/src/router';
import * as import24 from '../shared/breadcrumbs/breadcrumbs.component.ngfactory';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import27 from '@angular/core/src/security';
import * as import28 from '@angular/router/src/directives/router_link';
import * as import29 from '@angular/common/src/location/location_strategy';
import * as import30 from '../../../app/shared/simple-track-list-item/simple-track-list-item.component';
import * as import31 from '../shared/simple-track-list-item/simple-track-list-item.component.ngfactory';
var renderType_AlbumComponent_Host:import0.RenderComponentType = (null as any);
class _View_AlbumComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AlbumComponent_0_4:import3.AlbumComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AlbumComponent_Host0,renderType_AlbumComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('album',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AlbumComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AlbumComponent_0_4 = new import3.AlbumComponent(this.parentInjector.get(import8.ActivatedRoute),this.parentInjector.get(import9.AlbumService),this.parentInjector.get(import10.QueueService),this.parentInjector.get(import11.Location));
    this._appEl_0.initComponent(this._AlbumComponent_0_4,[],compView_0);
    compView_0.create(this._AlbumComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AlbumComponent) && (0 === requestNodeIndex))) { return this._AlbumComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._AlbumComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AlbumComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AlbumComponent_Host === (null as any))) { (renderType_AlbumComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_AlbumComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AlbumComponentNgFactory:import13.ComponentFactory<import3.AlbumComponent> = new import13.ComponentFactory<import3.AlbumComponent>('album',viewFactory_AlbumComponent_Host0,import3.AlbumComponent);
const styles_AlbumComponent:any[] = [import14.styles];
var renderType_AlbumComponent:import0.RenderComponentType = (null as any);
class _View_AlbumComponent0 extends import1.AppView<import3.AlbumComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _ZoneSelectorComponent_9_4:import15.ZoneSelectorComponent;
  _text_10:any;
  _el_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _SearchBarComponent_11_4:import16.SearchBarComponent;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _BreadcrumbsComponent_18_4:import17.BreadcrumbsComponent;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _TemplateRef_20_5:any;
  _NgIf_20_6:import18.NgIf;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _anchor_37:any;
  /*private*/ _appEl_37:import2.AppElement;
  _TemplateRef_37_5:any;
  _NgFor_37_6:import19.NgFor;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AlbumComponent0,renderType_AlbumComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','app-root');
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','album-art-background');
    this._el_3 = this.renderer.createElement(this._el_2,'img',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','content-top album-header');
    this._text_6 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','row nav-bar');
    this._text_8 = this.renderer.createText(this._el_7,'\n      ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'zone-selector',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','col-xs-3');
    this._appEl_9 = new import2.AppElement(9,7,this,this._el_9);
    var compView_9:any = import20.viewFactory_ZoneSelectorComponent0(this.viewUtils,this.injector(9),this._appEl_9);
    this._ZoneSelectorComponent_9_4 = new import15.ZoneSelectorComponent(this.parentInjector.get(import21.AudioZoneService));
    this._appEl_9.initComponent(this._ZoneSelectorComponent_9_4,[],compView_9);
    compView_9.create(this._ZoneSelectorComponent_9_4,[],(null as any));
    this._text_10 = this.renderer.createText(this._el_7,'\n      ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_7,'search-bar',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','col-xs-9');
    this._appEl_11 = new import2.AppElement(11,7,this,this._el_11);
    var compView_11:any = import22.viewFactory_SearchBarComponent0(this.viewUtils,this.injector(11),this._appEl_11);
    this._SearchBarComponent_11_4 = new import16.SearchBarComponent(this.parentInjector.get(import23.Router));
    this._appEl_11.initComponent(this._SearchBarComponent_11_4,[],compView_11);
    compView_11.create(this._SearchBarComponent_11_4,[],(null as any));
    this._text_12 = this.renderer.createText(this._el_7,'\n    ',(null as any));
    this._text_13 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','row');
    this._text_15 = this.renderer.createText(this._el_14,'\n      ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_14,'div',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','col-xs-8');
    this._text_17 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_16,'breadcrumbs',(null as any));
    this._appEl_18 = new import2.AppElement(18,16,this,this._el_18);
    var compView_18:any = import24.viewFactory_BreadcrumbsComponent0(this.viewUtils,this.injector(18),this._appEl_18);
    this._BreadcrumbsComponent_18_4 = new import17.BreadcrumbsComponent(this.parentInjector.get(import11.Location));
    this._appEl_18.initComponent(this._BreadcrumbsComponent_18_4,[],compView_18);
    compView_18.create(this._BreadcrumbsComponent_18_4,[],(null as any));
    this._text_19 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor(this._el_16,(null as any));
    this._appEl_20 = new import2.AppElement(20,16,this,this._anchor_20);
    this._TemplateRef_20_5 = new import25.TemplateRef_(this._appEl_20,viewFactory_AlbumComponent1);
    this._NgIf_20_6 = new import18.NgIf(this._appEl_20.vcRef,this._TemplateRef_20_5);
    this._text_21 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_16,'h1',(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'',(null as any));
    this._text_24 = this.renderer.createText(this._el_16,'\n      ',(null as any));
    this._text_25 = this.renderer.createText(this._el_14,'\n      ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_14,'div',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','col-xs-4');
    this._text_27 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_26,'img',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','img-responsive');
    this._text_29 = this.renderer.createText(this._el_26,'\n      ',(null as any));
    this._text_30 = this.renderer.createText(this._el_14,'\n    ',(null as any));
    this._text_31 = this.renderer.createText(this._el_5,'\n  ',(null as any));
    this._text_32 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_33,'class','content-bottom');
    this._text_34 = this.renderer.createText(this._el_33,'\n    ',(null as any));
    this._el_35 = this.renderer.createElement(this._el_33,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_35,'class','list-unstyled');
    this._text_36 = this.renderer.createText(this._el_35,'\n      ',(null as any));
    this._anchor_37 = this.renderer.createTemplateAnchor(this._el_35,(null as any));
    this._appEl_37 = new import2.AppElement(37,35,this,this._anchor_37);
    this._TemplateRef_37_5 = new import25.TemplateRef_(this._appEl_37,viewFactory_AlbumComponent2);
    this._NgFor_37_6 = new import19.NgFor(this._appEl_37.vcRef,this._TemplateRef_37_5,this.parentInjector.get(import26.IterableDiffers),this.ref);
    this._text_38 = this.renderer.createText(this._el_35,'\n    ',(null as any));
    this._text_39 = this.renderer.createText(this._el_33,'\n  ',(null as any));
    this._text_40 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._anchor_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._anchor_37,
      this._text_38,
      this._text_39,
      this._text_40
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.ZoneSelectorComponent) && (9 === requestNodeIndex))) { return this._ZoneSelectorComponent_9_4; }
    if (((token === import16.SearchBarComponent) && (11 === requestNodeIndex))) { return this._SearchBarComponent_11_4; }
    if (((token === import17.BreadcrumbsComponent) && (18 === requestNodeIndex))) { return this._BreadcrumbsComponent_18_4; }
    if (((token === import25.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import18.NgIf) && (20 === requestNodeIndex))) { return this._NgIf_20_6; }
    if (((token === import25.TemplateRef) && (37 === requestNodeIndex))) { return this._TemplateRef_37_5; }
    if (((token === import19.NgFor) && (37 === requestNodeIndex))) { return this._NgFor_37_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_1:any = this.context.activeZone;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._ZoneSelectorComponent_9_4.activeZone = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ZoneSelectorComponent_9_4.ngOnInit(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SearchBarComponent_11_4.ngOnInit(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._BreadcrumbsComponent_18_4.ngOnInit(); }
    const currVal_2:any = ((this.context.album == (null as any))? (null as any): this.context.album.Artist);
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_20_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    changes = (null as any);
    const currVal_5:any = ((this.context.album == (null as any))? (null as any): this.context.album.Tracks);
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgFor_37_6.ngForOf = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    if ((changes !== (null as any))) { this._NgFor_37_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_37_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = (((this.context.album == (null as any))? (null as any): this.context.album.ArtworkUrlLarge) || '/assets/images/pixel.gif');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_3,'src',this.viewUtils.sanitizer.sanitize(import27.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    const currVal_3:any = import4.interpolate(1,'',((this.context.album == (null as any))? (null as any): this.context.album.Name),'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_23,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = (((this.context.album == (null as any))? (null as any): this.context.album.ArtworkUrlLarge) || '/assets/images/pixel.gif');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_28,'src',this.viewUtils.sanitizer.sanitize(import27.SecurityContext.URL,currVal_4));
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_AlbumComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AlbumComponent> {
  if ((renderType_AlbumComponent === (null as any))) { (renderType_AlbumComponent = viewUtils.createRenderComponentType('C:/data/solutions/PlayMeExtension/src/app/album/album.component.html',0,import12.ViewEncapsulation.Emulated,styles_AlbumComponent,{})); }
  return new _View_AlbumComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_AlbumComponent1 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  _RouterLinkWithHref_1_3:import28.RouterLinkWithHref;
  _text_2:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AlbumComponent1,renderType_AlbumComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'h2',(null as any));
    this._el_1 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_1,'href','#');
    this._RouterLinkWithHref_1_3 = new import28.RouterLinkWithHref(this.parent.parentInjector.get(import23.Router),this.parent.parentInjector.get(import8.ActivatedRoute),this.parent.parentInjector.get(import29.LocationStrategy));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._arr_0 = import4.pureProxy3((p0:any,p1:any,p2:any):any[] => {
      return [
        p0,
        p1,
        p2
      ]
      ;
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import28.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_1_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0('/artist',((this.parent.context.album == (null as any))? (null as any): ((this.parent.context.album.MusicProvider == (null as any))? (null as any): this.parent.context.album.MusicProvider.Identifier)),((this.parent.context.album == (null as any))? (null as any): ((this.parent.context.album.Artist == (null as any))? (null as any): this.parent.context.album.Artist.Link)));
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_1_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_1_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_1_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_1,'href',this.viewUtils.sanitizer.sanitize(import27.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',((this.parent.context.album == (null as any))? (null as any): ((this.parent.context.album.Artist == (null as any))? (null as any): this.parent.context.album.Artist.Name)),'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_2,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_1_3.ngOnDestroy();
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_1_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_AlbumComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_AlbumComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_AlbumComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _SimpleTrackListItemComponent_2_4:import30.SimpleTrackListItemComponent;
  _text_3:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AlbumComponent2,renderType_AlbumComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'simple-track-list-item',(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import31.viewFactory_SimpleTrackListItemComponent0(this.viewUtils,this.injector(2),this._appEl_2);
    this._SimpleTrackListItemComponent_2_4 = new import30.SimpleTrackListItemComponent(this.parent.parentInjector.get(import10.QueueService));
    this._appEl_2.initComponent(this._SimpleTrackListItemComponent_2_4,[],compView_2);
    compView_2.create(this._SimpleTrackListItemComponent_2_4,[],(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import30.SimpleTrackListItemComponent) && (2 === requestNodeIndex))) { return this._SimpleTrackListItemComponent_2_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.$implicit;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._SimpleTrackListItemComponent_2_4.track = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AlbumComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_AlbumComponent2(viewUtils,parentInjector,declarationEl);
}