import CreateProduct from "@/modules/Products/views/CreateProduct";

export default [
    {
        path: '/create-product',
        name: 'CreateProduct',
        component: CreateProduct,
        meta:{
            layout: "main"
        }
    }
]