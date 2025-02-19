export interface Product {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
    fav?: boolean;
    rating: number;
    categoria: 'Electrónica' | 'Accesorios' | 'Computadoras';
  }
  
  export interface CartItem {
    id: any;
    product: Product;
    quantity: number;
  }
  