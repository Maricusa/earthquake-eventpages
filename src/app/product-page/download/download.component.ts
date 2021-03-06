import { Component, Input } from '@angular/core';

import { ContentsXmlService } from '../../core/contents-xml.service';


@Component({
  selector: 'product-page-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {

  private _product: any;
  private open = false;

  constructor (
    public service: ContentsXmlService
  ) { }

  get product (): any {
    return this._product;
  }

  @Input() set product (product: any) {
    this._product = product;
    if (this.open) {
      this.loadContentsXml();
    }
  }

  isOpen () {
    return this.open;
  }

  loadContentsXml () {
    let product = this._product;
    if (product && product.phasedata) {
      // prefer phase data when availble
      product = product.phasedata;
    }
    this.service.get(product);
  }

  onClose () {
    this.open = false;
  }

  onOpen () {
    this.open = true;
    this.loadContentsXml();
  }
}


