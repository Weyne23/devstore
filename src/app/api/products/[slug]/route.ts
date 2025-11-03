import { z } from 'zod';
import data from '../data.json'

type ProductProps = {
    params: {
        slug: string
    }
}

export async function GET(_: Request, { params }: ProductProps) {
    const { slug } = await params;
    await new Promise((resolve) => setTimeout(resolve, 2000));

    //Diferença dele pro safeparse é que no safeparse ele não quebra
    //se a validação der errado, já no parse ele quebra logo
    const slugRequest = z.string().parse(slug)

    const product = data.products.find((product) => product.slug === slugRequest)
    console.log(product)

    if(!product){
        return Response.json({message: 'Product not found.'}, {status: 400})
    }

    return Response.json(product)
}