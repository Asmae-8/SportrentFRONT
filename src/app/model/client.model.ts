export interface Client{
  name:string;
  email:string;
  phoneNumber:string;
  address:string;
  username:string;

  _links?:{
    self: {
      href: string;

    },
    product?:{
      href:string;
    },
    category?:{
      href:string
    }
  }

}
