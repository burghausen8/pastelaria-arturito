// import { createContainer, asClass, asValue } from 'awilix';
// import { HttpClient } from '../services/http-client/httpClient';
// import { RemoteDatabase } from '../services/remote-database/remoteDatabase';
// import { ProductRepositoryImpl } from '@/services/product/product-repository-impl';
// import { ProductService } from '@/services/product/product-service';
// import { CartRepositoryImpl } from '@/services/cart/cart-repository-impl';
// import { CartService } from '@/services/cart/cart-service';
// import { StorageService } from '../services/storage/storage-service';
// import { AddressService } from '@/services/address/address-service';
// import { AddressRepositoryImpl } from '@/services/address/address-repository-impl';

// const di = createContainer();

// di.register({
//  storageService: asClass(StorageService).singleton(),
//  httpClient: asClass(HttpClient).singleton(),
//  remoteDatabase: asClass(RemoteDatabase).transient(),
//  productRepository: asClass(ProductRepositoryImpl).transient(),
//  productService: asClass(ProductService).transient(),
//  cartRepository: asClass(CartRepositoryImpl).transient(),
//  cartService: asClass(CartService).transient(),
//  addressRepository: asClass(AddressRepositoryImpl).transient(),
//  addressService: asClass(AddressService).transient(),
// });

// export default di;