import { chromium, test, Page, BrowserContext, expect} from "@playwright/test"


test("GET: LIST USERS", async ({request})=>{
    let result = await request.get("https://reqres.in/api/users?page=1")
    let data = await result.json()
    console.log(data)
})

test("GET: SINGLE USER", async ({request})=>{
    let result = await request.get("https://reqres.in/api/users/2")
    let data = await result.json()
    console.log(data)
})

test("POST: CREATE", async ({request})=>{
    let name = "Cheshire"
    let job = "Mad Cat"
    let result = await request.post("https://reqres.in/api/users", 
    {data:{ name, job }})
    let data = await result.json()
    expect(data.name).toBe(name);
    expect(data.job).toBe(job);
})

test.only("DELETE: DELETE", async ({request})=>{
    let result = await request.delete("https://reqres.in/api/users/2")
    expect(result.status()).toBe(204);
})