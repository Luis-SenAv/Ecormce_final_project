const request=require('supertest')
const app=require('../app')

let token
let userId
beforeAll(async()=>{
    const user={
        email: "luchito721@outlook.com",
        password:"1234"
    }
    const res=await request(app)
        .post("/api/v1/users/login")
        .send(user)
    
    token=res.body.token
    
})

test('Get=> /api/v1/users', async() => { 
    const res=await request(app)
        .get("/api/v1/users")
        .set('Authorization',`Bearer ${token}`)
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body).toHaveLength(1)
    
})

test('post=> /api/v1/users', async() => { 

    const user=  {
        firstName: "Shadia",
        lastName: "Sanchez",
        email: "shasafu@outlook.com",
        password:"123456",
        phone: "+573135702548"
    } 

    const res=await request(app)
        .post("/api/v1/users")
        .send(user)
        userId=res.body.id
        expect(res.status).toBe(201)
        expect(res.body).toBeDefined()
        expect(res.body.name).toBe(user.name)
    
})

test('update=> /api/v1/users/:id', async() => { 
    const userUpdate={
        firstName: "Shadia Ester",
        phone: "+573187708057"
    }
    const res=await request(app)
        .put(`/api/v1/users/${userId}`)
        .set('Authorization',`Bearer ${token}`)
        .send(userUpdate)
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body.phone).toBe(userUpdate.phone)
        expect(res.body.firstName).toBe(userUpdate.firstName)
})

test('post=> /api/v1/users/login', async() => { 
    const user={
        email: "shasafu@outlook.com",
        password:"123456"
    }
    const res=await request(app)
        .post("/api/v1/users/login")
        .send(user)
        token=res.body.token
        userId=res.body.user.id
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body.user.email).toBe(user.email)
        
})

test('delete=> /api/v1/users/:id', async() => { 
    
    const res=await request(app)
        .delete(`/api/v1/users/${userId}`)
        .set('Authorization',`Bearer ${token}`)
    console.log(res.body)
    expect(res.status).toBe(204)
        
})
