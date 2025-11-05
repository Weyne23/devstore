import { z } from 'zod';
import type { NextRequest } from 'next/server'
import data from '../data.json'

type ProductProps = {
    params: {
        slug: string
    }
}

//Aqui pela busca ser um Search Params, "/search?q=exemplo", não receberemos o 
// valor por parametro, que é quando a URL vem com slug ex: "/search/:slug"
export async function GET(request: NextRequest) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { searchParams } = request.nextUrl

    const query = z.string().parse(searchParams.get('q'))

    const products = data.products.filter(product => {
        return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })

    return Response.json(products)
}