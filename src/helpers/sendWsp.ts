import { product } from "../interfaces/interfaces";
export const gotToWsp=(products:number,totalAmount:number,listCart:product[])=>{
    const detalleProductos = listCart.map(producto => 
        `   nombre del producto:${producto.nameProduct}
            Precio: ${producto.price}
            cantidad:${producto.quantity}
        `
    ).join('\n');

    const defaultMessage = `
        Hola,vengo desde la página de Puppeeter y me gustaría obtener los siguientes productos:
        ${detalleProductos}
        Costo total: ${totalAmount}
        N° artículos: ${products}
    `;
    const whatsappUrl = `https://wa.me/${import.meta.env.VITE_PHONE}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
}