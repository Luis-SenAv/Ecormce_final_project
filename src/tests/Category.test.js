const app=require('../app')
const request=require('supertest')
const Category = require('../models/Category')
require('../models')

let token
let categoryId

beforeAll(async()=>{
    const category={
        name:"smartTv"
    }
    const user={
        email: "luchito721@outlook.com",
        password:"1234"
    }
    const res=await request(app)
        .post("/api/v1/users/login")
        .send(user)    
    token=res.body.token
    await Category.create(category)
})

test('Get=> /api/v1/categories',async () => { 
    const res=await request(app)
        .get('/api/v1/categories')
        console.log(res.body)
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body).toHaveLength(1)
})

test('Post=> /api/v1/categories',async () => { 
    const category={
        name:"smartPhone"
    }
    const res=await request(app)
        .post('/api/v1/categories')
        .set('Authorization',`Bearer ${token}`)
        .send(category)
        categoryId=res.body.id
        expect(res.status).toBe(201)
        expect(res.body.name).toBe(category.name)
})

test('Delete=> /api/v1/categories/:id',async () => { 
   
    const res=await request(app)
        .delete(`/api/v1/categories/${categoryId}`)
        .set('Authorization',`Bearer ${token}`)

        expect(res.status).toBe(204)
        
})

