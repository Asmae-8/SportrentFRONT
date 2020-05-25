export interface Product {
  state: any;
  periode: string;
  time:string;

  id:number;
  name:string;
  photo:string;
  description:string;
  Address:string;
  client :string;
  Contact:string;


  _links:{
    self: {
      href: string;

    },
    category:{
      href:string;
    },
     products:{
      href:string
    }
  }
}
