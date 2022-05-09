let token = '33a0767f5e31646a72060938491e36179aec03d68fe1a58b'

export const serverCalls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/heroes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/heroes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('failed to load data')
        }

        return await response.json()
    },
    update: async ( id:string, data:any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/heroes/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
    });
},
    delete: async (id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/api/heroes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
            
    })
}
}
