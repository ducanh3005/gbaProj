import { PaginatedResponse } from '@/types/paging';
import { Product } from '@/types/product';
import { NextResponse } from 'next/server';
import productData from '@/asstes/products.json';

export async function GET(req: Request): Promise<NextResponse<PaginatedResponse<Product>>> {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

  // Calculate the starting and ending indices of the items for the current page
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Get the paginated items
  const paginatedItems = (productData as Product[]).slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedItems,
    meta: {
      currentPage: page,
      pageSize: pageSize,
      totalItems: productData.length,
      totalPages: Math.ceil(productData.length / pageSize),
    },
  });

}
