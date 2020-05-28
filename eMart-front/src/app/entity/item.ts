/**
 * item
 */
export class Item {
    itemid: number;
    itemname: string;
    itemprice: string;
    description: string;
    catalog: string;
    sellerid: string;
    /**
     * 构造函数
     * @param itemid 
     * @param itemname 
     * @param itemprice 
     * @param description 
     * @param catalog 
     * @param sellerid 
     */
    constructor(itemid?: number, itemname?: string,  itemprice?: string, description?: string, catalog?:string, sellerid?:string) {
      this.itemid = itemid;
      this.itemname = itemname;
      this.itemprice = itemprice;
      this.description = description;
      this.catalog = catalog;
      this.sellerid = sellerid;
    }
  }
  