
interface SeedData{
    entries: SeedEntry[]
}

interface SeedEntry{
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries:[
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla lacus, dapibus ut arcu eu, hendrerit faucibus justo. Vivamus a ultrices lectus. Pellentesque semper mi at facilisis tincidunt. Maecenas vel dolor quis ante laoreet vehicula.',
            status: 'pendding',
            createdAt: Date.now(),
        },
        {
            description: 'Integer non felis imperdiet, accumsan mauris sit amet, laoreet est. Sed varius ex eu dui aliquet commodo. Nulla a tempor ligula. Maecenas felis augue, sodales quis semper et, eleifend',
            status: 'in-progress',
            createdAt: Date.now() - 100000,
        },
        {
            description: ', euismod eu eros vitae, venenatis scelerisque felis. Phasellus aliquam velit aliquet, ultrices risus vel, malesuada erat. Curabitur porttitor turpis viverra arcu pretium',
            status: 'finished',
            createdAt: Date.now()- 10000,
        },
    ]
}