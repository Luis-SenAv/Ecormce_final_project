const app =require('../app')
const request=require('supertest')
const Category = require('../models/Category')
require('../models')

let token
let productId
beforeAll(async()=>{
       const user={
        email: "luchito721@outlook.com",
        password:"1234"
    }
    const res=await request(app)
        .post("/api/v1/users/login")
        .send(user)    
    token=res.body.token

    const categoryBody={
        name:"Smart Tv"
    }
    await Category.create(categoryBody)
})

test('post=> /api/v1/products',async () => {  
    const product={
        title:"Daewoo oled 24''",
        description:"lorem*20",
        categoryId:1,
        price:56.5
    }
    const res=await request(app)
        .post('/api/v1/products')
        .set('Authorization',`Bearer ${token}`)
        .send(product)
    productId=res.body.id
    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.title).toBe(product.title)
})

test('get=> /api/v1/products', async() => { 

    const res= await request(app)
        .get('/api/v1/products')
    console.log(res.body)
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
})

test('get=> /api/v1/products/:id', async() => { 

    const res= await request(app)
        .get(`/api/v1/products/${productId}`)
        console.log(res.body)
    expect(res.status).toBe(200)
})

test('put=> /api/v1/products/:id', async() => { 

    const productUpdate={
        price:100.5
    }

    const res= await request(app)
        .put(`/api/v1/products/${productId}`)
        .set('Authorization',`Bearer ${token}`)
        .send(productUpdate)
    expect(res.status).toBe(200)
    expect(res.body.price).toBe(productUpdate.price.toString())
})

test('delete=> /api/v1/products/:id', async() => { 

    const res= await request(app)
        .delete(`/api/v1/products/${productId}`)
        .set('Authorization',`Bearer ${token}`)
      
    expect(res.status).toBe(204)
    
})
